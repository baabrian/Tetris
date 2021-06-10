import { SHAPESKIND } from "../enums";
import { EMPTYSLOTT } from "../enums/";
import { IShape } from "./IShape";

export interface IGame {
  name: string;
  board: (EMPTYSLOTT | SHAPESKIND)[][];
  nextShape: IShape;
  shapesQueue: IShape[];
  height: number;
  width: number;
}
