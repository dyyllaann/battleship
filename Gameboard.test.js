// const p1 = require('./app');
// const Ship = require('./app');
// const p1destroyer = require('./app');

// p1.receiveAttack("01");
// p1.receiveAttack("02");
// p1.receiveAttack("04");
// p1.receiveAttack("09");

// test('', () => {
//   expect(p1.hits).toContain('01');
// }); // PASS

// test('', () => {
//   expect(p1.hits).toContain('04');
// }); // PASS

// test('', () => {
//   expect(p1.misses).toContain('09');
// }); // PASS

// test('', () => {
//   expect(p1.misses).toContain('09');
// }); // PASS

// test('', () => {
//   expect(p1destroyer.length).toBe(4);
// }) // PASS

const Gameboard = require('./Gameboard');

const g = new Gameboard;

test('g.misses exists', () => {
  expect(g.misses).toBeDefined();
}); // PASS

test('g.ships should contain a destroyer', () => {
  expect(Object.keys(g.ships)).toContain('destroyer');
}); // PASS

test("g.placeShip should assign coordinates to a ship", () => {
	g.placeShip('destroyer', ["00", "01"]);
	expect(Object.values(g.ships.destroyer.coordinates)).toEqual(["00", "01"]);
}); // PASS

test("g.receiveAttack should store coords that miss in g.misses", () => {
  g.placeShip("carrier", ["00", "01", "02", "03", "04"]);
	g.placeShip("battleship", ["05", "06", "07", "08"]);
	g.placeShip("cruiser", ["10", "11", "12"]);
	g.placeShip("submarine", ["15", "16", "17"]);
  g.placeShip('destroyer', ["20", "21"]);
  g.receiveAttack("25");
	expect(Object.values(g.misses)).toContain("25");
}); // PASS

test("carrier's health prior to attack should be 5", () => {
  expect(g.ships.carrier.health).toBe(5);
}); // PASS

test("g.receiveAttack should store coords that hit in g.hits", () => {
	g.placeShip("carrier", ["00", "01", "02", "03", "04"]);
	g.placeShip("battleship", ["05", "06", "07", "08"]);
	g.placeShip("cruiser", ["10", "11", "12"]);
	g.placeShip("submarine", ["15", "16", "17"]);
	g.placeShip("destroyer", ["20", "21"]);
	g.receiveAttack("01");
	expect(Object.values(g.hits)).toContain("01");
}); // PASS

test("carrier's health after attack should be 4", () => {
  expect(g.ships.carrier.health).toBe(4);
}); // PASS

test("g.ships.carrier.hit() to reduce health by 1", () => {
  g.ships.battleship.hit();
  expect((g.ships.battleship.health)).toBe(3);
}); // PASS