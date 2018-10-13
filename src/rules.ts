import Being from './being';
import Beings from './beings';
import { RulesI } from './rules-i';
import { status } from './status';

export default class Rules implements RulesI {

  static isUnderPopulation(being: Being, neighboursCount: number): boolean {
    return (being.getStatus() === status.ALIVE && neighboursCount < 2);
  }

  static isOverPopulation(being: Being, neighboursCount: number): boolean {
    return (being.getStatus() === status.ALIVE && neighboursCount > 3);
  }

  constructor() {}

  getNextStatus(being: Being, beings: Beings): status {
    const neighboursCount = being.countNeighbours(beings);

    if (
      Rules.isUnderPopulation(being, neighboursCount) ||
      Rules.isOverPopulation(being, neighboursCount)
    ) return status.DEAD;

    return status.ALIVE;
  }
}