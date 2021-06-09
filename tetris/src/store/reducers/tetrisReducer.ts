import { Tetris } from '../../game/Tetris';
import { tetrisResetGame } from './reducerUtilities/tetrisReducerUtil';
import { ActionType, RESET_GAME } from '../actions/types';

export const tetrisReducer = (state = Tetris, action: ActionType) => {
  switch (action.type) {
    case RESET_GAME:
    default: {
      return state;
    }
  }
};
