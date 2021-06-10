import { EMPTYSLOTT } from "../ts/enums";
import { BOARD_WIDTH, BOARD_HEIGHT } from "../game/types";
export class Board {
  static initBoard = () => {
    return Array.from(Array(BOARD_HEIGHT), () =>
      new Array(BOARD_WIDTH).fill(EMPTYSLOTT.E)
    );
  };
}
