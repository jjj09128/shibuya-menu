import * as THREE from "three";
import type { EnvState } from "../simulation/timeOfDay";

const SKY_VERTEX = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vDir = world.xyz - cameraPosition;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const SKY_FRAGMENT = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uBottom;
  uniform vec3 uSun;
  uniform vec3 uSunDir;
  uniform float uGlow;
  uniform float uDisc;
  varying vec3 vDir;

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;
    float t = smoothstep(-0.06, 0.14, h);
    vec3 col = mix(uBottom, uTop, t);

    float horizon = pow(1.0 - clamp(abs(h), 0.0, 1.0), 6.0);
    col += uBottom * horizon * 0.18;

    float sun = max(dot(dir, normalize(uSunDir)), 0.0);
    col += uSun * pow(sun, 900.0) * uDisc * 9.0;
    col += uSun * pow(sun, 26.0) * 0.34 * uGlow;
    col += uSun * pow(sun, 4.0) * 0.09 * uGlow;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function buildStars(): THREE.Points {
  const count = 1400;
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const rand = (() => {
    let seed = 20261021;
    return () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
  })();

  for (let i = 0; i < count; i++) {
    const theta = rand() * Math.PI * 2;
    const y = 0.06 + rand() * 0.94;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    positions[i * 3] = Math.cos(theta) * r * 560;
    positions[i * 3 + 1] = y * 560;
    positions[i * 3 + 2] = Math.sin(theta) * r * 560;
    sizes[i] = 0.6 + rand() * 1.8;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uOpacity: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader: /* glsl */ `
      attribute float aSize;
      uniform float uPixelRatio;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixelRatio;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(vec3(0.83, 0.9, 1.0), alpha * uOpacity);
      }
    `,
  });

  const points = new THREE.Points(geometry, material);
  points.renderOrder = -9;
  points.frustumCulled = false;
  return points;
}

export interface Sky {
  object: THREE.Object3D;
  update(env: EnvState, cameraPosition: THREE.Vector3): void;
}

export function createSky(): Sky {
  const group = new THREE.Group();

  const uniforms = {
    uTop: { value: new THREE.Color("#02040c") },
    uBottom: { value: new THREE.Color("#0c1830") },
    uSun: { value: new THREE.Color("#bdd5ff") },
    uSunDir: { value: new THREE.Vector3(0.3, 0.7, -0.6) },
    uGlow: { value: 0.7 },
    uDisc: { value: 1.2 },
  };

  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(600, 48, 32),
    new THREE.ShaderMaterial({
      uniforms,
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      side: THREE.BackSide,
      depthTest: false,
      depthWrite: false,
    }),
  );
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  group.add(dome);

  const stars = buildStars();
  group.add(stars);

  return {
    object: group,
    update(env: EnvState, cameraPosition: THREE.Vector3) {
      dome.position.copy(cameraPosition);
      stars.position.copy(cameraPosition);
      uniforms.uTop.value.copy(env.top);
      uniforms.uBottom.value.copy(env.bottom);
      uniforms.uSun.value.copy(env.sun);
      uniforms.uSunDir.value.copy(env.sunDir);
      uniforms.uGlow.value = env.sunGlow;
      uniforms.uDisc.value = env.sunDisc;
      (stars.material as THREE.ShaderMaterial).uniforms.uOpacity.value = env.star;
    },
  };
}
