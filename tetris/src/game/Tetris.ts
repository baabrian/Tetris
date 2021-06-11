import { IGame } from "../ts/interfaces/IGame";
import { Board } from "../utils/Board";
import { Shapes } from "../utils/Shapes";

export const Tetris: IGame = {
  board: Board.initBoard(),
  currentShape: Shapes.genCurrentShape(),
  nextShape: Shapes.getRandomShape(),
  shapesQueue: Shapes.initShapesQueue(),
  height: Board.getBoardHeight(),
  width: Board.getBoardWidth(),
  name: "Tetris",
};
