import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { RooteStore } from './store';
import { Game } from './ts/interfaces/Game';
import { Tetris } from './components/tetris';

function App() {
  const tetris = useSelector<RooteStore, Game>((state) => state.tetris);

  return <Tetris tetris={tetris} />;
}

export default App;
