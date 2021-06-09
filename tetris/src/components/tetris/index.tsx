import React from 'react';
import { Game } from '../../ts/interfaces/Game';
import { Board } from '../board';
import { Dpad } from '../dpad';

interface OwnProps {
  tetris: Game;
}

type Props = OwnProps;

export const Tetris: React.FC<Props> = (props): JSX.Element => {
  const { tetris } = props;
  return (
    <>
      <Board board={tetris.board} />
      <Dpad />
    </>
  );
};
