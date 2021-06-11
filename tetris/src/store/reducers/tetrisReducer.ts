import { Tetris } from "../../game/Tetris";
import {
  tetrisResetGame,
  tetrisAddShape,
} from "./reducerUtilities/tetrisReducerUtil";
import { ActionType } from "../../ts/interfaces/ActionTypes";
import { TetrisActions } from "../../ts/enums/TetrisActions";

export const tetrisReducer = (state = Tetris, action: ActionType) => {
  switch (action.type) {
    case TetrisActions.ADD_CURRENT_SHAPE: {
      return tetrisAddShape(state, state.board, action.payload);
    }
    case TetrisActions.RESET_GAME: {
      return tetrisResetGame(state);
    }
    default: {
      return state;
    }
  }
};
