import { PerspectiveCamera } from "three";

function createCamera() {
  // Instance
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  // Move camera to view scene like in blender (4-2-4) football formation example overlay image display here
  camera.position.set(4, 2, 4);

  return camera;
}

export { createCamera };
