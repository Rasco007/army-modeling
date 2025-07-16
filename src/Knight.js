const Unit = require('./Unit');

class Knight extends Unit {
  constructor(army) {
    super("Knight", 20, army);
  }

  train() {
    if (this.army.gold >= 30) {
      this.army.gold -= 30;
      this.strength += 10;
    }
  }
}

module.exports = Knight;
