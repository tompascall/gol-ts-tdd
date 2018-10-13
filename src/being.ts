import { status } from './status';
import Point from './point';
import Beings from './beings';


export default class Being {
  status: status;
  position: Point;

  constructor(point: Point) {
    this.status = status.ALIVE;
    this.position = point;
  }

  getStatus(): status {
    return this.status;
  }

  getPosition(): Point {
    return this.position;
  }

  countNeighbours(beings: Beings) {
    const north = (beings.hasBeing(this.getPosition().getNorth())) ? 1 : 0;
    const northEast = (beings.hasBeing(this.getPosition().getNorthEast())) ? 1 : 0;
    const east = (beings.hasBeing(this.getPosition().getEast())) ? 1 : 0;
    const southEast = (beings.hasBeing(this.getPosition().getSouthEast())) ? 1 : 0;
    const south = (beings.hasBeing(this.getPosition().getSouth())) ? 1 : 0;
    const southWest = (beings.hasBeing(this.getPosition().getSouthWest())) ? 1 : 0;
    const west = (beings.hasBeing(this.getPosition().getWest())) ? 1 : 0;
    const northWest = (beings.hasBeing(this.getPosition().getNorthWest())) ? 1 : 0;
    return (
      north + northEast + east + southEast + south + southWest + west + northWest
    );
  }
}