import { Tetris } from '../../game/Tetris';
import { tetrisResetGame } from './reducerUtilities/tetrisReducerUtil';


export const tetrisReducer = (state = Tetris, action) => {
  switch (action.type) {
    default: {
      return tetrisResetGame(state);
    }
  }
};
