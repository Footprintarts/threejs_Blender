import { HemisphereLight, DirectionalLight } from "three";

function createLights() {
  // Ambient Light
  const ambientLight = new HemisphereLight(0xffffff, 0x444444, 3);
  ambientLight.position.set(0, 20, 0);

  // MainLight
  const mainLight = new DirectionalLight("white", 2);

  // customizing the Light
  mainLight.position.set(0, 20, 10);
  mainLight.castShadow = true;
  mainLight.shadow.camera.top = 2;
  mainLight.shadow.camera.bottom = -2;
  mainLight.shadow.camera.left = -2;
  mainLight.shadow.camera.right = 2;

  return { ambientLight, mainLight };
}

export { createLights };
