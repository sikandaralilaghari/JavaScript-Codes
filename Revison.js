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

// Arrays in javaScript

const fruits = ['Apple','Banana','Mango'];

for(let i in fruits){
    console.log(fruits[i]);
}
console.log(fruits);

// create Array using constructor 

let sequence = new Array(1,2,3,4,5,6,6);

for(let i of sequence){
    console.log(i);
}
console.log(sequence);
// Accessing array element 
console.log(sequence[4]);
// find length of the array
console.log(sequence.length);

// Adding element in the array use push operator to add number 0 index and if you want use unshift() add at last index

sequence.push(6);
console.log(sequence);
sequence.unshift(456);
console.log(sequence);

// Remove element in the array and using pop method to remove last element and use shift operator removed
// first element

let udbs = [1,2,3];
udbs.pop();
udbs.shift();
console.log(udbs);

// iterating over arrays

for(let i=0;i<udbs.length;i++){
    console.log(udbs[i]);
}

// ForEach Element

 let fruts = ['banana', 'Watermelon', 'Strawberry guava'];

// Using forEach to iterate through the array
fruts.forEach(len);

function len(str){
    console.log(str.length);
}

// USing Map create new Array in javaScript

let animal = ['Sheep','goat','lion','cheetah','Tiger','Monkey'];

let updateAnimal = animal.map(uppercase);
console.log(updateAnimal);
function uppercase(str){
    return str.toUpperCase();
}

// Combine two or more arrays

let arr1 = ['Apple','Banana'];
let arr2 = ['guava','grapes'];
let comFru = arr1 + arr2;
console.log(comFru);


// Slice and splice

//slice returns portion of array, don't change original array

let huma = [1,2,3,4,5,6,7,8,9];
let sli = huma.slice(0,4);
console.log(huma);
console.log(sli);
// Removing elements using splice
let rmo = sli.splice(0,2);
console.log(sli);
console.log(rmo);
// Splice removes and adds element in the array
//Adding element using splice()


let colors = ['Red','Green','Blue'];
colors.splice(1,0,'Pink',"Yellow");
console.log(colors);


// Replacing element using splice

colors.splice(1,1,"Yellow");
console.log(colors);

// Find return the first element which satisfy the condintion

let numbers = [1,2,3,4,5];
console.log(numbers.find((num)=> num>4));
console.log(numbers.filter((num)=> num > 2));
console.log(numbers);


console.log(numbers.includes(5));

//Multidimensional Array:

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i in array){
    for(let j in array){
        console.log(array[i][j]);
    }
}

// Array Mutability

let nu = [1,2,3];
nu[2] = 7;
console.log(nu);


let hamad = [56,34,35,6,4,76,75,34];

console.log(hamad.map((num)=>num +num));
console.log(hamad.filter((num)=>num >34));
console.log(hamad.reduce((acc,element)=> acc + element));
hamad.forEach((num)=> console.log( num * 2));

// Spread operator is used for remaining the immutability in the array

let newArr = [...hamad,7];
console.log(hamad);
console.log(newArr);

// Destructuring the arrays 

let [u,v,c,d,e,f,g,h] = [56,34,35,6,4,76,75,34];
console.log(`U:${u} V:${v} C:${c} D:${d} E:${e} F:${f} G:${g} H: ${h}`)
// used rest operator combine arrays
let arr4 = [1,2,3];

let Newarr = [...hamad,...arr4];
console.log(hamad);
console.log(arr4);
console.log(Newarr);


//pass function as a array

function Total(...nums){
    return nums.reduce((acc,element)=> acc + element);
}

console.log(Total(1,2,3,4,5,6,7,8));

//Array .from method
function example(){
    let args = Array.from(arguments);
    console.log(args);
}

example(1,2,3,4,5);

// flatenning the 2d array convert 2d array into 1d array


let nested = [[1,2],[3,4],[5]];
let flat = nested.reduce((acc,val)=> acc.concat(val),[]);

console.log(flat);

nested = ['banana','apple','mango','banana','apple'];

let count = nested.reduce((acc,element)=>{
    acc[element] = (acc[element] || 0) + 1;
    return acc;
})

console.log(count);




let purson = {
    name:"Sikandar Ali",
    age:23,
    city:"Daharki",
    greet:function(){
        console.log("Hello, I am "+this.name);
    }

    
}

console.log(purson.name);
console.log(purson.age);
console.log(purson.city);
purson.greet();


let car = new Object();

car.brand = 'Toyota';
car.year = 2020;
car.model = 'Gli';

console.log(car.brand);
console.log(car.year);
console.log(car.model);


function awais(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

person1 = new awais("Sikandar Ali", 25, "Daharki");
person2 = new awais("Khalid", 33, "MPM");


console.log(person1.name);
console.log(person1.age);
console.log(person1.city);


console.log(person2.name);
console.log(person2.age);
console.log(person2.city);


class Animal{
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    speak(){
        console.log(` ${this.name} makes a sounds`);
    }}


     let Dog = new Animal ("Dog","Mammal");
    

Dog.speak();


let obj = {name:"Sikandar Ali", age:23, city:"Daharki"};
obj.age = 34;

console.log(obj);

console.log(obj["name"]);
let key = "age";
console.log(obj[key]);


//Adding and deleting properties in the javaScript

 obj.country = "Pakistan";
 console.log(obj);

 // a propert we can use keyword delete

 delete obj.country;

 console.log(obj);

 // Checking for property existance in the objects

console.log("country" in obj);
console.log("age" in obj);
console.log("name" in obj);


// hasOwnProperty Method

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("country"));

// Object.keys()
console.log(Object.keys(obj)); 
// Object.Values() 
console.log(Object.values(obj));
// Object.entries()
console.log(Object.entries(obj));
let uder = {name:"Sikandar", age:34};
let valuePair = Object.entries(uder);
console.log(valuePair);

console.log(uder);
// Object Assign

// copies the value of all enumerable properties 

let target = {a:1,b:2};
let source = {b:4,c:5};

let yest = Object.assign(target,source);
console.log(yest);

// object freeze prevents modification in the property values

Object.freeze(yest);

yest.a = 6;
console.log(yest);

// Iterating objects
// for in propery 

for(key in source){
    console.log(source[key]);
}

Object.keys(obj).forEach(key=>{
console.log(key+": "+(obj[key]));
})

// This keyword in this object 

let umer = {
    brand :"Toyota",
    model: "GLI",

    display_Info:function(){
        console.log(`${this.brand} ${this.model}`);
    } 
}

umer.display_Info();

let student = {
    name: "Sikandar Ali",
    nam : "Hello",
    price:22,
    grades:{
        math:"A",
        eng : "B"
    },
    courses:["Math","Sciences","Literature"]
}

console.log(student.grades.math);
console.log(student.courses[2]);

// Object Destructuring 
///let  {nam , price } = student;
//console.log(nam);
//console.log(price);

// You can also rename properties using during structuring the  objecs
let aloo = {name:"Aloo", age:34};

let {name:AlooName, age: AlooAge} = aloo;
console.log(AlooName);
console.log(AlooAge);

// Ternary operator in javascript

let allow = 17;

let canVote = (allow>=18) ? "You can Vote":"You cannot Vote";

console.log(canVote);

function closer(){
    var name = "Mozilla";
    
    function display(){
        console.log(name);
    }
    name = "harry"
    
    return display;
}

let we = closer();

we();
function returnFunction(){
const x = () =>{
    let a = 1;
    console.log(a);
    const y = () =>{
        let a = 2;
        console.log(a);
        const z = () =>{
            let a = 3;
            console.log(a);
        }
        z()
    }
    
    y();
}

return x}

let k = returnFunction();






// Null coalescing ?? in javaScript

const foo = null ?? 'default String';
console.log(foo);
// Expected output: default string

const baz = 0 ?? 42;
console.log(baz);

//Expected output: 42

// Call Stack in javascript
// greet is pushed to stack and then removed after execution 
function gret(){
    console.log("Welcome to sukkur");
}

gret();

// Event queue Example
console.log("A");
setTimeout (()=>{console.log('Aysnc Task'),34});
console.log("B");

// Synchronous Example

console.log("Step 1:")
console.log("Step 2:")
console.log("Step 3")

// Asynchronous Example

console.log("A");
setTimeout(()=>console.log("Asyc"), 3000);
console.log("B");

function *test(){
    yield  "first",
    yield "second",
    yield 'third'

}

let gen = test();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
