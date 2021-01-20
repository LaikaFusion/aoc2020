import * as inp from '../utils/inputer';

const inputData:Array<string> = inp.getInput('./day4/input.txt').split(/\W\n/);

let totalValid = 0;
const relevantFields = /(ecl:)|(pid:)|(eyr:)|(hcl:)|(byr:)|(iyr:)|(hgt:)/g;

// part 1 loop
inputData.forEach((canidate:string) => {
  const matches = canidate.match(relevantFields);
  if (matches.length >= 7) {
    totalValid += 1;
  }
});

console.log(totalValid);
