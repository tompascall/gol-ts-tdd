export default class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getNorth() {
    return new Point(this.x, this.y + 1);
  }

  getNorthWest() {
    return new Point(this.x - 1, this.y + 1);
  }

  getWest() {
    return new Point(this.x - 1, this.y);
  }

  getSouthWest() {
    return new Point(this.x - 1, this.y - 1);
  }

  getSouth() {
    return new Point(this.x, this.y - 1);
  }

  getSouthEast() {
    return new Point(this.x + 1, this.y - 1);
  }

  getEast() {
    return new Point(this.x + 1, this.y);
  }

  getNorthEast() {
    return new Point(this.x + 1, this.y + 1);
  }

  getCoordString(): string {
    return `${this.getX()},${this.getY()}`;
  }

}