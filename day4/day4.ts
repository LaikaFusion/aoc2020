import * as inp from '../utils/inputer';

const inputData:Array<string> = inp.getInput('./day4/input.txt').split(/\W\n/);

let totalValid = 0;
let part2TotalValid = 0;
const relevantFields = /(ecl:)|(pid:)|(eyr:)|(hcl:)|(byr:)|(iyr:)|(hgt:)/g;
// regex makes me cry
const part2RelevantFields = /(ecl:(amb|blu|brn|gry|grn|hzl|oth)(\W|\n|$))|(pid:\d{9})(\W|\n|$)|(eyr:(20(2[0-9]|30))(\W|\n|$))|(hcl:#([a-f]|[0-9]){6}(\W|\n|$))|(byr:(19[2-9][0-9]|200[0-2])(\W|\n|$))|(iyr:(20(1[0-9]|20))(\W|\n|$))|(hgt:(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)(\W|\n|$))/g;
// part 1 loop
inputData.forEach((canidate:string) => {
  const matches = canidate.match(relevantFields);
  if (matches.length >= 7) {
    totalValid += 1;
  }
});
// part 2 loop
inputData.forEach((canidate:string, i) => {
  const matches = canidate.match(part2RelevantFields);
  if (!matches) {
    return;
  }
  console.log(canidate, matches);
  if (matches.length >= 7) {
    part2TotalValid += 1;
    console.log(matches);
  }
});

console.log(totalValid);
console.log(part2TotalValid);
