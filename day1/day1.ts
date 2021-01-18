const fs = require('fs');
let data:string;

try {
     data = fs.readFileSync('./day1/input.txt', 'utf8');
} catch(e) {
    console.log('Error:', e.stack);
}

let arrayedData:Array<string> = data.split("\n");
let numericArrayedData = arrayedData.map((e:string)=>parseInt(e));

const totalAmount:number = 2020;

//prints day 1
numericArrayedData.forEach((e:number,i:number )=>{
    const searchValue:number = totalAmount - e;
    const result:number = arrayedData.indexOf(searchValue.toString(),i+1); 
    if(result > -1){
        console.log(e*numericArrayedData[result])
    }
})
 
//day 2
