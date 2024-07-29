const Character = require("./Character");

class Villain extends Character {
  constructor(name, life, type) {
    super(name, life, type);
  }

  special() {
    if (this.name.toLowerCase() === "centipede") {
      console.log(`> ${this.name} está lançando um especial...`);
      return Math.floor(Math.random() * 14) + 6;
    }

    return 0;
  }

  // Método que tem uma chance de 15% para retornar true e utilizar um especial.
  trySpecial() {
    return Math.random() < 0.15;
  }
}

module.exports = Villain;
