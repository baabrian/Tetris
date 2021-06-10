import { SHAPESKIND, EMPTYSLOTT } from "../../../ts/enums";
import { IGame } from "../../../ts/interfaces/IGame";

export const tetrisResetGame = (state: IGame): IGame => {
  return {
    ...state,
    board: Array.from(Array(state.height), () =>
      new Array(state.width).fill(EMPTYSLOTT.E)
    ),
  };
};
