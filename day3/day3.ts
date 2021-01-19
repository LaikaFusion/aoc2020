import * as inp from '../utils/inputer';

const inputData:Array<string> = inp.breakOnLine(inp.getInput('./day3/input.txt'));
const doubleSplitData:Array<Array<string>> = inputData.map((row:string) => row.split(''));

const tree = '#';
const vertDistance = 1;
const horiDistance = 3;
let horiCounter = 0;
let treeCounter = 0;

// part 1, the loop
for (let index = 1; index < doubleSplitData.length; index += vertDistance) {
  const element = doubleSplitData[index];
  horiCounter += horiDistance;
  if (horiCounter >= element.length) {
    horiCounter -= element.length;
  }
  if (element[horiCounter] === tree) {
    treeCounter += 1;
  }
}
console.log(treeCounter);
