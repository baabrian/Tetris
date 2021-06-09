import React from 'react';
import { Cell } from './Cell';
import { Grid } from '@material-ui/core';
import { SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  tetrisRow: SHAPESKIND[];
}

type Props = OwnProps;

export const TetrisRow: React.FC<Props> = (props): JSX.Element => {
  const { tetrisRow } = props;

  const renderCell = () => {
    return tetrisRow.map((shapekind) => {
      return <Cell shapekind={shapekind} />;
    });
  };
  return (
    <Grid container direction='row'>
      {renderCell()}
    </Grid>
  );
};
