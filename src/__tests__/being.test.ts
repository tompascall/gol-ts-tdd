import Being from '../being';
import { status } from '../status';
import Point from '../point';
import Beings from '../beings';

describe('Being', () => {
  let being;

  describe('Initialization', () => {
    it('should set status ALIVE when created', () => {
      being = new Being(new Point(0,0));
      expect(being.getStatus()).toBe(status.ALIVE);
    });

    it('should be able to set status to DEAD', () => {
      being = new Being(new Point(0,0));
      being.setStatus(status.DEAD);
      expect(being.getStatus()).toBe(status.DEAD);
    });

    it('should set position', () => {
      being = new Being(new Point(0,1));
      const position = being.getPosition();
      expect(position.getX()).toBe(0);
      expect(position.getY()).toBe(1);
    });
  });

  describe('getNeighbours', () => {
    it('should count neighbours if got beings', () => {
      being = new Being(new Point(0,0));
      const beings = new Beings([
        being,
        new Being(new Point(0, 1)),
        new Being(new Point(-1, 0)),
        new Being(new Point(-1, -1)),
        new Being(new Point(3, 3)),
      ]);

      expect(being.countNeighbours(beings)).toBe(3);
    });
  });
});