function Ship(length) {
  // this.coordinates;

	return {
    health: length,
    // hitLocations: [],
    coordinates: this.coordinates,

		hit() {
			// hitLocations += coordinates;
      this.health -= 1;
			this.isSunk();
		},

		isSunk() {
			if (this.health == 0) {
				return true;
			}
		}
	};
}

module.exports = Ship;