import React from 'react';
import { SHAPESKIND } from '../../ts/enums';

interface OwnProps {
  shapekind: SHAPESKIND;
}

type Props = OwnProps;

export const Cell: React.FC<Props> = (props) => {
  const { shapekind } = props;
  return <div>[{shapekind}]</div>;
};
