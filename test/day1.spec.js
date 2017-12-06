const assert = require("chai").assert;
import inverseCaptcha from "../src/day1";

describe("Day 1 - Inverse Captcha", function() {
  it("should return 3 for 1122", function(done) {
    const result = inverseCaptcha(1122);
    assert.equal(result, 3);
  });
});
