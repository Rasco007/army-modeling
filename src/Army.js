const Pikeman = require('./Pikeman');
const Archer = require('./Archer');
const Knight = require('./Knight');

class Army {
  constructor(civilization) {
    this.gold = 1000;
    this.units = [];
    this.battles = [];
    this.civilization = civilization.name;

    const config = civilization.getInitialConfig();
    for (let i = 0; i < config.pikemen; i++) this.units.push(new Pikeman(this));
    for (let i = 0; i < config.archers; i++) this.units.push(new Archer(this));
    for (let i = 0; i < config.knights; i++) this.units.push(new Knight(this));
  }

  addUnit(unit) {
    this.units.push(unit);
  }

  getTotalStrength() {
    return this.units.reduce((sum, unit) => sum + unit.strength, 0);
  }

  addBattle(battle) {
    this.battles.push(battle);
  }
}

module.exports = Army;
