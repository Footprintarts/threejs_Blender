// Basic Scene
import {
  Scene,
  BoxGeometry,
  Mesh,
  Color,
  MeshBasicMaterial,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";

// Get Container Reference
const container = document.querySelector("#scene-container");

// Create Scene
const scene = new Scene();

// Set Bg color:
scene.background = new Color("#1b1b1b");

// Create Camera
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);

// So Every object initially at (0,0,0)
// move camera to view scene

camera.position.set(0, 0, 10);

// Create Geometry
const geometry = new BoxGeometry(2, 2, 2);

// Create Material(default white)
const material = new MeshBasicMaterial({ color: "#adfe02" });

// Create Mesh containing geometry and Material
const cube = new Mesh(geometry, material);

// Add mesh to the scene
scene.add(cube);

// Create Renderer
const renderer = new WebGLRenderer();

// set renderer size to same as container element
renderer.setSize(container.clientWidth, container.clientHeight);

// Set PixelRatio , so that our scene looks nice an small screens
renderer.setPixelRatio(window.devicePixelRatio);

// add automatically created canvas to the page
container.append(renderer.domElement);

// Render / create a still image of the scene
renderer.render(scene, camera);

// Animation function
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation
animate();
