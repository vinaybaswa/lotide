const assert = require("chai").assert;
const middle= require("../middle");

describe("#middle", () => {
  it("returns [] of [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("returns [] of [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns ['house'] of ['light', 'house', 'labs']", () => {
    assert.deepEqual(middle(['light', 'house', 'labs']), ['house']);
  });

  it("returns [3] of [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] of [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});