const Unit = require('./Unit');
const Knight = require('./Knight');

class Archer extends Unit {
  constructor(army) {
    super("Archer", 10, army);
  }

  train() {
    if (this.army.gold >= 20) {
      this.army.gold -= 20;
      this.strength += 7;
    }
  }

  transform() {
    if (this.army.gold >= 40) {
      this.army.gold -= 40;
      return new Knight(this.army);
    }
    return null;
  }
}

module.exports = Archer;
