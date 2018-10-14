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
    describe('getNextSurvivals', () => {
      let survivals: Being[];

      it('should return survivals', () => {
        rules = new Rules();
        being = new Being(new Point(0, 0)),
        survivals = [
          new Being(new Point(0, 1)),
          new Being(new Point(0, -1)),
          new Being(new Point(-1, -1)),
          new Being(new Point(1, 1)),
        ];
        beings = new Beings([
          being,
          ...survivals
        ]);
        const deads = rules.getNextSurvivals(beings);
        expect(deads.length).toBe(4);
        expect(deads).toEqual(survivals);
      });
    });

    describe('getNextNewborns', () => {
      rules = new Rules();
      const being1 = new Being(new Point(0, 0));
      const being2 = new Being(new Point(1, 0));
      const neighbours = [
        new Being(new Point(0, 1)),
        new Being(new Point(0, -1)),
        new Being(new Point(1, 1)),
      ];
      beings = new Beings([
        ...neighbours
      ]);
      const newborns = rules.getNextNewborns(beings);
      expect(newborns.length).toBe(2);
      expect(newborns[0].getPosition().getX()).toEqual(being1.getPosition().getX());
      expect(newborns[0].getPosition().getY()).toEqual(being1.getPosition().getY());
      expect(newborns[1].getPosition().getX()).toEqual(being2.getPosition().getX());
      expect(newborns[1].getPosition().getY()).toEqual(being2.getPosition().getY());
    });
  });

  describe('getNextGeneration', () => {
    beings = new Beings([
      new Being(new Point(0, 1)),
      new Being(new Point(0, -1)),
      new Being(new Point(1, 1)),
    ]);

    rules = new Rules();
    const nextGeneration: Beings = rules.getNextGeneration(beings);
    expect(nextGeneration.getBeings().size).toBe(2);
  });
});

