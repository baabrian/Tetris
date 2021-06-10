import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { EMPTYSLOTT, SHAPESKIND } from '../../ts/enums';
import { IShape } from '../../ts/interfaces/IShape';
import { Board } from '../board'

interface OwnProps {
    board: (EMPTYSLOTT | SHAPESKIND)[][],
    nextShape: IShape,
    shapesQueue: IShape[],
}

type Props = OwnProps

export const Display: React.FC<Props> = (props): JSX.Element => {
    const { board, nextShape, shapesQueue } = props

    return (
        <Grid container >
            <Board board={board} />
            <Grid item direction='column' style={{ flex: '1' }} >
                <Typography align='center'>Next Shape container</Typography>
                <Typography align='center'>Shapes Queue Container</Typography>
            </Grid>
        </Grid>
    )
}