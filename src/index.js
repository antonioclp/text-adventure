const prompt = require("prompt-sync")();

// Classes.
const Hero = require("./classes/Hero");

// Capitulos.
const { cap1 } = require("./history/cap1");

// Utils.
const { timeout } = require("./utils/index");

async function start() {
  console.log("--- THAT TIME I GOT REINCARNETED AS A FROG ---");
  await timeout(3000);
  console.log(`
    > Você irá acompanhar a jornada do protagonista que morreu e reencarnou como um sapo, que grandes aventuras
    o aguardam? Vamos descobrir!`);
  await timeout(3000);
  console.log(`
    > Qual o nome que você dará ao personagem?
    `);
  const name = prompt(":   ");

  await timeout(2000);
  const hero = new Hero(name, 100, 20, 60, 0, "hero");
  console.log(`
    > Criando personagem... ${hero.name}
    `);
  await timeout(3000);
  hero.status();
  await timeout(3000);

  console.log(`
    > Deseja iniciar a história? (Y/n)
    `);
  const choice = prompt(":   ").toLowerCase();

  await timeout(3000);
  if (choice === "y" || choice === "yes") {
    console.log(`
    > Iniciando a aventura...
      `);
    await timeout(2000);
    console.log(`
    > Capítulo 1 - Um novo mundo.
      `);
    await timeout(2000);

    cap1(hero);
  } else {
    return;
  }
}

start();
