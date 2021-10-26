//Javascript
/* 
    JavaScript was founded in 1996 by Brandon Eich
    -client side language (runs in the browswer)
    -interpreted (not compiled)
    -object oriented
    -ECMAScript: which is an organization that sets the language standards
*/

// Coments
/*
    Lines or blocks of code that are not being interpreted by the parser.
    -Denoted by // for single line
    -or like the existing comment that allows many lines of code.
    -Comments get read but are not executed.
    -Beneficial in documenting maintainable codebase
*/

//Variables
/*
    Containers that store data in memory.
    -declaration
        -allowing the memory space to be reserved
        -declarations start with 'let' or 'var'
        -declaration cannot start with a number or most special characters other than $ or _
        -default value is undefined
        -loosely typed language (no need to declare data type)
    -initialization

*/

let firstName;
// console.log(firstName)

var lastName;
// console.log(lastName)

// const age;
// Missing Initializer Error. Const must always be declared AND initialized.
// console.log(age)

// Coding Practices for Variables
/**
 * -Be concise (ex: 'firstName' instead of 'usersFirstName')
 * -Be specific (ex: 'getValue' instead of "i")
 * -Utilize camelCase, snake_case, PascalCase, or skewer-case.
 * -You can also utilize nocase or SCREAMING_CASE
 * -Some conventions: 
 * Javascript Conventions
Camel case for variables and methods.
Pascal case for types and classes in JavaScript.
Upper case snake case for constants.

 */

// Variable Initialization
/*
    The data value is givien to a variable declaration.
        -can be anything (string, intiger, array, function, class, etc.)
        -can be reassigned (appart from const)
*/
// declaration identifier = initializer (value)
let address = "151 N Park";
console.log(address)

// redeclare variables with different initializers
address = "144 N Park";
console.log(address)

console.log(firstName, lastName);

firstName = "Summer";
lastName = "Kerekes";

console.log(firstName, lastName)

const ssn = 123456789
console.log(ssn)

// ssn = 444898800
// console.log(ssn)
// Error! TypeError: assignment to constant variable
// const variables cannot be reassigned

// Data Types
/*
    JavaScript has several data types that can be used. They are:
        -Boolean
        -Null
        -Undefined
        -String
        -Number
        -Array
        -Object
*/

// String
/*
    Data type used to represent text in single or double quotes.
    Primitive Data Type
*/

let myString = "This is a string data type."

myString = 'Can be in single quotes'

myString = `This is a template literal string (backticks)`

// Numbers

let degrees = 90;
console.log(degrees)

let precise = 999999999999999;
//15 digits doesn't round up
console.log(precise)

let rounded = 9999999999999999;
// 16 digits rounds up
console.log(rounded)

let decimalAddition = 0.2 + 0.1;
//because of the way JavaScript does numbers it has a remainder
console.log(decimalAddition)

let strToNum = Number("123");
console.log(strToNum)

// Boolean
// Two possible values: true (on) or false (off)

let on = true;
console.log(on)

let off = false;
console.log(off)

// Undefined
// No value is assigned and does not act as an empty container

let undef = undefined;
console.log(undef)

// Null
// Null is an empty value. Container with nothing in it.

let empty = null;
console.log(empty)

// Null vs Undefined

/*
    -Null is like container with nothing in it
    -Undefined means variable has never been set or created
*/

// Data Type Literals
// When developer inserts a value into a data type

let strLiteral = "This is a string literal"

// Arrays
// Container holding a list of items

let students = ["Dean", "Cole", "Kiersten"];
console.log(typeof students) // returns object

// Object
// Stores many values

let student = {
    name: "Cole",
    age: 20,
    graduated: false,
}

console.log(typeof student) // also returns object

// Assignment Operators

// Assigns a value to the declaration (not equal, but is)

let r = 5;

//Comparison Operators

/*
    Compare Values on either side of the operator
*/

// Equal to operator
console.log(3 == 3) //returns true

// Not equal to
console.log(3 != 5)  // return true because 3 is not equal to 5

// Type Coercion
/* 
Process of converting one data type into another
Done automatically by the JS parser
*/


console.log(3 == "3") // returns true because JS changes str data type to int data type before comparison

// Strict Equal or Not Equal operators
// Tests for not only value but it's data type.

console.log(3 === 3) // returns true because value and data type is the same

console.log(3 === "3") // returns false because "===" compares the types as well as value

console.log(3 !== "3") // returns true because the types do not match

// Greater; Less; Greater & Equal, Less & Equal

console.log(5 > 3) // returns true

console.log(5 >= 5) // returns true

console.log(1 < 0) // returns false

console.log(0 < "1") // returns true because type coersion exists.

// Logical Operators NOT, AND, OR

/*
    NOT Operator (!)
    OR Operator (||)
        -true if one or the other value results in true
    AND Operator (&&)
        -true if both values result to true
    (Not Or And is the order of operations "NOA")
*/


console.log(5 < 10 && 7 < 10) // returns true since they are both true

console.log(5 < 1 && 7 < 10) // returns false since one side is false

console.log(5 < 1 || 7 < 10) // returns true because one of them is true

console.log(5 < 10 || 7 < 10) // returns true because both sides are true

console.log(5 < 1 || 7 > 10) // returns false since both sides are false

console.log(!(7 == 10)) // returns true because they are not equal

console.log(Boolean(0)) // 0 is off/false 1 is on/true

// Add, Subtract, Multiply, Divide

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(2 / 5);
// these bottom two are the same
let addNums = 5;

addNums = addNums * 2;
console.log(addNums)

addNums *= 2
console.log(addNums)

// Modulus Operator
// Checks for the remainder of long division

console.log(12 % 5) // returns 2

let fName = "Andrew";
let lName = "Broersma";

console.log(fName, lName)

let name = "Mr." + " " + fName + " " +lName
console.log(name)

let templateLiteralName = `Mr. ${fName} ${lName} is ${32 + 1} years old.`
console.log(templateLiteralName)

let multiLine = "Once upon a time there was a guy who taught JS to students \n and lied about his age. He has a bulldog named Bentley."

console.log(multiLine)

// Challenge

/*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable), street; city; state; post code; and concatenate them together to create your address stamp
*/

let myFirstName = "Andrew";
let myLastName = "Broersma";
let houseNumber = "9244";
let street = "Fireside Dr.";
let city = "Indianapolis";
let state = "Indiana";
let postCode = "46250"

let fullAddress = `${myFirstName} ${myLastName}
${houseNumber} ${street}
${city}, ${state} ${postCode}`;

let realAddress = myFirstName + " " + myLastName + "\n" + houseNumber + " " + street + "\n" + city + ", " + state + " " + postCode

console.log(fullAddress)
console.log(realAddress)