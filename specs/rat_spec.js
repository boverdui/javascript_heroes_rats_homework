const assert = require('assert');
const Rat = require('../models/rat.js');
const Food = require('../models/food.js');

describe('Rat', function() {

  let rat1;

  beforeEach(function() {
    rat1 = new Rat("Rat1");
    food1 = new Food("nachos", 10);
  });

  it('should have a name', function () {
    assert.strictEqual(rat1.name, "Rat1");
  });

  it('should be able to touch food, if they do the food becomes poisonous', function () {
    rat1.touchFood(food1);
    assert.strictEqual(food1.poisonous, true);
  });

});
