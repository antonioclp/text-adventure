const Character = require("./Character");

// Utils.
const { timeout } = require("../utils/index");

/**
 * Classe de herói.
 */
class Hero extends Character {
  constructor(name, life, strength, hunger, money, type) {
    super(name, life, type);
    this.strength = strength;
    this.hunger = hunger;
    this.money = money;
  }

  /**
   * Métodos de status.
   */
  // Método para alimentação, recupera fome e vida.
  async eat(hungerIncreased, lifeHeal) {
    if (this.hunger + hungerIncreased > 100) {
      await timeout(2000);
      this.hunger = 100;
      console.log("> Sem fome.");
    } else {
      this.hunger += hungerIncreased;
    }

    if (this.life + lifeHeal > 100) {
      await timeout(2000);
      this.life = 100;
      console.log("> Vida cheia.");
    } else {
      this.life += lifeHeal;
    }

    await timeout(2000);
    console.log(
      `> Recuperados ${hungerIncreased} pontos de fome e ${lifeHeal} pontos de vida.`
    );
  }

  // Método para adicionar dinheiro.
  addMoney(value) {
    this.money += value;
    console.log(`> Você recebeu T$ ${value}`);
  }

  // Método para visualizar os status.
  status() {
    console.log(`
      --- ${this.name} ---
      Vida: ${this.life}
      Fome: ${this.hunger}
      Força: ${this.strength}
      Money: T$ ${this.money}
      `);
  }

  /**
   * Métodos de habilidades.
   */
  // Método de ataque extra.
  // Math.floor() arredonda o número para baixo.
  // Math.floor(Math.random() * (strength * 0.3)) + 4 irá gerar um número de aleatório
  // escalando com a força e com um dano base de 4.
  // Exemplo: Força = 20, então, o dano variante será entre 4 e 10;
  tongueSlash() {
    return Math.floor(Math.random() * (this.strength * 0.3) + 4);
  }
}

module.exports = Hero;
