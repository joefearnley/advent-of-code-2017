const assert = require("chai").assert;
const checksum = require("../src/day2").checksum;

describe("Day 2: Corruption Checksum", function() {
  it("example input should have a checksum of 18", function() {
    const result = checksum("5 1 9 5\n7 5 3\n2 4 6 8");
    assert.equal(result, 18);
  });
});
