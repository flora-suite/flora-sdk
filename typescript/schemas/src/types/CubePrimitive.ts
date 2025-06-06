// Generated by https://github.com/foxglove/foxglove-sdk
// Options: {}

import { Color } from "./Color";
import { Pose } from "./Pose";
import { Vector3 } from "./Vector3";

/** A primitive representing a cube or rectangular prism */
export type CubePrimitive = {
  /** Position of the center of the cube and orientation of the cube */
  pose: Pose;

  /** Size of the cube along each axis */
  size: Vector3;

  /** Color of the cube */
  color: Color;
};
