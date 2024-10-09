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

Generators are the type of function in which you have to control on them. let suppose you have a function name madhan () and  set of statements you want to control statement by yours. So there is a concept of Generators in javascript. Javascript function declare with function *test(){// we introduce word yield 

yield: "first",
yield: "two",
yield: "three"

}// yield mean pause the value and we introduce variable to store this of function 

let g = first();
// another concept will be used for the calling the statement in the function next function willbe used

g.next(); // first
g.next();//second
g.next();//third


Generator in javaScript:
The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

Generator is a subclass of the hidden Iterator class.