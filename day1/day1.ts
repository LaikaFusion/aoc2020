const fs = require('fs');
let data:string;

try {
     data = fs.readFileSync('./day1/input.txt', 'utf8');
} catch(e) {
    console.log('Error:', e.stack);
}

let arrayedData:Array<string> = data.split("\n");
arrayedData.pop();
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
 
//part 2
const findFactor = (currentNumericArray:Array<string>,targetValue:number,totalFactors:Number, currentResults:Array<number> = [] ) =>{
    if(currentResults.length >= totalFactors || currentNumericArray.length === 0){
        return;
    }
    currentNumericArray.forEach((e:string,i:number )=>{
        const elementAsNumber:number = parseInt(e);
        const searchValue:number = targetValue - elementAsNumber;
        const holdingResults:Array<number> = [...currentResults,elementAsNumber];
        if (searchValue === 0 && holdingResults.length === totalFactors){
            console.log(holdingResults.reduce( (a, b) => a * b ));
        }
        else if(searchValue < 0 || currentNumericArray.length <=1){
            return;
        }
        else{
            findFactor(currentNumericArray.slice(i+1),searchValue,totalFactors,holdingResults);
        }
    })
}
findFactor(arrayedData,totalAmount,3);