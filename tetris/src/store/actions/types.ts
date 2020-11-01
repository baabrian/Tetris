import { type } from 'os';

import { Unit } from '../../ts/interfaces/Unit';

export const RESET_GAME = 'RESET_GAME';
export const MOVE_TETRIS_PIECE = 'MOVE_TETRIS_PIECE';

type ActionResetGame = {
  type: string;
};

type ActionMovePiece = {
  type: string;
  payload: {
    shape: Unit;
    direction: string;
  };
};

export type ActionType = ActionResetGame | ActionMovePiece;
