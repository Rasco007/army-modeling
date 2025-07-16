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
