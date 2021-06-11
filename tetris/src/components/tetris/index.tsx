import React from 'react';
import { IGame } from '../../ts/interfaces/IGame';
import { Keyboard } from '../keyboard';
import { Display } from '../display'
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { Grid } from '@material-ui/core';

export const Tetris: React.FC = (): JSX.Element => {
  const tetris = useSelector<RootStore, IGame>(state => state.tetris)
  console.log(tetris);
  const { board, nextShape, shapesQueue } = tetris

  return (
    <Grid container direction='column' style={{ height: '100%', width: '75%', padding: '3re', borderStyle: 'double' }}>
      <Display board={board} nextShape={nextShape} shapesQueue={shapesQueue} currentShape={tetris.currentShape} />
      <Keyboard />
    </Grid>
  );
};
