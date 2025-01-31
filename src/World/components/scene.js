import { Color, Scene, Fog } from "three";

function createScene() {
  const scene = new Scene();

  // Customize scene
  scene.background = new Color("lightgray");
  scene.fog = new Fog("lightgray", 4, 20);

  return scene;
}

export { createScene };
