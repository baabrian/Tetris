import { Game } from '../ts/interfaces/Game';
import { BOARD_HEIGHT, BOARD_WIDTH } from './types';
import { SHAPESKIND } from '../ts/enums';

export const Tetris: Game = {
  board: Array.from(Array(BOARD_HEIGHT), () =>
    new Array(BOARD_WIDTH).fill(SHAPESKIND.E)
  ),
  height: BOARD_HEIGHT,
  width: BOARD_WIDTH,
  name: 'Tetris',
};
