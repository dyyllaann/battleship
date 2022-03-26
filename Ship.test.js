const Ship = require("./Ship");

var ships = {
  carrier: new Ship(5),
  battleship: new Ship(4),
  cruiser: new Ship(3),
  submarine: new Ship(3),
  destroyer: new Ship(2)
}

test("ships.carrier.health is 5", () => {
	expect(ships.carrier.health).toBe(5);
});

test('ships.hit() reduces health by 1', () => {
  ships.carrier.hit();
	expect(ships.carrier.health).toBe(4);
});

// test("two hits on destroyer return Ship.isSunk() == true", () => {

// })