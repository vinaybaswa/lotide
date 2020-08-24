const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 of [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns '' for ['']", () => {
    assert.strictEqual(head(['']), '');
  });

  it("returns 'light' for ['light, house, labs']", () => {
    assert.strictEqual(head(['light', 'house', 'labs']), 'light');
  });
});