import { EMPTYSLOTT, SHAPESKIND } from "../ts/enums";
import { ICurrentShape } from "../ts/interfaces/ICurrentShape";
import { IShape } from "../ts/interfaces/IShape";

const BOARD_HEIGHT: number = 20;
const BOARD_WIDTH: number = 10;

export class Board {
  static initBoard = () => {
    return Array.from(Array(BOARD_HEIGHT), () =>
      new Array(BOARD_WIDTH).fill(EMPTYSLOTT.E)
    );
  };

  static resetBoard = () => {
    return Board.initBoard();
  };

  static addShape = (board: (EMPTYSLOTT | SHAPESKIND)[][], currentShape: ICurrentShape) => {
    for (let rowIndex = 0; rowIndex < currentShape.shape.tetromino.length; rowIndex += 1) {
      for ( 
        let colIndex = 0;
        colIndex < currentShape.shape.tetromino[rowIndex].length;
        colIndex += 1
      ) {
        board[rowIndex][colIndex] = currentShape.shape.tetromino[rowIndex][colIndex]
      }
    }
  };

  static getBoardHeight = () => {
    return BOARD_HEIGHT;
  };

  static getBoardWidth = () => {
    return BOARD_WIDTH;
  };
}
