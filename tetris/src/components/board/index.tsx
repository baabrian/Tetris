import React from 'react';
import { Grid } from '@material-ui/core';
import { TetrisRow } from './TetrisRow';
import { SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  board: SHAPESKIND[][];
}

type Props = OwnProps;

export const Board: React.FC<Props> = (props): JSX.Element => {
  const { board } = props;

  const renderTetrisRow = () => {
    return board.map((row) => {
      return <TetrisRow tetrisRow={row} />;
    });
  };

  return (
    <Grid container direction='column'>
      {renderTetrisRow()}
    </Grid>
  );
};
