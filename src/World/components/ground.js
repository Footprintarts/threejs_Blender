import { Mesh, PlaneGeometry, MeshPhongMaterial, GridHelper } from "three";

function createGrid() {
  const grid = new GridHelper(40, 20, 0x000000, 0x000000);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;

  return grid;
}

function createGround() {
  const geometry = new PlaneGeometry(40, 40);
  const material = new MeshPhongMaterial({
    color: 0xcccccc,
    depthWrite: false,
  });

  const ground = new Mesh(geometry, material);
  ground.rotation.x = -Math.PI / 2;
  ground.castShadow = true;
  ground.receiveShadow = true;

  return ground;
}

export { createGround, createGrid };
