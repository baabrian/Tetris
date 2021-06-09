import { SHAPESKIND } from '../enums/ShapeKind';
import { SHAPESCOLOR } from '../enums/ShapesColor';

export interface Shape {
  shape: SHAPESKIND[][];
  color: SHAPESCOLOR;
}
