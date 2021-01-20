import * as inp from '../utils/inputer';

const inputData:Array<string> = inp.breakOnLine(inp.getInput('./day5/input.txt'));

const holdingArr = [];

// part 1 loop
inputData.forEach((element) => {
  let row = element.substr(0, 7);
  let column = element.substr(7, 3);
  row = row.replace(/F/g, '0').replace(/B/g, '1');
  column = column.replace(/L/g, '0').replace(/R/g, '1');

  const rowNum = parseInt(row, 2);
  const columnNum = parseInt(column, 2);

  const total = (rowNum * 8) + columnNum;
  holdingArr.push(total);
});
console.log(Math.max(...holdingArr));

holdingArr.sort().forEach((curNum, iterator) => {
  const nextNum = holdingArr[iterator + 1];
  if (iterator !== holdingArr.length - 1 && (nextNum - curNum > 1)) {
    console.log(curNum, nextNum);
  }
});
