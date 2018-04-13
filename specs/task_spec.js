const assert = require('assert');
const Task = require('../models/task.js');

describe('Task', function() {

  let task1;

  beforeEach(function() {
    task1 = new Task("Rescue Robin", 8, 10, 75);
  });

  it('should have a description', function () {
    assert.strictEqual(task1.description, "Rescue Robin");
  });

  it('should have a difficulty level', function () {
    assert.strictEqual(task1.difficulty, 8);
  });

  it('should have a urgency level', function () {
    assert.strictEqual(task1.urgency, 10);
  });

  it('should have a reward', function () {
    assert.strictEqual(task1.reward, 75);
  });

  it('should be able to be marked as completed', function () {
    task1.markAsCompleted();
    assert.strictEqual(task1.completed, true);
  });

});
