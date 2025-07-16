class Battle {
  constructor(attacker, defender, date = new Date()) {
    this.attacker = attacker;
    this.defender = defender;
    this.date = date;
    this.winner = this.resolveBattle();
  }

  resolveBattle() {
    const attackerStrength = this.attacker.getTotalStrength();
    const defenderStrength = this.defender.getTotalStrength();

    if (attackerStrength > defenderStrength) {
      this.attacker.gold += 100;
      this.removeTopUnits(this.defender);
      return this.attacker;
    } else if (attackerStrength < defenderStrength) {
      this.defender.gold += 100;
      this.removeTopUnits(this.attacker);
      return this.defender;
    } else {
      this.removeTopUnits(this.attacker, 1);
      this.removeTopUnits(this.defender, 1);
      return null;
    }
  }

  removeTopUnits(army, count = 2) {
    army.units.sort((a, b) => b.strength - a.strength);
    army.units.splice(0, count);
  }
}

module.exports = Battle;
