function getCompartments(start, i, data) {
  let length = i - start;
  let mid = start + length / 2;
  return [data.slice(start, mid), data.slice(mid, i)];
}

function findCommonItem(firstComp, secondComp) {
  let index;
  for (let i = 0; i < firstComp.length; i++) {
    index = secondComp.indexOf(firstComp[i]);
    if (index > -1) break;
  }
  return secondComp[index];
}

function getPriority(item) {
  console.log(item, item.charCodeAt(0));
  let priority = 0;

  if (/[a-z]/.test(item)) priority = item.charCodeAt(0) - 96;
  else priority = item.charCodeAt(0) - 38;
  return priority;
}

module.exports = { getCompartments, findCommonItem, getPriority };
