const { readFile } = require("fs/promises");

async function run() {
  let data;
  try {
    data = await readFile("day2-data.text", "utf-8");
  } catch (error) {
    console.error(error);
  }

  // L = 0
  // D = 3
  // W = 6

  //   A: 1  Rock
  //   B: 2  Paper
  //   C: 3  Scissors

  // X = Lose, Y = Draw, Z = Win

  const results = {
    AA: 4,
    AB: 8,
    AC: 3,
    BA: 1,
    BB: 5,
    BC: 9,
    CA: 7,
    CB: 2,
    CC: 6,
  };

  const getPlay = {
    AX: "C",
    AY: "A",
    AZ: "B",
    BX: "A",
    BY: "B",
    BZ: "C",
    CX: "B",
    CY: "C",
    CZ: "A",
  };

  let totalScore = 0;

  for (let i = 0; i < data.length; i++) {
    if (/[ABC]/.test(data[i])) {
      let opp = data[i];
      let requiredResult = data[i + 2];
      let me = getPlay[opp + requiredResult];

      let score = results[`${opp}${me}`];
      // console.log(score);
      totalScore += score;
    }
  }
  console.log("Final Score = ", totalScore);
}

run();
