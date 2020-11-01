import { Game } from '../ts/interfaces/Game';
import { BOARD_HEIGHT, BOARD_WIDTH } from './types';

export const Tetris: Game = {
  board: Array.from(Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill(0)),
  height: BOARD_HEIGHT,
  width: BOARD_WIDTH,
  name: 'Tetris',
};
