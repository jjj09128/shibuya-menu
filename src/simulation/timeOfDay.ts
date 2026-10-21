import * as THREE from "three";

export type Phase = "dawn" | "day" | "dusk" | "night";

export interface EnvState {
  top: THREE.Color;
  bottom: THREE.Color;
  sun: THREE.Color;
  sunDir: THREE.Vector3;
  sunGlow: number;
  sunDisc: number;
  sunIntensity: number;
  ambient: number;
  hemiSky: THREE.Color;
  hemiGround: THREE.Color;
  hemiIntensity: number;
  fog: THREE.Color;
  fogDensity: number;
  window: number;
  neon: number;
  star: number;
  bloom: number;
  exposure: number;
}

interface PaletteDef {
  top: string;
  bottom: string;
  sun: string;
  sunDir: [number, number, number];
  sunGlow: number;
  sunDisc: number;
  sunIntensity: number;
  ambient: number;
  hemiSky: string;
  hemiGround: string;
  hemiIntensity: number;
  fog: string;
  fogDensity: number;
  window: number;
  neon: number;
  star: number;
  bloom: number;
  exposure: number;
}

const PALETTE_DEFS: Record<Phase, PaletteDef> = {
  dawn: {
    top: "#243b68",
    bottom: "#ffb27c",
    sun: "#ffd8a8",
    sunDir: [-0.62, 0.09, -0.78],
    sunGlow: 1.9,
    sunDisc: 2.4,
    sunIntensity: 2.4,
    ambient: 0.55,
    hemiSky: "#a3bae0",
    hemiGround: "#3a2f26",
    hemiIntensity: 1.7,
    fog: "#4b4560",
    fogDensity: 0.00135,
    window: 0.42,
    neon: 0.6,
    star: 0.28,
    bloom: 0.6,
    exposure: 1.02,
  },
  day: {
    top: "#1668d4",
    bottom: "#eef8ff",
    sun: "#fff6de",
    sunDir: [0.3, 0.8, 0.52],
    sunGlow: 0.45,
    sunDisc: 1.4,
    sunIntensity: 5.6,
    ambient: 1.35,
    hemiSky: "#eaf4ff",
    hemiGround: "#7b828c",
    hemiIntensity: 4,
    fog: "#cfe0ee",
    fogDensity: 0.00026,
    window: 0.03,
    neon: 0.12,
    star: 0,
    bloom: 0.2,
    exposure: 1.18,
  },
  dusk: {
    top: "#3a2a63",
    bottom: "#ff7043",
    sun: "#ff9c5c",
    sunDir: [0.78, 0.07, -0.62],
    sunGlow: 2.4,
    sunDisc: 2.5,
    sunIntensity: 2.8,
    ambient: 0.56,
    hemiSky: "#c47a8c",
    hemiGround: "#31232c",
    hemiIntensity: 1.6,
    fog: "#57384a",
    fogDensity: 0.00105,
    window: 0.78,
    neon: 1,
    star: 0.18,
    bloom: 0.9,
    exposure: 1.08,
  },
  night: {
    top: "#02040c",
    bottom: "#0c1830",
    sun: "#bdd5ff",
    sunDir: [0.28, 0.74, -0.62],
    sunGlow: 0.65,
    sunDisc: 1.1,
    sunIntensity: 0.38,
    ambient: 0.2,
    hemiSky: "#33456e",
    hemiGround: "#0c0e14",
    hemiIntensity: 0.42,
    fog: "#060a14",
    fogDensity: 0.0019,
    window: 1.18,
    neon: 1.3,
    star: 1,
    bloom: 1.05,
    exposure: 1.1,
  },
};

function createEnv(def: PaletteDef): EnvState {
  return {
    top: new THREE.Color(def.top),
    bottom: new THREE.Color(def.bottom),
    sun: new THREE.Color(def.sun),
    sunDir: new THREE.Vector3(...def.sunDir).normalize(),
    sunGlow: def.sunGlow,
    sunDisc: def.sunDisc,
    sunIntensity: def.sunIntensity,
    ambient: def.ambient,
    hemiSky: new THREE.Color(def.hemiSky),
    hemiGround: new THREE.Color(def.hemiGround),
    hemiIntensity: def.hemiIntensity,
    fog: new THREE.Color(def.fog),
    fogDensity: def.fogDensity,
    window: def.window,
    neon: def.neon,
    star: def.star,
    bloom: def.bloom,
    exposure: def.exposure,
  };
}

const PALETTES: Record<Phase, EnvState> = {
  dawn: createEnv(PALETTE_DEFS.dawn),
  day: createEnv(PALETTE_DEFS.day),
  dusk: createEnv(PALETTE_DEFS.dusk),
  night: createEnv(PALETTE_DEFS.night),
};

export function getBeijingHour(date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  return (hour % 24) + minute / 60;
}

export function getPhase(hour: number): Phase {
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 17) return "day";
  if (hour >= 17 && hour < 19) return "dusk";
  return "night";
}

export class TimeOfDay {
  readonly env: EnvState;
  readonly hourOverride?: number;
  hour = 0;
  phase: Phase = "night";
  private target: EnvState = PALETTES.night;
  private timer = 0;

  constructor(hourOverride?: number) {
    this.hourOverride = hourOverride;
    const hour = hourOverride ?? getBeijingHour();
    this.hour = hour;
    this.phase = getPhase(hour);
    this.target = PALETTES[this.phase];
    this.env = createEnv(PALETTE_DEFS[this.phase]);
  }

  update(dt: number): void {
    this.timer += dt;
    if (this.timer >= 1) {
      this.timer = 0;
      this.hour = this.hourOverride ?? getBeijingHour();
      const next = getPhase(this.hour);
      if (next !== this.phase) {
        this.phase = next;
        this.target = PALETTES[next];
      }
    }

    const k = 1 - Math.exp(-dt * 0.9);
    const env = this.env;
    const target = this.target;

    env.top.lerp(target.top, k);
    env.bottom.lerp(target.bottom, k);
    env.sun.lerp(target.sun, k);
    env.hemiSky.lerp(target.hemiSky, k);
    env.hemiGround.lerp(target.hemiGround, k);
    env.fog.lerp(target.fog, k);
    env.sunDir.lerp(target.sunDir, k).normalize();

    env.sunGlow += (target.sunGlow - env.sunGlow) * k;
    env.sunDisc += (target.sunDisc - env.sunDisc) * k;
    env.sunIntensity += (target.sunIntensity - env.sunIntensity) * k;
    env.ambient += (target.ambient - env.ambient) * k;
    env.hemiIntensity += (target.hemiIntensity - env.hemiIntensity) * k;
    env.fogDensity += (target.fogDensity - env.fogDensity) * k;
    env.window += (target.window - env.window) * k;
    env.neon += (target.neon - env.neon) * k;
    env.star += (target.star - env.star) * k;
    env.bloom += (target.bloom - env.bloom) * k;
    env.exposure += (target.exposure - env.exposure) * k;
  }
}
