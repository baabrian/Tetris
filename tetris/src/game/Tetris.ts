import { IGame } from "../ts/interfaces/IGame";
import { BOARD_HEIGHT, BOARD_WIDTH } from "./types";
import { Board } from "../utils/Board";
import { Shapes } from "../utils/Shapes";

export const Tetris: IGame = {
  board: Board.initBoard(),
  nextShape: Shapes.getRandomShape(),
  shapesQueue: Shapes.initShapesQueue(),
  height: BOARD_HEIGHT,
  width: BOARD_WIDTH,
  name: "Tetris",
};
