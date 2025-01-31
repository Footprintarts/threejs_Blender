import { AxesHelper } from "three";

function createAxesHelper() {
  const helper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

export { createAxesHelper };
