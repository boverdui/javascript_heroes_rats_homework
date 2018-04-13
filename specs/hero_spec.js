const assert = require('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');
const Rat = require('../models/rat.js');

describe('Hero', function() {

  let hero;
  let food;
  let task;
  let rat;

  beforeEach(function() {
    task1 = new Task("Task1", 8, 10, 100);
    task2 = new Task("Task2", 7, 5, 75);
    task3 = new Task("Task3", 10, 8, 25);
    hero1 = new Hero("Batman", 100, "nachos", [task1, task2, task3]);
    food1 = new Food("fly sandwiches", 10);
    food2 = new Food("nachos", 10);
    rat1 = new Rat("Rat1");
  });

  it('should have a name', function () {
    assert.strictEqual(hero1.name, "Batman");
  });

  it('should have a health', function () {
    assert.strictEqual(hero1.health, 100);
  });

  it('should have a favourite food', function () {
    assert.strictEqual(hero1.favouriteFood, "nachos");
  });

  it('should be able to talk saying their name', function () {
    actual = hero1.talk();
    assert.strictEqual(actual, "Hi! My name is Batman!");
  });

  it('should have a collection of tasks to complete', function () {
    assert.deepStrictEqual(hero1.tasks, [task1, task2, task3]);
  });

  it('should be able to eat food, and health should go up by the replenishment value', function () {
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 110);
  });

  it('should be able to eat food, and if the food is their favourite food, their health should go up by 1.5 * value', function () {
    hero1.eat(food2);
    assert.strictEqual(hero1.health, 115);
  });

  it('should be able to sort their tasks by difficulty, urgency or reward', function () {
    hero1.sortTasks("difficulty");
    assert.deepStrictEqual(hero1.tasks, [task2, task1, task3]);
    hero1.sortTasks("urgency");
    assert.deepStrictEqual(hero1.tasks, [task2, task3, task1]);
    hero1.sortTasks("reward");
    assert.deepStrictEqual(hero1.tasks, [task3, task2, task1]);
  });

  it('should be able to view tasks that are marked as completed', function () {
    task1.markAsCompleted();
    task2.markAsCompleted();
    assert.deepStrictEqual(hero1.viewCompletedTasks(), [task1, task2]);
  });

  it('should be able to view tasks that are marked as completed', function () {
    task1.markAsCompleted();
    task2.markAsCompleted();
    assert.deepStrictEqual(hero1.viewUncompletedTasks(), [task3]);
  });

  it('should lose health when eating poisonous food', function () {
    rat1.touchFood(food1);
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 50);
  });

});
