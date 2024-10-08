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

   
// Sorting array with Strings

let names = ["Sikandar","Kainat","Reshma","Naseema","Sumera","Hanifa"];

let updated_name = names.sort();
console.log(updated_name);
// now It will also arranged in ascending order 
console.log(names);


let Names = ["Jameel","Haleem","Sania","Fareena","Najma","Kainat"];

let updatedNames = Names.sort().reverse();

console.log(updatedNames);

// Sorting arrays with numeric value

let numbers = [67,68,76,34,36,98,54,76, 103, 106, 23, 35, 19];

let updatedNumbers = numbers.sort((a,b)=> a -b);

console.log(updatedNumbers);

console.log("Hello, This is Sikadar Ali Laghari");

let reversedNumbers = numbers.sort((a,b)=> b - a);
console.log(reversedNumbers);

let lowestNumbers = reversedNumbers[0];
console.log(reversedNumbers);




let arrays = [67,68,76,34,36,98,54,76, 103, 106, 23, 35, 19];
let sortedNumbers = arrays.sort((a,b)=> a - b);
console.log(`Sorted Numbers: ${sortedNumbers}`);
let highestNumber = sortedNumbers[sortedNumbers.length - 1];
let lowestNumber = sortedNumbers[0];
console.log(`Highest Number in Sorted Array: ${highestNumber}`);
console.log(`Lowest Number in Sorted Array: ${lowestNumber}`);


     reversedNumbers = arrays.sort((a,b)=> b - a);

console.log(`Reversed Numbers: ${reversedNumbers}`);

 highestNumber = reversedNumbers[0];
 lowestNumber = reversedNumbers[reversedNumbers.length -1];
console.log(`Highest Number in Reversed Array: ${highestNumber}`);
console.log(`Lowest Number in Reversed Array: ${lowestNumber}`);

//program no 1

  var name = "Sikandar Ali";
  console.log(name);
  name = "Khalid Laghari";
  console.log(name);