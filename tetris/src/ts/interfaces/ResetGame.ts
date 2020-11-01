import { Game } from './Game';

export interface ResetGame {
  (state: Game): Game;
}
