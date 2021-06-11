import { IShape } from "../../ts/interfaces/IShape";
import { TetrisActions } from "../../ts/enums/TetrisActions";
import { ActionAddShape, ActionResetGame } from "../../ts/interfaces/ActionTypes";
import { ICurrentShape } from "../../ts/interfaces/ICurrentShape";

export const addCurrentShape = (currentShape: ICurrentShape): ActionAddShape => {
  return {
    type: TetrisActions.ADD_CURRENT_SHAPE,
    payload: currentShape,
  };
};

export const resetGame = (): ActionResetGame => {
  return {
    type: TetrisActions.RESET_GAME,
  };
};
