const Unit = require('./Unit');

class Knight extends Unit {
  constructor(army) {
    super("Knight", 20, army);
  }

  train() {
    super.train(30, 10);
  }

  transform() {
    throw new Error("Transformation not available for knights.");
  }
}

module.exports = Knight;
