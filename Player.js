const Ship = require("./Ship");

function Player() {
  return {
    ships: {
      carrier: new Ship(),
      battleship: new Ship(),
      cruiser: new Ship(),
      submarine: new Ship(),
      destroyer: new Ship()
    },

    attack(coordinates) {

    }
  }
}

module.exports = Player;