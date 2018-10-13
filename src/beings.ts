import Being from './being';
import Point from './point';

export default class Beings {
  beings: Map<string, Being>;

  constructor(beings: Being[]) {
    this.beings = new Map();
    beings.forEach(being =>
      this.beings.set(this.getCoordString(being.getPosition()), being));
  }

  hasBeing(point: Point): boolean {
    return this.beings.has(this.getCoordString(point));
  }

  getCoordString(point: Point): string {
    return `${point.getX()},${point.getY()}`;
  }
}