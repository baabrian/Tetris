export class Piece {
  public name: string;
  public shape: number | string[][];
  public color: string;

  constructor(name: string, shape: number | string[][], color: string) {
    this.name = name;
    this.shape = shape;
    this.color = color;
  }

  public rotateShape() {}
}
