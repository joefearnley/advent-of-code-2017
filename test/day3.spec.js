const assert = require("chai").assert;
const day3 = require("../src/day3");

describe.only("Day 3: Spiral Memory - Part 1", () => {
  it("1 has a distance of 0 steps", () => {
    assert.equal(day3.spiralMemory(1), 0);
  });

  it("12 has a distance of 3 steps", () => {
    assert.equal(day3.spiralMemory(12), 3);
  });
});
