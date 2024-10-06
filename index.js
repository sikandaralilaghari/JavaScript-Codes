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




const birthDate = [1989,1990,1997,1999,2002,2003,2006];

let birthYear = birthDate.some(function(element,index,birthDate){
    return element > 1989;
});

console.log(birthYear);


const Numbers = [1,2,3,4,5,6,7,8,9];
let availableNumber = Numbers.every(function  (element,index,Numbers){
    return element > 0;
});
console.log(availableNumber);

   


let names = ["Sikandar","Kainat","Reshma","Naseema","Sumera","Hanifa"];

let updated_name = names.sort();
console.log(updated_name);
// now It will also arranged in ascending order 
console.log(names);
