import { Game } from '../ts/interfaces/Game';
import { BOARD_HEIGHT, BOARD_WIDTH } from './types';

export class SpaceInvaders implements Game {
  public name: string = 'BrianInvaders';
  public board: number | string[][];
  public height: number = BOARD_HEIGHT;
  public width: number = BOARD_WIDTH;

  constructor(height: number, width: number) {
    this.board = [height][width];
    this.height = height;
    this.width = width;
  }

}
