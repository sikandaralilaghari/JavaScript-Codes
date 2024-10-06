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

// Template Literals

console.log(`FirstName: ${firstName} lastName: ${lastName}`);

// Conversion between Numbers and Strings
// Number, parseInt, parseFloat

let idigit = Number ("45") + 11;
let fdigit = parseFloat ("45.5")+11;
let hello = parseInt("1400")+11;
console.log(idigit);
console.log(fdigit);
console.log(hello);

// Numbers to String 

let str1 = idigit.toString()+"Hello";
let str2 = fdigit.toString()+"Khalid";
let str3 = hello.toString()+"hi";
console.log(str1);
console.log(str2);
console.log(str3);

//Boolean Values

let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

// Boolean Constructor

let isTruthy = Boolean(1);
let isFalsy  = Boolean(0);
console.log(isTruthy);
console.log(isFalsy);

// Using boolean in condition

let isTruth = true;
if(isTruth){
    console.log("Welcome!");
}
else{
    console.log("Please Log in!");
}

let hu = true;
let hy  = false;

console.log(hu && hy);
console.log(hu || hy);
console.log(!hu);
console.log(!hy);

// impilicit conversion means automatically conversion

let stu = "Hello";
if(stu){
    console.log("The statement is truthy");
}

// String + Numbers = String
// String - "Number" = Number

let stw = '5' + 2;
console.log(stw); // 52
stw = '5' - 2;
console.log(stw); // 3

stw = '5' * 2;
console.log(stw);// 10
stw = '5'/2;
console.log(stw); // 2.5

// Boolean to NUmber

let sum = true +2;
console.log(sum);

// Comparison Coercion

let result = '5' == 5;
console.log(result);

// Explicit type conversion using methods 
// Using Strnig
let heu = 134;
let st3 = String(heu)+9;
console.log(st3);
// toString
st3 = heu.toString()+67;
console.log(st3);

//  Number
let hum = "123";
let muh = Number(hum) + 5;
console.log(muh);
muh = parseInt(hum)+5;
console.log(muh);
muh = parseFloat(hum)+0.45;
console.log(muh);

let huj = +hum +(5);
console.log(huj);

let stum = '123';
let mum = Number(stum) + 6;
let bool = Boolean(stum);
console.log(bool);
console.log(mum);