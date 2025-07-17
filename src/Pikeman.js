const Unit = require('./Unit');
const Archer = require('./Archer');

class Pikeman extends Unit {
  constructor(army) {
    super("Pikeman", 5, army);
  }

  train() {
    super.train(10, 3);
  }

  transform() {
      return super.transform(30, require('./Archer'));
  }
}

module.exports = Pikeman;
