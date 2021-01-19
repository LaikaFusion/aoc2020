import * as inp from '../utils/inputer';

const inputData = inp.breakOnLine(inp.getInput('./day2/input.txt'));

let validCounter = 0;
let validDay2Counter = 0;
const regexForValidation = /(\d+)-(\d+)\s(\w+):\s(\w+)/;

inputData.forEach((validationGroup:string) => {
  const seperated:Array<string> = validationGroup.match(regexForValidation);
  const checkableArray:Array<string> = seperated[4].split('');
  const highestAllowed:number = parseInt(seperated[2], 10);
  const lowestAllowed:number = parseInt(seperated[1], 10);
  const checkLetter:string = seperated[3];
  // day 1 stuff
  let checkCounter = 0;

  checkableArray.forEach((letter:string) => {
    if (letter === checkLetter) {
      checkCounter += 1;
    }
  });
  if (checkCounter <= highestAllowed && checkCounter >= lowestAllowed) {
    validCounter += 1;
  }

  if ((checkableArray[lowestAllowed - 1] === checkLetter
     && checkableArray[highestAllowed - 1] !== checkLetter)
  || (checkableArray[lowestAllowed - 1] !== checkLetter
    && checkableArray[highestAllowed - 1] === checkLetter)) {
    validDay2Counter += 1;
  }
});
console.log(validCounter, validDay2Counter);
