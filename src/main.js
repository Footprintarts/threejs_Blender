import { World } from "./World/World";

async function main() {
  // Get refrence
  const container = document.querySelector("#scene-container");
  console.log(container);

  // Create instance of world App
  const world = new World(container);

  // Render scene
  await world.render();

  // Animation
  world.start();
}

main();
