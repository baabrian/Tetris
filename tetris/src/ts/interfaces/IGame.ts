import { SHAPESKIND } from "../enums";
import { EMPTYSLOTT } from "../enums/";
import { ICurrentShape } from "./ICurrentShape";
import { IShape } from "./IShape";

export interface IGame {
  name: string;
  board: (EMPTYSLOTT | SHAPESKIND)[][];
  currentShape: ICurrentShape;
  nextShape: IShape;
  shapesQueue: IShape[];
  height: number;
  width: number;
}
