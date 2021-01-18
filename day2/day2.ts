import * as inp from '../utils/inputer';

const inputData = inp.breakOnLine(inp.getInput('./day2/input.txt'));

let validCounter = 0;
const regexForValidation = /(\d+)-(\d+)\s(\w+):\s(\w+)/;

inputData.forEach((validationGroup:string) => {
  const seperated:Array<string> = validationGroup.match(regexForValidation);
  const checkableArray:Array<string> = seperated[4].split('');
  const highestAllowed:number = parseInt(seperated[2], 10);
  const lowestAllowed:number = parseInt(seperated[1], 10);
  const checkLetter:string = seperated[3];
  let checkCounter = 0;

  checkableArray.forEach((letter:string) => {
    if (letter === checkLetter) {
      checkCounter += 1;
    }
  });
  if (checkCounter <= highestAllowed && checkCounter >= lowestAllowed) {
    validCounter += 1;
  }
});
console.log(validCounter);
