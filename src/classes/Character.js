class Character {
  constructor(name, life, type) {
    this.name = name;
    this.life = life;
    this.type = type;
  }

  // Método de receber dano.
  hited(damage) {
    // Personagem já derrotado;
    if (this.life <= 0) return false;

    this.life -= damage;

    // Verifica se personagem derrotado é herói ou vilão e imprime uma mensagem no console.
    if (this.life <= 0) {
      this.life = 0;
      console.log(
        this.type === "hero" ? "--- The End ---" : "--- Congratulations ---"
      );
      return false;
    }

    console.log(
      this.type === "hero"
        ? `> Você recebeu ${damage} pontos de dano`
        : `> ${this.name} recebeu ${damage} pontos de dano`
    );
    // Retorna true caso personagem esteja vivo.
    return true;
  }

  // Método de ataque simples.
  // Math.floor() arredonda o número para baixo.
  // Math.floor(Math.random() * (strength * 0.2)) + 3 irá gerar um número de aleatório
  // escalando com a força e com um dano base de 3.
  // Exemplo: Força = 20, então, o dano variante será entre 3 e 7;
  hit(strength) {
    if (this.type === "hero" && strength) {
      console.log(strength + " FOr aca aiksai")
      return Math.floor(Math.random() * (strength * 0.2)) + 3;
    }

    if (this.type === "villain") {
      return Math.floor(Math.random() * 3) + 2;
    }
  }
}

module.exports = Character;
