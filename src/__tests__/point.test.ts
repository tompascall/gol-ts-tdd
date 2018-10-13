import Point from '../point';

describe('Point', () => {
  let point;
  let neighbour;

  it('should be inited with x and y koordinates', () => {
    point = new Point(0, 1);
    expect(point.getX()).toBe(0);
    expect(point.getY()).toBe(1);
  });

  it('should get north direction', () => {
    point = new Point(0,0);
    neighbour = point.getNorth();
    expect(neighbour.getX()).toBe(0);
    expect(neighbour.getY()).toBe(1);
  });

  it('should get northWest direction', () => {
    point = new Point(0,0);
    neighbour = point.getNorthWest();
    expect(neighbour.getX()).toBe(-1);
    expect(neighbour.getY()).toBe(1);
  });

  it('should get west direction', () => {
    point = new Point(0,0);
    neighbour = point.getWest();
    expect(neighbour.getX()).toBe(-1);
    expect(neighbour.getY()).toBe(0);
  });

  it('should get southWest direction', () => {
    point = new Point(0,0);
    neighbour = point.getSouthWest();
    expect(neighbour.getX()).toBe(-1);
    expect(neighbour.getY()).toBe(-1);
  });

  it('should get south direction', () => {
    point = new Point(0,0);
    neighbour = point.getSouth();
    expect(neighbour.getX()).toBe(0);
    expect(neighbour.getY()).toBe(-1);
  });

  it('should get southEast direction', () => {
    point = new Point(0,0);
    neighbour = point.getSouthEast();
    expect(neighbour.getX()).toBe(1);
    expect(neighbour.getY()).toBe(-1);
  });

  it('should get east direction', () => {
    point = new Point(0,0);
    neighbour = point.getEast();
    expect(neighbour.getX()).toBe(1);
    expect(neighbour.getY()).toBe(0);
  });

  it('should get northEast direction', () => {
    point = new Point(0,0);
    neighbour = point.getNorthEast();
    expect(neighbour.getX()).toBe(1);
    expect(neighbour.getY()).toBe(1);
  });
});