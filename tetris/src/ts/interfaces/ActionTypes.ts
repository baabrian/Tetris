import { TetrisActions } from "../enums/TetrisActions";
import { ICurrentShape } from "./ICurrentShape";
import { IShape } from "./IShape";

export interface ActionResetGame {
  type: typeof TetrisActions.RESET_GAME;
}

export interface ActionAddShape {
  type: typeof TetrisActions.ADD_CURRENT_SHAPE;
  payload: ICurrentShape;
}

export type ActionType = ActionAddShape | ActionResetGame;
