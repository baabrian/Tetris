import { EMPTYSLOTT } from "../enums";
import { SHAPESKIND } from "../enums/ShapeKind";
import { SHAPESCOLOR } from "../enums/ShapesColor";

export interface IShape {
  tetromino: (SHAPESKIND | EMPTYSLOTT)[][];
  color: SHAPESCOLOR;
}
