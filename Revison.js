var name = "Sikandar Ali";
console.log(name);
name = "Khalid Mehmood";
console.log(name);


let age = 30;
console.log(age);
age = 25;
console.log(age);
if(true){
    let age = 45;
    console.log(age);
}

console.log(age);

const pi = 3.1416;
console.log(pi);
// pi = 4;
// console.log(pi);

const person = {name:"Khalid",age:23};

person.name = "Mehmood";

console.log(person.name);// This is allowed in javascript

// person = {name:"Sikanda"}; This is not allowed in javascript 
// console.log(person.name); 


let num = 13;
let floa = 13.54;
let largeNum = 1e6;
console.log(num);
console.log(floa);
console.log(largeNum);

let a = 45;
let b = 9;

console.log("Addition: "+a)
console.log("Subtraction: "+ (a - b));
console.log("Multiplication: "+ (a *  b));
console.log("Division: "+(a / b));
console.log("Exponention: "+(a**b));
console.log("Modulo Operator:"+(a % b));
console.log("Infinity:"+(1/0));
console.log("Not a valid Number NaN: "+"abc"/2);
let number = 13.4645546;
console.log(number.toFixed(2));// after decimal 2 digit
console.log(number.toString()); // change num into string

// String in JavaScript:
let Name = "Sikandar Ali";
let greet = 'Hello!';
let template = `Hi, ${Name};`
console.log(Name);
console.log(greet);
console.log(template);

// String Operations Concatenation

let firstName = "Sikandar ";
let lastName = "Laghari";
let fullName = firstName + lastName;
console.log(fullName);
console.log(fullName.length);

// String method toUppercase and toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// indexOf() returns the position of the String 
console.log(fullName.indexOf('Laghari'));
// Slice extracts substring from string
console.log(fullName.slice(9,16));
//replace parts of string with an other string
console.log(fullName.replace('Laghari','Ali'));

