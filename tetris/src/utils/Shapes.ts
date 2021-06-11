import { SHAPES, SHAPES_NAME } from "../game/data";
import { EMPTYSLOTT, SHAPESKIND } from "../ts/enums";
import { ICurrentShape } from "../ts/interfaces/ICurrentShape";
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

  static getColor = (shapekind: SHAPESKIND | EMPTYSLOTT): string => {
    if (shapekind === EMPTYSLOTT.E) {
      return "empty";
    }
    return SHAPES[shapekind].color;
  };

  static genCurrentShape = (): ICurrentShape => {
    const randomShape = Shapes.getRandomShape();

    return {
      shape: randomShape,
      position: { x: 0, y: 0 },
      collided: false,
    };
  };
}
