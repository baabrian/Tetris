import React from 'react';
import { EMPTYSLOTT, SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  shapekind: EMPTYSLOTT | SHAPESKIND;
}

type Props = OwnProps;

export const Cell: React.FC<Props> = (props) => {
  const { shapekind } = props;
  return <div>[{shapekind}]</div>;
};
