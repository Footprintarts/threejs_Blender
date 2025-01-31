import { OrbitControls } from "three/examples/jsm/Addons.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // Customize Controls
  controls.enableDamping = true;

  controls.target.set(0, 0.5, 0);
  controls.update();

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
