import { SHAPESKIND, EMPTYSLOTT } from "../../../ts/enums";
import { ICurrentShape } from "../../../ts/interfaces/ICurrentShape";
import { IGame } from "../../../ts/interfaces/IGame";
import { IShape } from "../../../ts/interfaces/IShape";
import { Board } from "../../../utils/Board";
import { Shapes } from "../../../utils/Shapes";

export const tetrisResetGame = (state: IGame): IGame => {
  return {
    ...state,
    board: Board.resetBoard(),
    nextShape: Shapes.getRandomShape(),
    shapesQueue: Shapes.initShapesQueue(),
    currentShape: Shapes.genCurrentShape(),
  };
};

export const tetrisAddShape = (
  state: IGame,
  board: (SHAPESKIND | EMPTYSLOTT)[][],
  currentShape: ICurrentShape
): IGame => {
  Board.addShape(board, currentShape);
  return {
    ...state,
    board,
  };
};
