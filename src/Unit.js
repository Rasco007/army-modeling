class Unit {
  constructor(name, strength, army) {
    this.name = name;
    this.strength = strength;
    this.army = army;
    this.age = 0;
  }

getAge() {
  return this.age;
}

setAge(age) {
  this.age = age;
}


train(cost, strength) {
  if (this.army.gold >= cost) {
        this.army.gold -= cost;
        this.strength += strength;
      }
  }

  

transform(cost, NewUnitClass) {
  if (this.army.gold >= cost) {
    this.army.gold -= cost;
    return new NewUnitClass(this.army);
  }
return null;
}

}

module.exports = Unit;
