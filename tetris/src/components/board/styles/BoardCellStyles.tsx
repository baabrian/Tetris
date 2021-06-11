import { makeStyles } from '@material-ui/styles'

interface Props {
    color: string;
}

export const useStyles = makeStyles({
    cell: (props: Props) => ({
        background: props.color === 'empty' ? 'white' : props.color,
        width: '2rem',
        height: '2rem',
        border: '1px solid #ddd',
    }),
})