import React from 'react';
import { Cell } from './BoardCell';
import { Grid } from '@material-ui/core';
import { EMPTYSLOTT, SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  boardRow: (EMPTYSLOTT | SHAPESKIND)[];
}

type Props = OwnProps;

export const BoardRow: React.FC<Props> = (props): JSX.Element => {
  const { boardRow } = props;

  const renderCell = () => {
    return boardRow.map((shapekind) => {
      return <Cell shapekind={shapekind} />;
    });
  };
  return (
    <Grid container direction='row'>
      {renderCell()}
    </Grid>
  );
};
