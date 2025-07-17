# Army Modeling Project

This is a simple Object-Oriented JavaScript project that models civilizations, armies, units (pikemen, archers, knights), and battles between them. It includes training, unit transformation, and a basic battle system.

## 📦 Project Structure

```
army-modeling/
├── src/
│   ├── Army.js           # Army logic (units, gold, history)
│   ├── Unit.js           # Base class for all units
│   ├── Pikeman.js        # Pikeman class
│   ├── Archer.js         # Archer class
│   ├── Knight.js         # Knight class
│   └── Battle.js         # Battle simulation logic
└── tests/
    └── army.test.js      # Jest test suite
    └── civilization.test.js      # Jest test suite
    └── unit.test.js      # Jest test suite
```

## 🚀 Getting Started

1. **Install Node.js**  
   Download and install from [https://nodejs.org](https://nodejs.org)

2. **Install Jest**
```bash
npm init -y
npm install --save-dev jest
```

3. **Add test script to `package.json`**
```json
"scripts": {
  "test": "jest"
}
```

4. **Run the tests**
```bash
npm test
```

You should see a test summary indicating correct behavior for training, transformations, and battle outcomes.

## 🧪 What’s Covered by Tests?

- Army gold and units on creation
- Training units and updating strength/gold
- Transforming units to stronger types
- Simulating battles and checking gold/unit consequences
- Civilization initialization
- Unit ages (getters and setters)


## ✍️ Notes

- Units hold a reference to their army to handle gold deduction.
- Unit transformation returns a new unit — it's up to the Army to handle replacing the old one.
- The battle system determines the winner by total unit strength.
- Army loses top units when defeated or tied.

---

Feel free to expand this base with more features or rules if required for the interview. Good luck!
