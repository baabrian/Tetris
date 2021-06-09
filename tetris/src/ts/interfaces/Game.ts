import { SHAPESKIND } from '../enums';
export interface Game {
  name: string;
  board: SHAPESKIND[][];
  height: number;
  width: number;
}
