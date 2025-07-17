const Pikeman = require('./Pikeman');
const Archer = require('./Archer');
const Knight = require('./Knight');
const Battle = require('./Battle');


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



  trainUnit(unit) {
  const index = this.units.indexOf(unit);
  if (index === -1) return false;

  unit.train(); 
  return true;
}

transform(unit) {
  const index = this.units.indexOf(unit);
  if (index === -1) return false;

  const newUnit = unit.transform();
  return this.replaceUnit(index, newUnit);
}

replaceUnit(index, newUnit) {
  if (newUnit && index >= 0) {
    this.units[index] = newUnit;
    return true;
  }
  return false;
}


attack(enemyArmy) {
  const battle = new Battle(this, enemyArmy);
  this.addBattle(battle);
  enemyArmy.addBattle(battle);
  return battle;
}


removeTopUnits(count) {
    this.units.sort((a, b) => b.strength - a.strength);
    this.units.splice(0, count);
  }

}

module.exports = Army;
