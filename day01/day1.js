const { readFile } = require("node:fs/promises");

function isLineBreak(char) {
  return /\n/.test(char);
}

async function run() {
  try {
    const data = await readFile("part1-data.text", "utf-8");
    let current = "";
    let sum = 0;
    let highestSum = 0;
    const threeHighestSums = [];

    for (let i = 0; i < data.length; i++) {
      if (!isLineBreak(data[i])) current += data[i];
      if (isLineBreak(data[i])) {
        if (current) {
          sum += +current;
        } else {
          if (sum > highestSum) highestSum = sum;
          if (threeHighestSums.length < 3) threeHighestSums.push(sum);
          else {
            const lowestOfThree = Math.min(...threeHighestSums);
            if (sum > lowestOfThree) {
              threeHighestSums[threeHighestSums.indexOf(lowestOfThree)] = sum;
            }
          }
          sum = 0;
        }
        current = "";
      }
    }

    console.log("Most calories = ", highestSum);

    const highestThreeSum = threeHighestSums.reduce((s, c) => s + c, 0);
    console.log("Sum of highest three = ", highestThreeSum);
  } catch (error) {
    console.error(error);
  }
}

run();
