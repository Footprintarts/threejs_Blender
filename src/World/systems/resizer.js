const setSize = (container, camera, renderer) => {
  // Set camera aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // Update camera frustum
  camera.updateProjectionMatrix();

  // Update the size of the render and Canvas
  renderer.setSize(container.clientWidth, container.clientHeight);

  // set pixel Ratio for mobiles
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    // Set initial size on load
    setSize(container, camera, renderer);

    // Add resize event Listener
    window.addEventListener("resize", () => {
      // Set size again if a resize occurs
      setSize(container, camera, renderer);
      // Perform any custom actions
      this.onResize();
    });
  }

  //   Methods
  onResize() {
    // Example custom action
    console.log("window was resized");
  }
}

export { Resizer };
