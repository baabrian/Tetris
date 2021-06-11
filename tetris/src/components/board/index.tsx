import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { BoardRow } from './BoardRow';
import { EMPTYSLOTT, SHAPESKIND } from '../../ts/enums';
import { useDispatch } from 'react-redux';
import { addCurrentShape } from '../../store/actions/tetrisActions'
import { IShape } from '../../ts/interfaces/IShape';
import { ICurrentShape } from '../../ts/interfaces/ICurrentShape';

interface OwnProps {
  board: (EMPTYSLOTT | SHAPESKIND)[][];
  currentShape: ICurrentShape;
}

type Props = OwnProps;

export const Board: React.FC<Props> = (props): JSX.Element => {
  const { board, currentShape } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCurrentShape(currentShape))
  }, [])

  const renderTetrisRow = () => {
    return board.map((row) => {
      return <BoardRow boardRow={row} />;
    });
  };

  return (
    <Grid direction='column' style={{ borderStyle: 'solid' }}>
      {renderTetrisRow()}
    </Grid>
  );
};
