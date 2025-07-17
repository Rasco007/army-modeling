const Unit = require('./Unit');
const Knight = require('./Knight');

class Archer extends Unit {
  constructor(army) {
    super("Archer", 10, army);
  }

  train() {
    super.train(20, 7);
  }

  transform() {
    return super.transform(40, require('./Knight'));
  }
}

module.exports = Archer;
