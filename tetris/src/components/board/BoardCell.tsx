import React from 'react';
import { EMPTYSLOTT, SHAPESKIND, SHAPESCOLOR } from '../../ts/enums';
import { Shapes } from '../../utils/Shapes'
import { useStyles } from './styles/BoardCellStyles';
import clsx from 'clsx'

interface OwnProps {
  shapekind: EMPTYSLOTT | SHAPESKIND;
}

type Props = OwnProps;

export const Cell: React.FC<Props> = (props) => {
  const { shapekind } = props;
  const color = Shapes.getColor(shapekind);
  const classes = useStyles({ color });

  return <div className={classes.cell}></div>;
};
