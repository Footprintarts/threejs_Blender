// import { loadModels } from "./components/models/models";
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";

import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createGround, createGrid } from "./components/ground";

// systems
import { createControls } from "./systems/controls";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";
import { Loop } from "./systems/Loop";

// module scoped variables : so they cannot be accesed outside this module
let camera;
let controls;
let renderer;
let scene;
let loop;

// 2.
let ground;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    ground = createGround();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    // Floor
    const grid = createGrid();

    // loop.updatables.push(cube);
    // loop.updatables.push(controls, meshGroup);
    // loop.updatables.push(controls, train);

    // Blender Like empty scene setup
    // scene.add(ambientLight, mainLight, ground, grid);
    scene.add(ambientLight, mainLight, ground, grid, cube);

    const resizer = new Resizer(container, camera, renderer);

    // add helpers to the scene
    // scene.add(createAxesHelper(), createGridHelper());

    resizer.onResize = () => {
      this.render();
    };
  }

  // async init -when including 3D models
  async init() {
    // const { test } = await loadModels();
    // move camera to the center of the front bird
    // controls.target.copy(parrot.position);
    // add birds to updatables to see animation*FOR ANIMATIONS TO WORK
    // loop.updatables.push(parrot, flamingo, stork, testScene);
    // loop.updatables.push(test, parrot);
    // scene.add(parrot, flamingo, stork, test);
    // scene.add(test, parrot);
    // scene.add(testScene);
    // scene.add(test);
  }

  // Methods
  render() {
    // Draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
