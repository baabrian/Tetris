import { SHAPES, SHAPES_NAME } from "../game/types";
import { IShape } from "../ts/interfaces/IShape";

export class Shapes {
  static getRandomShape = (): IShape => {
    const randomShapeIndex = Math.floor(Math.random() * SHAPES_NAME.length);
    const shapekind = SHAPES_NAME[randomShapeIndex];
    const shape = SHAPES[shapekind];
    return shape;
  };

  static initShapesQueue = (): IShape[] => {
    const shapesQueue = [];
    for (let i = 0; i < 3; i += 1) {
      let randomShapeIndex = Math.floor(Math.random() * SHAPES_NAME.length);
      let shapekind = SHAPES_NAME[randomShapeIndex];
      let shape = SHAPES[shapekind];

      shapesQueue.push(shape);
    }

    return shapesQueue;
  };
}
