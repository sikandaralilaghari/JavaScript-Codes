Practices Javascript Coding 
I have completed use of the reduce method in javascript. It is used to return single value from the array.

Some Method in javaScript:
The some() method in javaScript returns a boolean value true if any of the element in a given array satisfies a given condition. Otherwise, it returns a false.

Some method is used to find any value in the array which satisfies the condition it will return value in the form of true or false. If value is found in the array it will return true other it return false. In simple words it returns true or false.

Some method takes three parameters one is element which is compulsory. Remaining two methods are optional index, arr. If you want to use them in your program then you should include them.

#Every() Method in javascript:
The every() method  in javascript returns a Boolean Value true. if each and every element in array satisfies the given condition. otherwise, it returns false.
just like some method it has three parameter 1. element 2. index 3. Numbers of array
Update very method.
#Every method is used to return true or false by comparing every value in the array.

SORT METHOD IN JAVASCRIPT:
The sort() method in JavaScript is used to sort an element of an array in ascending order.

The sort() method is used to update the original when you print original array it will gives values in sorted way after the applying condition of sort method.

Now I want to sort array in the descending by using reverse method with sort

Now we are going to using sorting with numbers. with numbers when we apply numbers.sort() it does not change the array in sorting order 

I have used sort method to generate the number in ascending order and in descending.  I also find highest and lowest in the sorted array. and I have also found highest value and lowest value in reversedOrder array.



Variables and const variables in javaScript:
using of var var is global scope and again initializable 
I have example of code
Resignable yes

2. let block scoped only accessible in the block it is declared
Reassignable yes

3. const like let blocked scoped. It can't be resassignable
it declares onces


Numbers and Strings in JavaScript:
Javascript has only one number type: number, which can represent both integer and float pointing number
Special  value = infinity 1/0
NaN: Not a Number

Numbers Method: toFixed(), toString()

#Template literal show results by using back tick and write variable in middle bracket with $ sign infront of bracket.
#Conversion between Numbers and Strings in javaScript


#Boolean true or false

Falsy Values: false, 0, Null, Undefined, NaN, "" empty String
Truthy Values: Everything else, (non zero numbers, non empty strings, objects, arrays)
// Booleans are used in logical operation and, or , not


Implicit boolean conversion
performs in conditional expressions

// Type conversion in javascript
change value in one data type to another
// Implicit types means automatically conversion

// Explicit type conversion using methods
//String Method and toString() Method
// Number Method
//parseInt()
//parseFloat()
//unary operator is used str change into number + sign


#Arrays in JavaScript


There are three ways to create objects in javaScript:

1. Using object literal
2. Using new Keyword
3. constructor

Bracket Notation in the object is used when we call object properties dynamically

Adding and deleting properties in the javaScript Objects
checking for the checking existence property in the javaScript

1. The function of in operator
2. hasOwnProperty() 

JavaScript methods
1. Object.keys() // Returns an property of object

#closure in javascript:
A closure is the combination of function bundled together enclosed with a references to its surrounding state the lexical environment

#Nullish coelscing operator in javascript : ??
The nullish coalescing (??) operator is a logical operator that returns its right hand side operand when its left-hand side is null.

Errors in in javascript 
#Syntax error: create instance representing a syntax error
#ReferenceError
Creates an instance representing an error that occurs when de-referencing an invalid reference
Example: console.log(notDefinedVariable);
TypeError
Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
Example: 
let num = 42;
num.toUpperCase();
Undefined error: When a variable is declared but it is not assigned yet this is called as undefined error
Example:
let x;
console.log(x);

#RangeError
Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
Example: let arr = new Array(-5);
#Call Stack:
The Call Stack where JavaScript keeps track of function calls. Functions are added to the stack when called and removed when they finish executing

#Event Queue holds asynchronous callbacks like setTimeOut. Once the callStack is empty, tasks from the event queue are moved to call stack queue 

#Callback and Event queue
The event loop continuously checks the call stack and the task queue. If the call stack is empty, it moves tasks from the task queue to the call stack for execution. This process ensures that asynchronous tasks don't interfere with the synchronous execution of code.

#Web API: A web API is an application programming interface for the Web. 
The API provides an easy syntax to use the complex code. For example, you can use the GeoLocation API to get the coordinates of the users with two lines of code. You don't need to worry about how it works in the backend.

Synchronous means that tasks happen one after another. JavaScript will wait for each task to finish before starting the next one.

Memory updated
Synchronous:
Synchronous means that tasks happen one after another. JavaScript will wait for each task to finish before starting the next one.

Asynchronous:
Asynchronous means that tasks can happen at the same time or after a delay. JavaScript doesn’t wait for these tasks and moves on to the next one.

Blocking operations in javascript:
Blocking operations are tasks that stop the program from doing anything else until they finish
This means other code cannot run until the curent task is done.

use of git stash command
The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy.
Generators in javascript

