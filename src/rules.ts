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

  getNextDeads(beings: Beings): Being[] {
    const nextDeads = [];
    for (let [_, being] of beings.getBeings()) {
      if (this.getNextStatus(being, beings) === status.DEAD) {
        nextDeads.push(being);
      }
    }
    return nextDeads;
  }

  getNextSurvivals(beings: Beings): Being[] {
    const nextSurvivals = [];
    for (let [_, being] of beings.getBeings()) {
      if (this.getNextStatus(being, beings) === status.ALIVE) {
        nextSurvivals.push(being);
      }
    }
    return nextSurvivals;
  }

  getNextNewborns(beings: Beings): Being[] {
    const potentialBeings: Beings = new Beings([]);
    const nextNewBorns: Being[] = [];
    for (let [_, being] of beings.getBeings()) {
      potentialBeings.addMore(being.getNeighboursPositions());
    }
    for (let [_, being] of potentialBeings.getBeings()) {
      if (being.countNeighbours(beings) === 3) {
        nextNewBorns.push(being);
      }
    }
    return nextNewBorns;
  }

  getNextGeneration(beings: Beings): Beings {
    const nextGen = new Beings([
      ...this.getNextDeads(beings),
      ...this.getNextSurvivals(beings),
      ...this.getNextNewborns(beings)
    ]);
    return nextGen;
  }
}