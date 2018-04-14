const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function () {
  return(`Hi! My name is ${this.name}!`);
}

Hero.prototype.eat = function (food) {
  if (food.poisonous === true) {
    this.health -= 50;
  } else if (food.name === this.favouriteFood) {
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.sortTasks = function (sortBy) {
  this.tasks.sort((a, b) => a[sortBy] - b[sortBy]);
};

Hero.prototype.getCompletedTasks = function () {
  return this.tasks.filter((task) => task.completed === true);
};

Hero.prototype.getIncompleteTasks = function () {
  return this.tasks.filter((task) => task.completed === false);
};

Hero.prototype.calculateRewardsTotal = function () {
  return this.getCompletedTasks().reduce((sum, task) => sum + task.reward, 0);
};

module.exports = Hero;
