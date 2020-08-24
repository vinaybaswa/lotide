const assert = require("chai").assert;
const tail= require("../tail");

describe("#tail", () => {
  it("returns [2, 3] of [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['house', 'labs'] of ['light', 'house', 'labs']", () => {
    assert.deepEqual(tail(['light', 'house', 'labs']), ['house', 'labs']);
  });

  it("returns [] of [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] of []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] of ''", () => {
    assert.deepEqual(tail(''), []);
  });

  it("returns [ 't', 'r', 'i', 'n', 'g' ] of 'string'", () => {
    assert.deepEqual(tail('string'), [ 't', 'r', 'i', 'n', 'g' ]);
  });
});