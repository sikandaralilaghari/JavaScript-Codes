// Using reduce Method in javascript which returns a single value.

const prices = [5,10,20,30,50];

const total = prices.reduce(sum);
console.log(`$${total}`);


function sum(accumulation, element){
    return accumulation + element;
}
