import * as inp from '../utils/inputer';

const inputData:Array<string> = inp.breakOnLine(inp.getInput('./day3/input.txt'));
const doubleSplitData:Array<Array<string>> = inputData.map((row:string) => row.split(''));

const tree = '#';

const treeCounter = (vertDistance, horiDistance) => {
  let horiCounter = 0;
  let treeCounterTotal = 0;

  // part 1, the loop
  for (let index = vertDistance; index < doubleSplitData.length; index += vertDistance) {
    const element:Array<string> = doubleSplitData[index];
    horiCounter += horiDistance;
    if (horiCounter >= element.length) {
      horiCounter -= element.length;
    }
    if (element[horiCounter] === tree) {
      treeCounterTotal += 1;
    }
  }
  console.log(treeCounterTotal);

  return treeCounterTotal;
};

const toFind:Array<Array<number>> = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]];
let treeMultipleTotal = 1;
// part 2 the loop
toFind.forEach((pair:Array<number>) => {
  const result = treeCounter(pair[0], pair[1]);
  treeMultipleTotal *= result;
});
console.log(treeMultipleTotal);
