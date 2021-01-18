import { readFileSync } from 'fs';

export const getInput = (filePath:string):string => {
  let data:string;
  try {
    data = readFileSync(filePath, 'utf8');
  } catch (e) {
    console.log('Error:', e.stack);
  }
  return data;
};

export const breakOnLine = (fsResult:string):Array<string> => {
  const arrayedData:Array<string> = fsResult.split('\n');
  arrayedData.pop();
  return arrayedData;
};
