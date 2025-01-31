import { BoxGeometry, MeshStandardMaterial, Mesh, MathUtils } from "three";

function createCube() {
  // Geometry
  const geometry = new BoxGeometry();

  // Material
  const material = new MeshStandardMaterial({ color: 0xadfe02 });

  const cube = new Mesh(geometry, material);
  cube.castShadow = true;
  cube.position.y = 0.5;

  // Rotate animation
  const radiansPerSecond = MathUtils.degToRad(30);

  // called once per frame
  const tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
