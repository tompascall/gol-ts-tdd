import Being from './being';
import Point from './point';

export default class Beings {
  beings: Map<string, Being>;

  constructor(beings: Being[]) {
    this.beings = new Map();
    beings.forEach(being => this.add(being));
  }

  add(being: Being) {
    this.beings.set(being.getPosition().getCoordString(), being);
  }

  getBeings(): Map<string, Being> {
    return this.beings;
  }

  hasBeing(point: Point): boolean {
    return this.beings.has(point.getCoordString());
  }

  addMore(points: Point[]) {
    points.forEach(point => this.add(new Being(point)));
  }
}