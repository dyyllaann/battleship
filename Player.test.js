const Player = require("./Player");

/* Create p1 */
const p1 = new Player();


/* Begin tests */
test("p1 contains ships", () => {
	expect(p1.ships).toBeDefined();
}); // PASS

test("p1 contains all five ships", () => {
  expect(Object.keys(p1.ships).length).toBe(5);
}) // PASS
