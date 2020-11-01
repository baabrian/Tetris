//import { ResetGame } from '../../../ts/interfaces/ResetGame';
import { Game } from '../../../ts/interfaces/Game';

export const tetrisResetGame = function (state: Game): Game {
  return {
    ...state,
    board: Array.from(Array(state.height), () =>
      new Array(state.width).fill(1)
    ),
  };
};
