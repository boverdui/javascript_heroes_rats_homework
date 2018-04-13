const assert = require('assert');
const Food = require('../models/food.js');

describe('Food', function() {

  let food1;

  beforeEach(function() {
    food1 = new Food("nachos", 10);
  });

  it('should have a name', function () {
    assert.strictEqual(food1.name, "nachos");
  });

  it('should have a replenishment value', function () {
    assert.strictEqual(food1.replenishmentValue, 10);
  });

});
