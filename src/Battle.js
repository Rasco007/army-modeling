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
      this.defender.removeTopUnits(2);
      return this.attacker;
    } else if (attackerStrength < defenderStrength) {
      this.defender.gold += 100;
      this.attacker.removeTopUnits(2);
      return this.defender;
    } else {
      this.attacker.removeTopUnits(1);
      this.defender.removeTopUnits(1);
      return null;
    }
  }

  
}

module.exports = Battle;
