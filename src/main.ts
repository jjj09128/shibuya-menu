import * as THREE from "three";
import "./style.css";
import { createCity } from "./render/city";
import { createPipeline } from "./render/pipeline";
import { createSky } from "./render/sky";
import { TimeOfDay } from "./simulation/timeOfDay";
import { initAnnouncements } from "./ui/announcements";

initAnnouncements();

const container = document.querySelector<HTMLElement>("#scene-root");
if (!container) {
  throw new Error("Missing #scene-root container");
}

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2("#070b16", 0.0022);

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
);
camera.position.set(0, 150, 230);

const pipeline = createPipeline(container, scene, camera);
const { renderer } = pipeline;

const hemi = new THREE.HemisphereLight("#283860", "#090a10", 0.4);
const sun = new THREE.DirectionalLight("#bdd5ff", 0.4);
const ambient = new THREE.AmbientLight("#ffffff", 0.14);
scene.add(hemi, sun, ambient);

const sky = createSky();
scene.add(sky.object);

const city = createCity();
scene.add(city.object);

const params = new URLSearchParams(window.location.search);
const hourParam = params.get("hour");
const hourOverride =
  hourParam !== null && Number.isFinite(Number(hourParam)) ? Number(hourParam) : undefined;
const timeOfDay = new TimeOfDay(hourOverride);

const enterButton = document.querySelector<HTMLButtonElement>("#enter-game");
enterButton?.addEventListener("click", () => {
  window.dispatchEvent(new CustomEvent("menu:start"));
});

const pointer = new THREE.Vector2();
const pointerTarget = new THREE.Vector2();
window.addEventListener("pointermove", (event) => {
  pointerTarget.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    (event.clientY / window.innerHeight) * 2 - 1,
  );
});

const cameraStart = new THREE.Vector3(0, 150, 230);
const cameraRest = new THREE.Vector3(0, 100, 140);
const cameraBase = new THREE.Vector3();

const applyEnvironment = (): void => {
  const env = timeOfDay.env;

  hemi.color.copy(env.hemiSky);
  hemi.groundColor.copy(env.hemiGround);
  hemi.intensity = env.hemiIntensity;

  sun.color.copy(env.sun);
  sun.intensity = env.sunIntensity;
  sun.position.copy(env.sunDir).multiplyScalar(240);

  ambient.intensity = env.ambient;

  if (scene.fog instanceof THREE.FogExp2) {
    scene.fog.color.copy(env.fog);
    scene.fog.density = env.fogDensity;
  }

  renderer.toneMappingExposure = env.exposure;
  pipeline.bloom.strength = env.bloom;

  sky.update(env, camera.position);
  city.update(0, 0, env);
};

applyEnvironment();

const clock = new THREE.Clock();
let elapsed = 0;

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  elapsed += dt;

  timeOfDay.update(dt);
  const env = timeOfDay.env;

  pointer.lerp(pointerTarget, 1 - Math.exp(-dt * 3));

  const intro = Math.min(1, elapsed / 6);
  const ease = 1 - Math.pow(1 - intro, 3);
  cameraBase.lerpVectors(cameraStart, cameraRest, ease);

  camera.position.set(
    cameraBase.x + Math.sin(elapsed * 0.1) * 1.8 + pointer.x * 3.4,
    cameraBase.y + Math.sin(elapsed * 0.23) * 0.7 - pointer.y * 1.6,
    cameraBase.z + Math.cos(elapsed * 0.08) * 1.6,
  );
  camera.lookAt(0, 32, -45);

  hemi.intensity = env.hemiIntensity;
  sun.color.copy(env.sun);
  sun.intensity = env.sunIntensity;
  sun.position.copy(env.sunDir).multiplyScalar(240);
  ambient.intensity = env.ambient;
  if (scene.fog instanceof THREE.FogExp2) {
    scene.fog.color.copy(env.fog);
    scene.fog.density = env.fogDensity;
  }

  renderer.toneMappingExposure = env.exposure;
  pipeline.bloom.strength = env.bloom;

  sky.update(env, camera.position);
  city.update(dt, elapsed, env);

  document.documentElement.dataset.phase = timeOfDay.phase;

  pipeline.render();
});
