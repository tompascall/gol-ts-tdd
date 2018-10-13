import Beings from '../beings';
import Point from '../point';
import Being from '../being';

describe('Beings', () => {
  let beings;

  it('should check neighbour', () => {
    beings = new Beings([
      new Being(new Point(1,0))
    ]);
    expect(beings.hasBeing(new Point(1,0))).toBe(true);
  });
});