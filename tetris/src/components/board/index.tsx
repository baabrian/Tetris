import React from 'react';
import { Grid } from '@material-ui/core';
import { BoardRow } from './BoardRow';
import { EMPTYSLOTT, SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  board: (EMPTYSLOTT | SHAPESKIND)[][];
}

type Props = OwnProps;

export const Board: React.FC<Props> = (props): JSX.Element => {
  const { board } = props;

  const renderTetrisRow = () => {
    return board.map((row) => {
      return <BoardRow boardRow={row} />;
    });
  };

  return (
    <Grid direction='column'>
      {renderTetrisRow()}
    </Grid>
  );
};
