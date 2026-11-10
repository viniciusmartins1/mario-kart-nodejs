const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 3,
  manobrabilidade: 4,
  poder: 4,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`,
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalSkill1 = 0;
    let totalSkill2 = 0;

    if (block === "RETA") {
      totalSkill1 = diceResult1 + character1.velocidade;
      totalSkill2 = diceResult2 + character2.velocidade;

      await logRollResult(
        character1.nome,
        "velocidade",
        diceResult1,
        character1.velocidade,
      );
      await logRollResult(
        character2.nome,
        "velocidade",
        diceResult2,
        character2.velocidade,
      );
    }
    if (block === "CURVA") {
      totalSkill1 = diceResult1 + character1.manobrabilidade;
      totalSkill2 = diceResult2 + character2.manobrabilidade;

      await logRollResult(
        character1.nome,
        "manobrabilidade",
        diceResult1,
        character1.manobrabilidade,
      );
      await logRollResult(
        character2.nome,
        "manobrabilidade",
        diceResult2,
        character2.manobrabilidade,
      );
    }
    if (block === "CONFROTO") {
      let powerResult = diceResult1 + character1.poder;
      let powerResul2 = diceResult2 + character2.poder;
    }
  }
}

(async function main() {
  console.log(
    `🚨🏁 Corrida entre ${player1.nome} e ${player2.nome} começando...\n`,
  );

  await playRaceEngine(player1, player2);
})();
