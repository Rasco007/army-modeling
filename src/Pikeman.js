const Unit = require('./Unit');
const Archer = require('./Archer');

class Pikeman extends Unit {
  constructor(army) {
    super("Pikeman", 5, army);
  }

  train() {
    if (this.army.gold >= 10) {
      this.army.gold -= 10;
      this.strength += 3;
    }
  }

  transform() {
    if (this.army.gold >= 30) {
      this.army.gold -= 30;
      return new Archer(this.army);
    }
    return null;
  }
}

module.exports = Pikeman;
