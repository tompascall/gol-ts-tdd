import { gospelGliderGun } from './seed';
import Beings from '../beings';
import Being from '../being';
import Point from '../point';
import Rules from '../rules';

const getBeingsFromSeed = (seed: Array<Array<Number>>) => {
  const beingList: Being[] = [];
  seed.forEach((line, y) => {
    line.forEach((isAlive, x) => {
      if (isAlive) {
        beingList.push(new Being(new Point(x, y)))
      }
    });
  });
  return new Beings(beingList);
}
const clearScreen = () => {
  console.log('\x1B[2J');
}

const paint = (seed: Array<Array<Number>>, beings: Beings) => {
  clearScreen();
  let displayString = '';

  seed.forEach((line, y) => {
    line.forEach((_, x) => {
      if (beings.hasBeing(new Point(x, y))) {
        displayString += '*';
      } else {
        displayString += ' ';
      }
    });
    displayString += '\n';
  });
  console.log(displayString);
};

const show = (seed: Array<Array<Number>>) => {
  const rules = new Rules();
  let beings = getBeingsFromSeed(seed);
  setInterval(() => {
    paint(seed, beings);
    beings = rules.getNextGeneration(beings);
  }, 100);
}

show(gospelGliderGun);