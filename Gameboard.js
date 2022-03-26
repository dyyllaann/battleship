const Ship = require("./Ship");

function Gameboard() {
	return {
		misses: [],
		hits: [],
		ships: {
			carrier: new Ship(5),
			battleship: new Ship(4),
			cruiser: new Ship(3),
			submarine: new Ship(3),
			destroyer: new Ship(2),
		},

		placeShip(ship, coord) {
			Object.assign(this.ships[ship], { coordinates: coord });
		},

		receiveAttack(coord) {
			for (ship in this.ships) {
				if (this.ships[ship].coordinates.includes(coord)) {
          this.hits.push(coord);
          this.ships[ship].hit();
        } else {
          this.misses.push(coord);
        }
			}
		},

    gameOver() {
      for (ship in this.ships) {
        if (!this.ships[ship].isSunk()) {
          return false;
        } else return true;
      }
    }
	};
}

module.exports = Gameboard;
