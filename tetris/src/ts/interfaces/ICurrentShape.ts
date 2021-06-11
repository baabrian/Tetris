import { IShape } from "./IShape";

export interface ICurrentShape {
  shape: IShape;
  position: { x: number; y: number };
  collided: boolean;
}
