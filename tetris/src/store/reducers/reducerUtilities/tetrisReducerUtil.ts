import { SHAPESKIND } from '../../../ts/enums';
import { Game } from '../../../ts/interfaces/Game';

export const tetrisResetGame = (state: Game): Game => {
  return {
    ...state,
    board: Array.from(Array(state.height), () =>
      new Array(state.width).fill(SHAPESKIND.E)
    ),
  };
};
