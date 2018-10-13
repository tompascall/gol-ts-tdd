import Rules from '../rules';
import Being from '../being';
import Beings from '../beings';
import Point from '../point';
import { status } from '../status';

describe('Rules', () => {
  let rules;
  let being;
  let beings: Beings;

  describe('Any live cell with fewer than two live neighbors dies, as if by underpopulation.', () => {
    it('Any live cell with 0 live neighbors dies', () => {
      rules = new Rules();
      being = new Being(new Point(0,0));
      beings = new Beings([
        being,
      ]);
      expect(rules.getNextStatus(being, beings)).toBe(status.DEAD);
    });

    it('Any live cell with 1 live neighbors dies', () => {
      rules = new Rules();
      being = new Being(new Point(0,0));
      beings = new Beings([
        being,
        new Being(new Point(0, 1)),
      ]);
      expect(rules.getNextStatus(being, beings)).toBe(status.DEAD);
    });
  });

  describe('Any live cell with two or three live neighbors lives on to the next generation.', () => {
    it('should live with 2 neighbours', () => {
      rules = new Rules();
      being = new Being(new Point(0,0));
      beings = new Beings([
        being,
        new Being(new Point(0, 1)),
        new Being(new Point(0, -1)),
      ]);
      expect(rules.getNextStatus(being, beings)).toBe(status.ALIVE);
    });

    it('should live with 3 neighbours', () => {
      rules = new Rules();
      being = new Being(new Point(0,0));
      beings = new Beings([
        being,
        new Being(new Point(0, 1)),
        new Being(new Point(0, -1)),
        new Being(new Point(-1, -1)),
      ]);
      expect(rules.getNextStatus(being, beings)).toBe(status.ALIVE);
    });
  });

  describe('Any live cell with more than three live neighbors dies, as if by overpopulation.', () => {
    it('should die with 4 neighbours', () => {
      rules = new Rules();
      being = new Being(new Point(0,0));
      beings = new Beings([
        being,
        new Being(new Point(0, 1)),
        new Being(new Point(0, -1)),
        new Being(new Point(-1, -1)),
        new Being(new Point(1, 1)),
      ]);
      expect(rules.getNextStatus(being, beings)).toBe(status.DEAD);
    });
  });

  describe('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', () => {
    it('should be alive if cell is dead and has 3 neighbours', () => {
      rules = new Rules();
      // being = new Being(new Point(0,0));
      // being.setStatus(status.DEAD);

      // beings = new Beings([
      //   being,
      //   new Being(new Point(0, 1)),
      //   new Being(new Point(0, -1)),
      //   new Being(new Point(-1, -1)),
      //   new Being(new Point(1, 1)),
      // ]);
      // expect(rules.getNextStatus(being, beings)).toBe(status.DEAD);
    });
  });
});

