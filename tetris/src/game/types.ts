export const SHAPES_NAME: string[] = ['Z', 'T', 'L', 'O', 'S', 'J', 'I'];

export const BOARD_HEIGHT: number = 20;
export const BOARD_WIDTH: number = 10;

export const SHAPES = {
  Z: {
    shape: [
      [0, 0, 0],
      ['z', 'z', 0],
      [0, 'z', 'z'],
    ],
    color: 'green',
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: 'purple',
  },
  L: {
    shape: [
      ['L', 0, 0],
      ['L', 0, 0],
      ['L', 'L', 0],
    ],
    color: 'orange',
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: 'yellow',
  },
  S: {
    shape: [
      [0, 0, 0],
      [0, 'S', 'S'],
      ['S', 'S', 0],
    ],
    color: 'red',
  },
  J: {
    shape: [
      [0, 0, 'J'],
      [0, 0, 'J'],
      [0, 'J', 'J'],
    ],
    color: 'pink',
  },
  I: {
    shape: [
      ['I', 0, 0, 0],
      ['I', 0, 0, 0],
      ['I', 0, 0, 0],
      ['I', 0, 0, 0],
    ],
    color: 'blue',
  },
};
