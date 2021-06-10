import React from 'react';
import { Tetris } from './components/tetris';
import { Grid } from '@material-ui/core'

function App() {

  return (
    <Grid container direction='column' style={{ height: '100vh', width: '100vw' }} alignItems='center' alignContent='center'>
      <Tetris />
    </Grid>
  )
}

export default App;
