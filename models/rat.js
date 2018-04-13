const Rat = function(name) {
  this.name = name;
}

Rat.prototype.touchFood = function (food) {
  food.poisonous = true;
};

module.exports = Rat;
