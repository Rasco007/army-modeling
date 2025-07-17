const Army = require('../src/Army');
const Pikeman = require('../src/Pikeman');
const Archer = require('../src/Archer');
const Knight = require('../src/Knight');
const Battle = require('../src/Battle');
const Civilization = require('../src/Civilization');

test('Army starts with 1000 gold', () => {
  const civ = new Civilization('chinos');

  const army = new Army(civ);
  expect(army.gold).toBe(1000);
});

test('Training a Pikeman reduces gold and increases strength', () => {
  const civ = new Civilization('chinos');

  const army = new Army(civ);
  const pike = new Pikeman(army);
  army.addUnit(pike);
  pike.train();
  expect(army.gold).toBe(990);
  expect(pike.strength).toBe(8);
});

test('Transform Pikeman to Archer', () => {
  const civ = new Civilization('chinos');

  const army = new Army(civ);
  const pike = new Pikeman(army);
  army.addUnit(pike);
  const archer = pike.transform();
  expect(archer.name).toBe("Archer");
  expect(army.gold).toBe(970);
});

test('Battle resolves and awards gold to winner', () => {
  const civ1 = new Civilization('ingleses');

  const civ2 = new Civilization('chinos');

  const army1 = new Army(civ1);
  army1.addUnit(new Knight(army1));
  const army2 = new Army(civ2);
  army2.addUnit(new Pikeman(army2));
  const battle = new Battle(army1, army2);
  expect(battle.winner).toBe(army1);
  expect(army1.gold).toBe(1100);
});


 test('trainUnit: exists in army and trains correctly', () => {
    const civ = new Civilization('chinos');
    const army = new Army(civ);
    const pik = army.units.find(u => u instanceof Pikeman);
    expect(pik).toBeDefined();

    const goldBefore = army.gold;
    const strengthBefore = pik.strength;

    const result = army.trainUnit(pik);
    expect(result).toBe(true);
    expect(army.gold).toBeLessThan(goldBefore);
    expect(pik.strength).toBeGreaterThan(strengthBefore);
  });

  test('trainUnit: returns false for external unit', () => {
    const civ = new Civilization('chinos');
    const army = new Army(civ);
    const otherArmy = new Army(new Civilization('ingleses'));
    const foreign = otherArmy.units[0];
    expect(army.trainUnit(foreign)).toBe(false);
  });


  test('attack: winner gets gold, loser loses strongest units', () => {
    const civ1 = new Civilization('ingleses');
    const civ2 = new Civilization('chinos');
    const army1 = new Army(civ1);
    const army2 = new Army(civ2);

    const beforeGold1 = army1.gold;
    const beforeGold2 = army2.gold;
    const beforeUnits2 = army2.units.length;

    const battle = army1.attack(army2);
    expect(battle).toBeDefined();
    expect(army1.battles).toContain(battle);
    expect(army2.battles).toContain(battle);

    if (battle.winner === army1) {
      expect(army1.gold).toBe(beforeGold1 + 100);
      expect(army2.units.length).toBeLessThan(beforeUnits2);
    } else if (battle.winner === army2) {
      expect(army2.gold).toBe(beforeGold2 + 100);
      expect(army1.units.length).toBeLessThan(new Army(civ1).units.length);
    } else {
      // empate, por default removeTopUnits quita solamente 1
      expect(army1.units.length).toBe(new Army(civ1).units.length - 1);
      expect(army2.units.length).toBe(new Army(civ2).units.length - 1);
    }
  });



  test('transform(): reemplaza unidad correctamente', () => {
  const civ = new Civilization('chinos');
  const army = new Army(civ);
  const pik = army.units.find(u => u instanceof Pikeman);
  expect(pik).toBeDefined();

  const idx = army.units.indexOf(pik);
  const goldBefore = army.gold;

  const success = army.transform(pik);
  expect(success).toBe(true);
  expect(army.units[idx]).toBeInstanceOf(Archer);
  expect(army.gold).toBeLessThan(goldBefore);
});


test('transforming a Knight should throw an error', () => {
  const army = new Army(new Civilization('ingleses'));
  const knight = army.units.find(u => u instanceof Knight);

  expect(knight).toBeDefined();

  expect(() => knight.transform()).toThrow("Transformation not available for knights.");
});
