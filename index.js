// Using reduce Method in javascript which returns a single value.

const prices = [5,10,20,30,50];

const total = prices.reduce(sum);
console.log(`$${total}`);


function sum(accumulation, element){
    return accumulation + element;
}

// Again use reduce method to find a largest number in the array

const grades = [70,75,65,87,85];

const maxScore = grades.reduce(getMax);
console.log(`Maximum Score is: ${maxScore}`)
function getMax(accumulator, element){
    return Math.max(accumulator,element);
}


const MinScore = grades.reduce((accumulator,element)=>{return Math.min(accumulator, element)});
console.log(`The Minimum Score is: ${MinScore}`);
