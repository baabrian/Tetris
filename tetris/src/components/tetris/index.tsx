import React from 'react';
import { IGame } from '../../ts/interfaces/IGame';
import { Keyboard } from '../keyboard';
import { Display } from '../display'
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Grid } from '@material-ui/core';

export const Tetris: React.FC = (): JSX.Element => {
  const { board, nextShape, shapesQueue } = useSelector<RootStore, IGame>(state => state.tetris)

  return (
    <Grid container direction='column' style={{ height: '100%', width: '75%', padding:'3rem', borderStyle:'double' }}>
      <Display board={board} nextShape={nextShape} shapesQueue={shapesQueue} />
      <Keyboard />
    </Grid>
  );
};
