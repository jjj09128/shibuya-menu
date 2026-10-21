import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import type { EnvState } from "../simulation/timeOfDay";

const NEON_COLORS = ["#3ae9ff", "#ff2f92", "#ffa32f", "#8b5cff", "#5cff9d", "#ff4949"];
const SIGN_TEXTS = [
  "渋谷",
  "カラオケ",
  "ラーメン",
  "居酒屋",
  "東京",
  "ネオン",
  "24H",
  "BAR",
  "GAME",
  "寿司",
  "薬",
  "酒場",
];
const BILLBOARD_TEXTS = ["渋谷", "SHIBUYA", "呪術", "TOKYO", "NEON", "東京"];
const AD_PALETTES: Array<[string, string]> = [
  ["#e63b2e", "#ffd24a"],
  ["#1f66c9", "#ffffff"],
  ["#f3c623", "#1c1c1c"],
  ["#f4f1ea", "#d8232a"],
  ["#0f8b5f", "#f7f4ec"],
  ["#16181f", "#ff5b8a"],
];

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface FacadeDef {
  base: string;
  lit: string[];
  ratio: number;
}

const FACADE_DEFS: FacadeDef[] = [
  { base: "#8d9299", lit: ["#e8e4d8", "#dde6ee", "#f1eadb"], ratio: 0.34 },
  { base: "#9aa0a4", lit: ["#e2e6e9", "#f0e8da"], ratio: 0.26 },
  { base: "#7f858c", lit: ["#dfe5ea", "#eae2d2"], ratio: 0.4 },
  { base: "#a8a49b", lit: ["#f2ecdf", "#e3e8ec"], ratio: 0.24 },
  { base: "#b2aca1", lit: ["#f4efe3", "#e8eced"], ratio: 0.22 },
  { base: "#8f9198", lit: ["#e6e9ec", "#efe6d6"], ratio: 0.3 },
];

interface FacadeTextures {
  map: THREE.CanvasTexture;
  emissive: THREE.CanvasTexture;
}

function createFacadeTextures(def: FacadeDef, rand: () => number): FacadeTextures {
  const width = 128;
  const height = 256;
  const cols = 7;
  const rows = 16;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const glow = document.createElement("canvas");
  glow.width = width;
  glow.height = height;
  const gctx = glow.getContext("2d")!;

  const base = new THREE.Color(def.base);
  ctx.fillStyle = `rgb(${Math.round(base.r * 255)}, ${Math.round(base.g * 255)}, ${Math.round(
    base.b * 255,
  )})`;
  ctx.fillRect(0, 0, width, height);

  const shade = ctx.createLinearGradient(0, 0, 0, height);
  shade.addColorStop(0, "rgba(255,255,255,0.06)");
  shade.addColorStop(0.55, "rgba(0,0,0,0.12)");
  shade.addColorStop(1, "rgba(0,0,0,0.5)");
  ctx.fillStyle = shade;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(0,0,0,0.55)";
  for (let r = 0; r <= rows; r++) {
    ctx.fillRect(0, Math.round((r * height) / rows), width, 1.6);
  }

  gctx.fillStyle = "#000";
  gctx.fillRect(0, 0, width, height);

  const marginX = width * 0.07;
  const marginY = height * 0.045;
  const cellW = (width - marginX * 2) / cols;
  const cellH = (height - marginY * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = marginX + c * cellW;
      const y = marginY + r * cellH;
      const w = cellW * 0.72;
      const h = cellH * 0.52;
      const lit = rand() < def.ratio;
      if (lit) {
        const tint = def.lit[Math.floor(rand() * def.lit.length)];
        ctx.fillStyle = tint;
        ctx.globalAlpha = 0.85;
        ctx.fillRect(x, y, w, h);
        ctx.globalAlpha = 1;
        gctx.fillStyle = `rgba(255,255,255,${(0.45 + rand() * 0.55).toFixed(3)})`;
        gctx.fillRect(x, y, w, h);
      } else {
        ctx.fillStyle = "#3c434b";
        ctx.fillRect(x, y, w, h);
      }
    }
  }

  const map = new THREE.CanvasTexture(canvas);
  const emissive = new THREE.CanvasTexture(glow);
  for (const texture of [map, emissive]) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
  }
  return { map, emissive };
}

function createSignTexture(text: string, color: string): THREE.CanvasTexture {
  const width = 128;
  const height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "rgba(4,6,11,0.9)";
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.16;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  ctx.strokeStyle = color;
  ctx.lineWidth = 7;
  ctx.strokeRect(8, 8, width - 16, height - 16);

  ctx.font =
    'bold 80px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = color;
  ctx.shadowBlur = 26;
  ctx.fillStyle = color;

  const chars = [...text];
  const step = 440 / chars.length;
  chars.forEach((char, index) => {
    ctx.fillText(char, width / 2, 38 + step * (index + 0.5));
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function hexLuminance(hex: string): number {
  const value = parseInt(hex.replace("#", ""), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
}

function createBillboardTexture(
  text: string,
  colorA: string,
  colorB: string,
  rand: () => number,
): THREE.CanvasTexture {
  const width = 512;
  const height = 256;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = colorA;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(width * 0.5, height * 0.5);
  ctx.rotate(-0.2);
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = colorB;
  ctx.fillRect(-width * 0.8, -height * 0.9, width * 1.6, height * 0.55);
  ctx.restore();

  ctx.globalAlpha = 0.16;
  ctx.fillStyle = colorB;
  ctx.beginPath();
  ctx.arc(width * 0.82, height * 0.24, 54, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = "rgba(255,255,255,0.82)";
  ctx.lineWidth = 5;
  ctx.strokeRect(9, 9, width - 18, height - 18);

  const ink = hexLuminance(colorA) > 0.58 ? "#14161b" : "#f9f6ee";
  const accent = hexLuminance(colorB) > 0.62 ? "#14161b" : colorB;

  ctx.font =
    '900 104px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = ink;
  ctx.fillText(text, 34, height * 0.47, width - 68);

  ctx.font = '600 24px "Noto Sans JP", sans-serif';
  ctx.fillStyle = accent;
  ctx.fillText("SHIBUYA — TOKYO", 38, height - 38);

  ctx.globalAlpha = 0.08;
  ctx.fillStyle = "#000";
  for (let i = 0; i < 120; i++) {
    ctx.fillRect(rand() * width, rand() * height, 1.4, 1.4);
  }
  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createTowerTextures(rand: () => number): FacadeTextures {
  const width = 256;
  const height = 512;
  const cols = 20;
  const rows = 36;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const glow = document.createElement("canvas");
  glow.width = width;
  glow.height = height;
  const gctx = glow.getContext("2d")!;

  ctx.fillStyle = "#3a4a5e";
  ctx.fillRect(0, 0, width, height);
  gctx.fillStyle = "#000";
  gctx.fillRect(0, 0, width, height);

  const cellW = width / cols;
  const cellH = height / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = rand() < 0.16;
      const warm = rand() < 0.35;
      ctx.fillStyle = lit
        ? warm
          ? "#c8b591"
          : "#a9c2d8"
        : rand() < 0.5
          ? "#41526a"
          : "#38485c";
      ctx.fillRect(c * cellW + 1, r * cellH + 1, cellW - 2, cellH - 2.5);

      if (lit) {
        gctx.fillStyle = `rgba(255,255,255,${(0.35 + rand() * 0.55).toFixed(3)})`;
        gctx.fillRect(c * cellW + 1, r * cellH + 1, cellW - 2, cellH - 2.5);
      }
    }
  }

  ctx.fillStyle = "rgba(18,26,36,0.75)";
  for (let c = 0; c <= cols; c++) {
    ctx.fillRect(c * cellW, 0, 2, height);
  }
  ctx.fillStyle = "rgba(140,160,180,0.22)";
  for (let r = 0; r <= rows; r++) {
    ctx.fillRect(0, r * cellH, width, 1.5);
  }

  const map = new THREE.CanvasTexture(canvas);
  const emissive = new THREE.CanvasTexture(glow);
  for (const texture of [map, emissive]) {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 8;
  }
  return { map, emissive };
}

function createStationTexture(): THREE.CanvasTexture {
  const width = 512;
  const height = 256;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#dcd8cc";
  ctx.fillRect(0, 0, width, height);

  const rows = 4;
  const rowHeight = height / (rows + 1);
  for (let r = 0; r < rows; r++) {
    const y = 26 + r * rowHeight;
    ctx.fillStyle = "#46586a";
    ctx.fillRect(18, y, width - 36, rowHeight * 0.62);

    ctx.fillStyle = "rgba(198,214,228,0.45)";
    ctx.fillRect(18, y + 3, width - 36, rowHeight * 0.18);

    ctx.fillStyle = "#cfcabd";
    for (let x = 18; x < width - 18; x += 42) {
      ctx.fillRect(x, y, 3, rowHeight * 0.62);
    }
  }

  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.fillRect(0, 0, width, 10);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 1);
  texture.anisotropy = 4;
  return texture;
}

function createStationSignTexture(): THREE.CanvasTexture {
  const width = 1024;
  const height = 160;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#101a16";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#3f8f4a";
  ctx.fillRect(0, height - 16, width, 16);

  ctx.font =
    '900 88px "Noto Sans JP", "Noto Sans CJK JP", "PingFang SC", "Microsoft YaHei", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#f5f2e9";
  ctx.fillText("渋谷駅", width * 0.32, height * 0.5);

  ctx.font = '600 42px "Noto Sans JP", sans-serif';
  ctx.fillStyle = "#bfe3c2";
  ctx.fillText("SHIBUYA STATION", width * 0.72, height * 0.5);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createCrossingTexture(): THREE.CanvasTexture {
  const size = 1024;
  const world = 160;
  const scale = size / world;
  const center = size / 2;
  const u = (value: number) => value * scale;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#33373d";
  ctx.fillRect(0, 0, size, size);

  const rand = mulberry32(77);
  for (let i = 0; i < 5200; i++) {
    ctx.fillStyle = `rgba(255,255,255,${(rand() * 0.03).toFixed(3)})`;
    ctx.fillRect(rand() * size, rand() * size, 1.5, 1.5);
  }

  ctx.fillStyle = "rgba(0,0,0,0.28)";
  ctx.fillRect(center - u(19), 0, u(38), size);
  ctx.fillRect(0, center - u(19), size, u(38));

  ctx.fillStyle = "rgba(224,232,232,0.32)";
  for (let x = -78; x <= 78; x += 8) {
    if (Math.abs(x) < 22) continue;
    ctx.fillRect(center + u(x), center - u(0.16), u(3.6), u(0.32));
  }
  for (let z = -78; z <= 78; z += 8) {
    if (Math.abs(z) < 22) continue;
    ctx.fillRect(center - u(0.16), center + u(z), u(0.32), u(3.6));
  }

  ctx.fillStyle = "rgba(222,230,230,0.78)";
  for (const side of [-1, 1]) {
    for (let t = -17; t <= 17; t += 2.5) {
      ctx.fillRect(center + u(side * 13 - 4.5), center + u(t), u(9), u(1.15));
    }
    for (let t = -17; t <= 17; t += 2.5) {
      ctx.fillRect(center + u(t), center + u(side * 13 - 4.5), u(1.15), u(9));
    }
  }

  ctx.save();
  ctx.beginPath();
  ctx.rect(center - u(19), center - u(19), u(38), u(38));
  ctx.clip();
  ctx.globalAlpha = 0.74;
  for (const angle of [Math.PI / 4, -Math.PI / 4]) {
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(angle);
    for (let d = -18; d <= 18; d += 2.7) {
      ctx.fillRect(-u(18), u(d), u(36), u(1.1));
    }
    ctx.restore();
  }
  ctx.restore();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = "rgba(182,194,206,0.5)";
  ctx.lineWidth = u(0.35);
  ctx.beginPath();
  ctx.moveTo(center + u(19), 0);
  ctx.lineTo(center + u(19), center - u(19));
  ctx.moveTo(center + u(19), center + u(19));
  ctx.lineTo(center + u(19), size);
  ctx.moveTo(center - u(19), 0);
  ctx.lineTo(center - u(19), center - u(19));
  ctx.moveTo(center - u(19), center + u(19));
  ctx.lineTo(center - u(19), size);
  ctx.moveTo(0, center + u(19));
  ctx.lineTo(center - u(19), center + u(19));
  ctx.moveTo(center + u(19), center + u(19));
  ctx.lineTo(size, center + u(19));
  ctx.moveTo(0, center - u(19));
  ctx.lineTo(center - u(19), center - u(19));
  ctx.moveTo(center + u(19), center - u(19));
  ctx.lineTo(size, center - u(19));
  ctx.stroke();

  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#000";
  ctx.fillRect(center - u(18), center - u(18), u(36), u(36));
  ctx.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createGlowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,0.9)");
  gradient.addColorStop(0.45, "rgba(255,255,255,0.35)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

interface Car {
  axis: "x" | "z";
  lane: number;
  dir: 1 | -1;
  speed: number;
  pos: number;
}

export interface City {
  object: THREE.Group;
  update(dt: number, elapsed: number, env: EnvState): void;
}

export function createCity(): City {
  const group = new THREE.Group();
  const rand = mulberry32(20261021);

  const facades = FACADE_DEFS.map((def) => createFacadeTextures(def, rand));

  const windowMaterials: THREE.MeshStandardMaterial[] = [];
  const signMaterials: THREE.MeshBasicMaterial[] = [];
  const lampMaterials: THREE.MeshBasicMaterial[] = [];
  const glowMaterials: Array<{ material: THREE.MeshBasicMaterial; base: THREE.Color }> = [];

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshStandardMaterial({ color: "#343940", roughness: 0.95, metalness: 0.05 }),
  );
  ground.rotation.x = -Math.PI / 2;
  group.add(ground);

  const crossing = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160),
    new THREE.MeshStandardMaterial({
      map: createCrossingTexture(),
      roughness: 0.82,
      metalness: 0.15,
    }),
  );
  crossing.rotation.x = -Math.PI / 2;
  crossing.position.y = 0.02;
  group.add(crossing);

  const sidewalkMaterial = new THREE.MeshStandardMaterial({
    color: "#4d525a",
    roughness: 0.9,
    metalness: 0.1,
  });
  const sidewalkGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blockCenters: Array<{ x: number; z: number }> = [];

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const roofMaterial = new THREE.MeshStandardMaterial({
    color: "#5a6068",
    roughness: 0.85,
    metalness: 0.2,
  });
  const roofCaps: Array<{ x: number; y: number; z: number; w: number; d: number }> = [];

  const pitch = 64;
  const blockSize = 40;
  const lotOffsets = [
    [-10.5, -10.5],
    [10.5, -10.5],
    [-10.5, 10.5],
    [10.5, 10.5],
  ];

  const pickSignFace = (bx: number, allowSide: boolean): { axis: "x" | "z"; sign: 1 | -1 } => {
    if (allowSide && rand() < 0.3) {
      return { axis: "x", sign: bx < 0 ? 1 : -1 };
    }
    return { axis: "z", sign: 1 };
  };

  const addVerticalSign = (bx: number, bz: number, w: number, d: number, h: number): void => {
    const face = pickSignFace(bx, true);
    const texture = createSignTexture(
      SIGN_TEXTS[Math.floor(rand() * SIGN_TEXTS.length)],
      NEON_COLORS[Math.floor(rand() * NEON_COLORS.length)],
    );
    const signHeight = Math.min(20, Math.max(10, h * 0.6));
    const signWidth = 3.5;
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      toneMapped: false,
    });
    signMaterials.push(material);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(signWidth, signHeight), material);
    const y = 6 + rand() * Math.max(1, h - signHeight - 8);

    if (face.axis === "x") {
      mesh.position.set(bx + face.sign * (w / 2 + 0.22), y, bz + (rand() - 0.5) * d * 0.4);
      mesh.rotation.y = face.sign * (Math.PI / 2);
    } else {
      mesh.position.set(bx + (rand() - 0.5) * w * 0.4, y, bz + face.sign * (d / 2 + 0.22));
      mesh.rotation.y = face.sign === 1 ? 0 : Math.PI;
    }
    group.add(mesh);
  };

  const addBillboard = (bx: number, bz: number, w: number, d: number, h: number): void => {
    const face = pickSignFace(bx, true);
    const colorA = NEON_COLORS[Math.floor(rand() * NEON_COLORS.length)];
    const colorB = NEON_COLORS[Math.floor(rand() * NEON_COLORS.length)];
    const texture = createBillboardTexture(
      BILLBOARD_TEXTS[Math.floor(rand() * BILLBOARD_TEXTS.length)],
      colorA,
      colorB,
      rand,
    );
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
    });
    signMaterials.push(material);

    const boardWidth = Math.min(16, w * 0.9);
    const boardHeight = boardWidth * 0.5;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), material);
    const y = Math.min(h - boardHeight * 0.6, h * 0.65 + 2);

    if (face.axis === "x") {
      mesh.position.set(bx + face.sign * (w / 2 + 0.26), y, bz);
      mesh.rotation.y = face.sign * (Math.PI / 2);
    } else {
      mesh.position.set(bx, y, bz + face.sign * (d / 2 + 0.26));
      mesh.rotation.y = face.sign === 1 ? 0 : Math.PI;
    }
    group.add(mesh);
  };

  const roofLegMaterial = new THREE.MeshStandardMaterial({
    color: "#171a20",
    roughness: 0.7,
    metalness: 0.5,
  });
  const rooftopLegGeometry = new THREE.BoxGeometry(0.34, 2.6, 0.34);

  const addRooftopBillboard = (bx: number, bz: number, w: number, d: number, h: number): void => {
    const { axis, sign } = pickSignFace(bx, true);
    const [colorA, colorB] = AD_PALETTES[Math.floor(rand() * AD_PALETTES.length)];
    const texture = createBillboardTexture(
      BILLBOARD_TEXTS[Math.floor(rand() * BILLBOARD_TEXTS.length)],
      colorA,
      colorB,
      rand,
    );
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
    });

    const boardWidth = Math.min(22, Math.max(11, (axis === "z" ? w : d) * 1.15));
    const boardHeight = boardWidth * 0.5;
    const board = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), material);
    const boardY = h + 2.6 + boardHeight / 2;

    const legOffset = boardWidth * 0.38;
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(rooftopLegGeometry, roofLegMaterial);
      if (axis === "z") {
        leg.position.set(
          bx + side * legOffset,
          h + 1.3,
          bz + sign * (d / 2 - 1.4),
        );
      } else {
        leg.position.set(
          bx + sign * (w / 2 - 1.4),
          h + 1.3,
          bz + side * legOffset,
        );
      }
      group.add(leg);
    }

    if (axis === "z") {
      board.position.set(bx, boardY, bz + sign * (d / 2 - 1.4));
      board.rotation.y = sign === 1 ? 0 : Math.PI;
    } else {
      board.position.set(bx + sign * (w / 2 - 1.4), boardY, bz);
      board.rotation.y = sign * (Math.PI / 2);
    }
    group.add(board);
  };

  const beacons: Array<{ x: number; y: number; z: number }> = [];
  const neonBands: Array<{
    x: number;
    y: number;
    z: number;
    length: number;
    axis: "x" | "z";
    color: string;
  }> = [];

  let rooftopBillboardCount = 0;

  const buildingBuckets = new Map<
    string,
    { facade: number; repeatX: number; repeatY: number; matrices: THREE.Matrix4[] }
  >();
  const buildingMatrix = new THREE.Matrix4();
  const buildingQuaternion = new THREE.Quaternion();
  const buildingPosition = new THREE.Vector3();
  const buildingScale = new THREE.Vector3();

  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const bx = sx * (40 + k * pitch);
          const bz = sz * (40 + l * pitch);
          const distance = Math.hypot(bx, bz);
          blockCenters.push({ x: bx, z: bz });

          if (
            (bx === 40 && bz === -104) ||
            (bx === -40 && bz === -104) ||
            (bx === 168 && bz === -40)
          ) {
            continue;
          }

          for (const [ox, oz] of lotOffsets) {
            if (rand() < 0.16) continue;

            const w = 13 + rand() * 6.5;
            const d = 13 + rand() * 6.5;
            const x = bx + ox + (rand() - 0.5) * 1.6;
            const z = bz + oz + (rand() - 0.5) * 1.6;

            if (x > -74 && x < -20 && z > 12 && z < 126) continue;

            const heightBase = 16 + Math.min(distance * 0.16, 38) + rand() * 26;
            let height = Math.round(heightBase);
            if (rand() < 0.08) height += 28;

            const facadeIndex = Math.floor(rand() * facades.length);
            const repeatX = Math.max(1, Math.round(w / 16));
            const repeatY = Math.max(1, Math.round(height / 32));
            const bucketKey = `${facadeIndex}|${repeatX}|${repeatY}`;

            let bucket = buildingBuckets.get(bucketKey);
            if (!bucket) {
              bucket = { facade: facadeIndex, repeatX, repeatY, matrices: [] };
              buildingBuckets.set(bucketKey, bucket);
            }

            buildingPosition.set(x, height / 2 + 0.3, z);
            buildingScale.set(w, height, d);
            buildingMatrix.compose(buildingPosition, buildingQuaternion, buildingScale);
            bucket.matrices.push(buildingMatrix.clone());

            roofCaps.push({ x, y: height + 0.75, z, w: w + 0.6, d: d + 0.6 });

            if (height > 52) {
              beacons.push({ x, y: height + 1.8, z });
            }

            if (distance < 170) {
              if (rand() < 0.85) addVerticalSign(x, z, w, d, height);
              if (rand() < 0.38) addVerticalSign(x, z, w, d, height);
              if (rand() < 0.4) addBillboard(x, z, w, d, height);
              if (
                rooftopBillboardCount < 16 &&
                height < 76 &&
                distance < 230 &&
                rand() < 0.34
              ) {
                rooftopBillboardCount++;
                addRooftopBillboard(x, z, w, d, height);
              }
              if (rand() < 0.55) {
                const axis = rand() < 0.5 ? "z" : "x";
                const facing = axis === "z" ? (rand() < 0.5 ? 1 : -1) : rand() < 0.5 ? 1 : -1;
                neonBands.push({
                  x: x + (axis === "x" ? (facing * w) / 2 : 0),
                  y: height - 2 - rand() * 8,
                  z: z + (axis === "z" ? (facing * d) / 2 : 0),
                  length: axis === "x" ? d * 0.72 : w * 0.72,
                  axis,
                  color: NEON_COLORS[Math.floor(rand() * NEON_COLORS.length)],
                });
              }
            }
          }
        }
      }
    }
  }

  for (const bucket of buildingBuckets.values()) {
    const facade = facades[bucket.facade];
    const map = facade.map.clone();
    const emissiveMap = facade.emissive.clone();
    map.repeat.set(bucket.repeatX, bucket.repeatY);
    emissiveMap.repeat.set(bucket.repeatX, bucket.repeatY);
    map.needsUpdate = true;
    emissiveMap.needsUpdate = true;

    const material = new THREE.MeshStandardMaterial({
      map,
      emissiveMap,
      emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.1,
      roughness: 0.86,
      metalness: 0.06,
    });
    windowMaterials.push(material);

    const parts = bucket.matrices.map((matrix) =>
      boxGeometry.clone().applyMatrix4(matrix),
    );
    const geometry = mergeGeometries(parts, false);
    for (const part of parts) {
      part.dispose();
    }
    if (geometry) {
      group.add(new THREE.Mesh(geometry, material));
    }
  }

  const landmarkTowers: Array<{ x: number; z: number; h: number; w: number; d: number }> = [
    { x: 40, z: -104, h: 108, w: 24, d: 24 },
    { x: -40, z: -104, h: 86, w: 21, d: 21 },
    { x: 168, z: -40, h: 128, w: 27, d: 25 },
  ];
  const glassFacade = createTowerTextures(rand);
  landmarkTowers.forEach((tower) => {
    const material = new THREE.MeshStandardMaterial({
      map: glassFacade.map,
      emissiveMap: glassFacade.emissive,
      emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.1,
      roughness: 0.34,
      metalness: 0.14,
    });
    windowMaterials.push(material);

    const mesh = new THREE.Mesh(boxGeometry, material);
    mesh.scale.set(tower.w, tower.h, tower.d);
    mesh.position.set(tower.x, tower.h / 2 + 0.3, tower.z);
    group.add(mesh);

    const crown = new THREE.Mesh(boxGeometry, roofMaterial);
    crown.scale.set(tower.w * 0.7, 2.6, tower.d * 0.7);
    crown.position.set(tower.x, tower.h + 1.6, tower.z);
    group.add(crown);

    beacons.push({ x: tower.x, y: tower.h + 4.2, z: tower.z });
  });

  const stationMaterial = new THREE.MeshStandardMaterial({
    map: createStationTexture(),
    roughness: 0.55,
    metalness: 0.25,
  });
  const stationHall = new THREE.Mesh(new THREE.BoxGeometry(38, 13, 46), stationMaterial);
  stationHall.position.set(-46, 6.8, 42);
  group.add(stationHall);

  const stationRoof = new THREE.Mesh(new THREE.BoxGeometry(42, 1.2, 50), roofMaterial);
  stationRoof.position.set(-46, 13.5, 42);
  group.add(stationRoof);

  const stationSignMaterial = new THREE.MeshBasicMaterial({
    map: createStationSignTexture(),
    toneMapped: false,
    side: THREE.DoubleSide,
  });
  const stationSignEast = new THREE.Mesh(new THREE.PlaneGeometry(26, 4.1), stationSignMaterial);
  stationSignEast.position.set(-26.7, 10.2, 42);
  stationSignEast.rotation.y = Math.PI / 2;
  group.add(stationSignEast);

  const stationSignSouth = new THREE.Mesh(new THREE.PlaneGeometry(26, 4.1), stationSignMaterial);
  stationSignSouth.position.set(-46, 10.2, 65.2);
  group.add(stationSignSouth);

  const concreteMaterial = new THREE.MeshStandardMaterial({
    color: "#4b4f56",
    roughness: 0.9,
    metalness: 0.05,
  });
  const railDeck = new THREE.Mesh(new THREE.BoxGeometry(13, 1.3, 380), concreteMaterial);
  railDeck.position.set(-72, 12.4, -10);
  group.add(railDeck);

  const railSteelMaterial = new THREE.MeshStandardMaterial({
    color: "#9aa0a8",
    roughness: 0.35,
    metalness: 0.8,
  });
  for (const offset of [-3.6, 3.6]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 380), railSteelMaterial);
    rail.position.set(-72 + offset, 13.2, -10);
    group.add(rail);
  }

  for (let z = -190; z <= 190; z += 38) {
    if (Math.abs(z) < 30) continue;
    const pier = new THREE.Mesh(new THREE.BoxGeometry(3.2, 12, 2.6), concreteMaterial);
    pier.position.set(-72, 6, z);
    group.add(pier);
  }

  const trainBodyMaterial = new THREE.MeshStandardMaterial({
    color: "#6fa54d",
    roughness: 0.45,
    metalness: 0.3,
  });
  const trainWindowMaterial = new THREE.MeshBasicMaterial({
    color: "#ffeec2",
    toneMapped: false,
  });
  for (let index = 0; index < 4; index++) {
    const carZ = 18 + index * 18;
    const car = new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.2, 17), trainBodyMaterial);
    car.position.set(-72, 14.75, carZ);
    group.add(car);

    const windows = new THREE.Mesh(new THREE.BoxGeometry(3.26, 0.95, 13), trainWindowMaterial);
    windows.position.set(-72, 15.4, carZ);
    group.add(windows);
  }

  const sidewalkMesh = new THREE.InstancedMesh(sidewalkGeometry, sidewalkMaterial, blockCenters.length);
  const dummy = new THREE.Object3D();
  blockCenters.forEach((center, index) => {
    dummy.position.set(center.x, 0.14, center.z);
    dummy.scale.set(blockSize, 0.28, blockSize);
    dummy.updateMatrix();
    sidewalkMesh.setMatrixAt(index, dummy.matrix);
  });
  sidewalkMesh.instanceMatrix.needsUpdate = true;
  group.add(sidewalkMesh);

  const roofMesh = new THREE.InstancedMesh(boxGeometry, roofMaterial, roofCaps.length);
  roofCaps.forEach((cap, index) => {
    dummy.position.set(cap.x, cap.y, cap.z);
    dummy.scale.set(cap.w, 1.1, cap.d);
    dummy.updateMatrix();
    roofMesh.setMatrixAt(index, dummy.matrix);
  });
  roofMesh.instanceMatrix.needsUpdate = true;
  group.add(roofMesh);

  const beaconGeometry = new THREE.SphereGeometry(0.36, 8, 6);
  const beaconMaterial = new THREE.MeshBasicMaterial({ color: "#ff2222", toneMapped: false });
  const beaconMesh = new THREE.InstancedMesh(beaconGeometry, beaconMaterial, beacons.length);
  beacons.forEach((beacon, index) => {
    dummy.position.set(beacon.x, beacon.y, beacon.z);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    beaconMesh.setMatrixAt(index, dummy.matrix);
  });
  beaconMesh.instanceMatrix.needsUpdate = true;
  group.add(beaconMesh);

  const bandMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff", toneMapped: false });
  const bandMesh = new THREE.InstancedMesh(boxGeometry, bandMaterial, neonBands.length);
  neonBands.forEach((band, index) => {
    dummy.position.set(band.x, band.y, band.z);
    dummy.rotation.set(0, band.axis === "z" ? Math.PI / 2 : 0, 0);
    dummy.scale.set(0.32, 0.32, band.length);
    dummy.updateMatrix();
    bandMesh.setMatrixAt(index, dummy.matrix);
    bandMesh.setColorAt(index, new THREE.Color(band.color).multiplyScalar(1.4));
  });
  dummy.rotation.set(0, 0, 0);
  bandMesh.instanceMatrix.needsUpdate = true;
  if (bandMesh.instanceColor) {
    bandMesh.instanceColor.needsUpdate = true;
  }
  group.add(bandMesh);
  signMaterials.push(bandMaterial);

  const glowTexture = createGlowTexture();
  const glowSpots: Array<{ x: number; z: number; size: number; color: string }> = [
    { x: -72, z: -72, size: 44, color: "#ffe0b0" },
    { x: 72, z: -72, size: 44, color: "#ffcf92" },
    { x: -72, z: 72, size: 44, color: "#ffd8a8" },
    { x: 72, z: 72, size: 44, color: "#ffc07a" },
  ];
  glowSpots.forEach((spot) => {
    const base = new THREE.Color(spot.color);
    const material = new THREE.MeshBasicMaterial({
      map: glowTexture,
      color: base,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    glowMaterials.push({ material, base });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(spot.size, spot.size), material);
    glow.rotation.x = -Math.PI / 2;
    glow.position.set(spot.x, 0.07, spot.z);
    glow.renderOrder = 2;
    group.add(glow);
  });

  const accentSpots: Array<{ x: number; z: number; color: string }> = [
    { x: -27, z: -27, color: "#ff2d95" },
    { x: 27, z: -27, color: "#2ee6ff" },
    { x: -27, z: 27, color: "#ffa32f" },
    { x: 27, z: 27, color: "#8b5cff" },
  ];
  accentSpots.forEach((spot) => {
    const base = new THREE.Color(spot.color);
    const material = new THREE.MeshBasicMaterial({
      map: glowTexture,
      color: base,
      transparent: true,
      opacity: 0.34,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    glowMaterials.push({ material, base });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), material);
    glow.rotation.x = -Math.PI / 2;
    glow.position.set(spot.x, 0.06, spot.z);
    glow.renderOrder = 2;
    group.add(glow);
  });

  const skylineMaterial = new THREE.MeshStandardMaterial({
    color: "#0a0e16",
    roughness: 0.9,
    metalness: 0.15,
  });
  const skylineCount = 170;
  const skyline = new THREE.InstancedMesh(boxGeometry, skylineMaterial, skylineCount);
  for (let i = 0; i < skylineCount; i++) {
    const angle = rand() * Math.PI * 2;
    const radius = 240 + rand() * 220;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const height = 20 + rand() * 85;
    const w = 18 + rand() * 26;
    dummy.position.set(x, height / 2, z);
    dummy.scale.set(w, height, 18 + rand() * 26);
    dummy.rotation.y = rand() * Math.PI;
    dummy.updateMatrix();
    skyline.setMatrixAt(i, dummy.matrix);
  }
  dummy.rotation.y = 0;
  skyline.instanceMatrix.needsUpdate = true;
  group.add(skyline);

  const lampPostMaterial = new THREE.MeshStandardMaterial({
    color: "#22262e",
    roughness: 0.6,
    metalness: 0.6,
  });
  const lampOrbMaterial = new THREE.MeshBasicMaterial({ color: "#ffd9a0", toneMapped: false });
  const lampPositions: Array<[number, number]> = [
    [-24, -24],
    [24, -24],
    [-24, 24],
    [24, 24],
    [-24, -72],
    [24, 72],
    [-72, 24],
    [72, -24],
  ];

  lampPositions.forEach(([x, z], index) => {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 6, 6), lampPostMaterial);
    post.position.set(x, 3, z);
    group.add(post);

    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), lampOrbMaterial);
    orb.position.set(x, 6.1, z);
    group.add(orb);

    if (index < 6) {
      const base = new THREE.Color("#ffd2a0");
      const material = new THREE.MeshBasicMaterial({
        map: glowTexture,
        color: base,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });
      glowMaterials.push({ material, base });
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), material);
      glow.rotation.x = -Math.PI / 2;
      glow.position.set(x, 0.05, z);
      glow.renderOrder = 2;
      group.add(glow);
    }
  });
  lampMaterials.push(lampOrbMaterial);

  const carCount = 18;
  const carBodies = new THREE.InstancedMesh(
    new THREE.BoxGeometry(1.85, 0.95, 4.1),
    new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.45, metalness: 0.6 }),
    carCount,
  );
  const headlights = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.17, 6, 4),
    new THREE.MeshBasicMaterial({ color: "#fff3cf", toneMapped: false }),
    carCount * 2,
  );
  const taillights = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.15, 6, 4),
    new THREE.MeshBasicMaterial({ color: "#ff2436", toneMapped: false }),
    carCount * 2,
  );

  const carColors = ["#232833", "#2c3140", "#3b1f2b", "#1e2c3a", "#3a3a3a", "#161a22"];
  carBodies.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  headlights.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  taillights.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const cars: Car[] = [];
  for (let i = 0; i < carCount; i++) {
    const axis: "x" | "z" = i % 2 === 0 ? "x" : "z";
    const lanes = axis === "x" ? [6.5, 13.5, -6.5, -13.5] : [6.5, 13.5, -6.5, -13.5];
    const lane = lanes[Math.floor(rand() * lanes.length)];
    const dir: 1 | -1 = rand() < 0.5 ? 1 : -1;
    cars.push({
      axis,
      lane,
      dir,
      speed: 16 + rand() * 20,
      pos: (rand() - 0.5) * 460,
    });
    carBodies.setColorAt(i, new THREE.Color(carColors[Math.floor(rand() * carColors.length)]));
  }
  if (carBodies.instanceColor) {
    carBodies.instanceColor.needsUpdate = true;
  }
  group.add(carBodies, headlights, taillights);

  const carDummy = new THREE.Object3D();
  const lightDummy = new THREE.Object3D();

  const updateCars = (dt: number): void => {
    cars.forEach((car, index) => {
      car.pos += car.speed * car.dir * dt;
      if (car.pos > 240) car.pos = -240;
      if (car.pos < -240) car.pos = 240;

      const x = car.axis === "x" ? car.pos : car.lane;
      const z = car.axis === "x" ? car.lane : car.pos;

      carDummy.position.set(x, 0.75, z);
      carDummy.rotation.set(0, car.axis === "x" ? Math.PI / 2 : 0, 0);
      carDummy.scale.setScalar(1);
      carDummy.updateMatrix();
      carBodies.setMatrixAt(index, carDummy.matrix);

      const forwardX = car.axis === "x" ? car.dir * 2.1 : 0;
      const forwardZ = car.axis === "z" ? car.dir * 2.1 : 0;
      const sideX = car.axis === "x" ? 0 : 0.55;
      const sideZ = car.axis === "x" ? 0.55 : 0;

      for (let side = 0; side < 2; side++) {
        const sign = side === 0 ? 1 : -1;
        lightDummy.position.set(
          x + forwardX + sideX * sign,
          0.72,
          z + forwardZ + sideZ * sign,
        );
        lightDummy.scale.setScalar(1);
        lightDummy.updateMatrix();
        headlights.setMatrixAt(index * 2 + side, lightDummy.matrix);

        lightDummy.position.set(
          x - forwardX + sideX * sign,
          0.72,
          z - forwardZ + sideZ * sign,
        );
        lightDummy.updateMatrix();
        taillights.setMatrixAt(index * 2 + side, lightDummy.matrix);
      }
    });

    carBodies.instanceMatrix.needsUpdate = true;
    headlights.instanceMatrix.needsUpdate = true;
    taillights.instanceMatrix.needsUpdate = true;
  };

  return {
    object: group,
    update(dt: number, elapsed: number, env: EnvState) {
      const windowIntensity = 0.02 + env.window * 0.95;
      for (const material of windowMaterials) {
        material.emissiveIntensity = windowIntensity;
      }

      const signIntensity = 0.45 + env.neon * 1.75;
      for (const material of signMaterials) {
        material.color.setScalar(signIntensity);
      }

      const glowIntensity = 0.06 + env.neon * 0.62;
      for (const { material, base } of glowMaterials) {
        material.color.copy(base).multiplyScalar(glowIntensity);
        material.opacity = 0.12 + env.neon * 0.26;
      }

      const lampIntensity = 0.25 + env.window * 1.7;
      for (const material of lampMaterials) {
        material.color.setScalar(lampIntensity);
      }

      const pulse = 0.55 + 0.45 * Math.sin(elapsed * 2.2);
      beaconMaterial.color.setRGB(1.4 + pulse * 2.2, 0.08, 0.1);

      updateCars(dt);
    },
  };
}
