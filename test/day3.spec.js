const assert = require("chai").assert;
const day3 = require("../src/day3");

describe("Day 3: Spiral Memory - Part 1", () => {
  it("1 has a distance of 0 steps", () => {
    assert.equal(day3.spiralMemory(1), 0);
  });

  it("12 has a distance of 3 steps", () => {
    assert.equal(day3.spiralMemory(12), 3);
  });

  it("23 has a distance of 2 steps", () => {
    assert.equal(day3.spiralMemory(23), 2);
  });

  it("1024 has a distance of 31 steps", () => {
    assert.equal(day3.spiralMemory(1024), 31);
  });

  it("347991 has a distance of 480 steps", () => {
    assert.equal(day3.spiralMemory(347991), 480);
  });
});
