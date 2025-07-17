const Pikeman = require('../src/Pikeman');
const Army = require('../src/Army');
const Civilization = require('../src/Civilization');

describe('Unit age system', () => {
  test('setAge and getAge should reflect the correct value', () => {
    const army = new Army(new Civilization('chinos'));
    const pikeman = army.units.find(u => u instanceof Pikeman);
    expect(pikeman).toBeDefined();

    pikeman.setAge(7);
    expect(pikeman.getAge()).toBe(7);

    pikeman.setAge(12);
    expect(pikeman.getAge()).toBe(12);
  });
});
