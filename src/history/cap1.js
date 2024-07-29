const prompt = require("prompt-sync")();

// Classes.
const Villain = require("../classes/Villain");

// Utils.
const { timeout } = require("../utils/index");

async function cap1(hero) {
  const villain = new Villain("Centipede", 50, "villain");
  let started = true;
  console.log(`
    Hmmmm... que estranho, me sinto diferente, porque estou tão pequeno?
    `);
  await timeout(5000);
  console.log(`
    Pera... eu sou um SAPO? Como isso foi acontecer, eu apenas me lembro de ter desmaiado?
    `);
  await timeout(5000);
  console.log(`
    <Aviso, adquirindo habilidade Tongue Slash.>
    `);
  await timeout(5000);
  console.log(`
    Como? Que voz é essa na minha cabeça, não se passou nem alguns minutos e já estou enlouquecendo?
    `);
  await timeout(5000);
  console.log(`
    <Saúde emocional e física normal, sou sua habilidade especial chamada Michael e estou aqui para lhe ajudar.>
    `);
  await timeout(5000);
  console.log(`
    A sim claro, com certeza... então quer dizer que estou em um outro mundo? Habilidades?
    `);
  await timeout(5000);
  console.log(`
    <Exato, porém por hora recomendo se alimentar.>
    `);
  await timeout(5000);
  console.log(`
    Você tem razão, me sinto com fome... mas como irei comer?
    `);
  await timeout(5000);
  console.log(`
    <Recomendo utilizar a habilidade adquirida e caçar alguns espécimes para se alimentar.>
      `);
  await timeout(5000);
  console.log(`
    Certo!
      `);

  let act1 = true;

  while (act1) {
    await timeout(3000);
    console.log(`
    <Mestre, com o que você deseja se alimentar? Estamos em uma planície e logo a frente um lago.>
      
    1- Se alimentar.
    2- Explorar.
      `);
    const choice = prompt(":   ");

    if (choice === "1") {
      await timeout(3000);
      console.log(`
    > Você decide se alimentar de alguns insetos próximos.
        `);
      await timeout(5000);
      console.log(`
    Urgh isso é um pouco nojento, mas de alguma forma o gosto é bom.
        `);
      await timeout(5000);
      hero.eat(10, 10);
      act1 = false;
    } else {
      await timeout(3000);
      console.log(`
    > Você decide explorar a região.
        `);
      await timeout(5000);
      console.log(`
    Hmmmm, até que o ambiente é bonito, talvez eu devesse descobrir como viver como um sapo e possivelmente ficar mais forte?.
        `);
      act1 = false;
    }
  }
  await timeout(5000);
  console.log(`
    <Aviso, inimigo se aproximando, grande centopeia venenosa.>
    `);
  await timeout(5000);
  console.log(`
    Como? Essa não...
    `);
  await timeout(3000);
  do {
    let livedBoss = true;
    while (livedBoss) {
      await timeout(2000);
      console.log(`
       --- ${villain.name} ${villain.life}HP  ---
        `);

      await timeout(2000);

      console.log(`
       --- Ataques ---
    
       1 - Ataque simples

       --- Habilidades ---
    
       2 - Tongue Slash
        `);

      const choice = prompt(":   ");

      if (choice === "1") {
        // Ataque simples
        const damage = hero.hit(hero.strenght);
        await timeout(2000);
        villain.hited(damage);
      } else if (choice === "2") {
        // Tongue Slash
        const damage = hero.tongueSlash();
        await timeout(2000);
        villain.hited(damage);
      }

      // Verifica se o vilão foi derrotado
      if (villain.life <= 0) {
        livedBoss = false;
        await timeout(2000);
        console.log(`${villain.name} foi derrotado!`);
      }

      // Se o vilão tentar um ataque especial
      if (villain.trySpecial()) {
        const specialDamage = villain.special();
        await timeout(2000);
        hero.hited(specialDamage);
      } else {
        // Caso não consiga lançar um especial, use um ataque simples.
        const villainDamage = villain.hit();
        await timeout(2000);
        hero.hited(villainDamage);
      }

      // Verifica se o herói foi derrotado
      if (hero.life <= 0) {
        started = false;
        await timeout(2000);
        console.log(`${hero.name} foi derrotado!`);
      }
    }

    started = false;
  } while (started);
}

module.exports = {
  cap1,
};
