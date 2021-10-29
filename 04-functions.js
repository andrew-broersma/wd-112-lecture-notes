// Functions

/*
    Function is a block of reusable code that can take in parameters (door), perform an action, and return the result.

    There are two types of functions in JS:
        - function declarations
            -are hoisted
        - function expression
            -arrow functions
            -are not hoisted
    Functions have a default return statement of undefined unless otherwise specified.
*/

/*
    function identifier(parameters_if_any) {
        block of code to run
        return statement
    }
*/

function funDeclaration() {
    //console.log("This is a function declaration")
    return "this is a function declaration's return statement"
}

// Functions will not run until they are invoked (called).
// Parentheses immediately invoke the function

funDeclaration() // Will not show until wrapped in console.log()

let funResult = funDeclaration()

console.log(funResult)

// Functions can have none or many parameters
// Parameters act as doors to let arguments inside of a function

function greetUser(fullName) {
    return `Good day, ${fullName}`
}

console.log(greetUser())
// returns undefined because no parameter is given.
console.log(greetUser("Andrew"))
// returns 'Good day, Andrew' because we gave the parameter a string argument of 'Andrew'
let userName1 = "Cole"
let userName2 = "Quinton"
let userName3 = "Emily"

console.log(greetUser(userName1))

// Function Expression

/*
    Function expression utilizes a variable as a placeholder.
    Function expressions are not hoisted.
*/

/*
    let identifier = function(params_if_any) {
        block of executable code
        return statement
    }
*/

let myDog = function(name, breed) {
    return `My dog, ${name} is a ${breed}`
}

console.log(myDog("Bentley", "Olde English Bulldog"))

// Arrow Functions
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
    Do not bind to this or super (more on that in Classes)
*/

//Concise Body Arrow Function
//Can only have one parameter if it's not enclosed by ( )
//Can have implicit return statements ONLY

let greetEveryone = () => console.log("Hello class!")
greetEveryone()

/*
    Same as:
    let greetEveryone = function() {
        console.log("Hello class!")
    }
*/

let greetPerson = person => `Hello ${person}`
console.log(greetPerson("Andrew"))

// Parentheses around parameters needed only if none or many are present.

// Block Body Arrow Functions

let sendEmail = (email, name) => {
    return `hello: ${name}:
    
    This is to inform you that you are learning JavaScript.
    
    Good on you! We can send some swag to ${email}.
    
    Sincerely,
    
    Paul & Summer`
}

console.log(sendEmail("broersma.andrew@gmail.com", "Andrew"))

// Functions and their return statements

function twoNums(num1, num2) {
    return num1, num2
}

console.log(twoNums(5, 7))

//functions can only return one value. The above only returns 7. to show both it needs to be grouped like in an array.

function twoNums1(num1, num2) {
    return [num1, num2]
}

console.log(twoNums1(5, 7))

// Challenge

/*
    Create a function declaration called addNums that takes two numbers and returns a result.
*/

let addNums = (num1, num2) => num1 + num2

console.log(addNums(12, 4));

// Immediately Invoked Function Executions
/*
    Function declaration that has no name and is immediately invoked.
*/

(function() {
    console.log("IIFE")
})();

// Challenge
/*
    Create an arrow function expression named tipCalculator.
    it will take pre-tax bill, sales tax, and tip percentage.
    It will return string interpolated bill total and tip ammount.
*/

let tipCalculator = (bill, sTax, tip) => {
    let totalWithTax = bill * (1+sTax);
    let tipTotal = totalWithTax * tip;
    return `The total bill with tax is ${totalWithTax.toFixed(2)} and your tip should be ${tipTotal.toFixed(2)}.`
};

console.log(tipCalculator(4.5, .07, .2));

// Paul's version

let tipCalc = (bill, salesTax, tipPercent) => {
    let taxAmt = bit * (salesTax / 100);
    let billTotal = bill + taxAmt;
    let totalTip = totalBill * (tipPercent / 100);
    let billTotal = totalBill + totalTip
    return `Your bill is ${billTotal} of which the tip is ${totalTip}`
};

console.log(tipCalc(100, 8, 20));

// Challenge
/*
    Create a function of your choice (declaration or expression) named capitalizeName.
    It takes one parameter.
    It capitalizes the first letter of the name and returns the full name to you.
*/

let capitalizeName = (uName) => {
    let setupName = uName.toLowerCase();
    return setupName.charAt(0).toUpperCase() + setupName.slice(1).toLowerCase();
};

console.log(capitalizeName("jason"))

// Quentin's Solution:
function capitalizeName(name){
    let capName = '';
    for (let letter in name){
        if(letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    console.log(capName);
    return capName;
}

capitalizeName('QuINtoN')

function whatDoesItDo(color) {
    if (color !== 'blue' || color !== 'green') {
        color = 'red';
    }
    return color;
}

console.log(whatDoesItDo('blue'))