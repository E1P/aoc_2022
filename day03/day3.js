const { readFile } = require("fs/promises");
const {
  getCompartments,
  findCommonItem,
  getPriority,
} = require("./day3-funcs");

async function run() {
  let data;
  try {
    data = await readFile("day3-data.text", "utf-8");
  } catch (error) {
    console.error(error);
  }

  let start = 0;
  let prioritySum = 0;

  for (let i = 0; i < data.length; i++) {
    if (/\n/.test(data[i])) {
      const [firstComp, secondComp] = getCompartments(start, i, data);
      const commonItem = findCommonItem(firstComp, secondComp);
      prioritySum += getPriority(commonItem);
      start = i + 1;
    }
  }

  console.log("Sum of priorities = ", prioritySum);
}

run();
