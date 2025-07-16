class Unit {
  constructor(name, strength, army) {
    this.name = name;
    this.strength = strength;
    this.army = army;
    this.age = 0;
  }

  train() {
    throw new Error("Must be implemented by subclass");
  }

  transform() {
    throw new Error("Transformation not available for this unit type.");
  }
}

module.exports = Unit;
