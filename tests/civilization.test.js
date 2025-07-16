const Army = require('../src/Army');
const Civilization = require('../src/Civilization');

test('Chinos army initializes with correct units', () => {
  const civ = new Civilization('chinos');
  const army = new Army(civ);
  const types = army.units.reduce((acc, unit) => {
    acc[unit.name] = (acc[unit.name] || 0) + 1;
    return acc;
  }, {});
  expect(types['Pikeman']).toBe(2);
  expect(types['Archer']).toBe(25);
  expect(types['Knight']).toBe(2);
});
