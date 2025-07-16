class Civilization {
  constructor(name) {
    this.name = name.toLowerCase();
  }

  getInitialConfig() {
    if (this.name === 'chinos') {
      return { pikemen: 2, archers: 25, knights: 2 };
    }
    if (this.name === 'ingleses') {
      return { pikemen: 10, archers: 10, knights: 10 };
    }
    if (this.name === 'bizantinos') {
      return { pikemen: 5, archers: 8, knights: 15 };
    }
    return { pikemen: 0, archers: 0, knights: 0 };
  }
}

module.exports = Civilization;
