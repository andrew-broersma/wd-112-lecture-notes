// Scope & Hoisting

/*
    Scope determines how different blocks of code can be accessed.
        - Global scope
        - Block scope
        - Function scope
        - Module scope
        - Lexical scope
*/

// Global scope
/*
    Window object in terms of the client (browser)
    JS file when using runtime environment such as Node.js
    Accessable from every other scope
*/

let x;
console.log(x)

function addOne() {
    // function scope
    x = 1
}

addOne()
console.log(x)

if (x == 1) {
    // block scope (whenever you see {})
    x += 1
}

console.log(x)

// Function scope
// Can be accessed only inside the function

function carName () {
    let make = "Maserati"
    console.log(make)
    let model = "GranTourismo"
    var year = 2015
}
carName() // console.logs fx scope variable of make

// console.log(model) ReferenceError ---> cannot access fx scope from global scope

// console.log(year) ReferenceError ---> var is hoisted but still unable to access fx scope from global scope

// Block Scope

function house(){
    let bedrooms = 2        //
    var bathrooms = 3       //both of these are in function scope

    if (true) {
        console.log(bedrooms)
        console.log(bathrooms)
        let address = "123 Main St"  // these two are in block scope
        var forSale = false
    }

    // console.log(address) ReferenceError ---> let is block scoped in the immediate enclosing block
    let num = 3
    console.log(forSale) // var is fx scoped
}
// console.log(house())
house()

/*
    Let is scoped to the immediate enclosing block of code.
    Var is scoped to the immediate function block.
*/

// Module scope (Blue Badge Material)
//  deals with modules themselves and how they are handled. When you bring dependencies into your code.
// they encapsulate variables that are created inside of a module that is being imported.
// It protects the variables from being accessed outside.

function outerFunction() {
    // outer scope
    let outerFxVar = "Hello from the outer side!"

    function innerFunction() {
        //inner scope
        console.log(outerFxVar)
    }

    return innerFunction
}

let inner = outerFunction()

// Hoisting

/*
    JS as an interpreted language is being read top to bottom and left to right.
    The parser which reads the code goes over it twice.
    First, to hoist or assign memory location to all:
        -VARiables
        -Function declarations
    During second pass, the interpreter reads initialization values and expressions and executes the code.
*/

let y;
console.log(y)

// 1. y gets declared and automatically assigned value of undefined
// 2. console.log reads the undefined value above

// console.log(z) ReferenceError --> because we're calling on z before it's declared.
let z;

console.log(a)
var a = "test value" // the var declaration gets hoisted, but not the value.

// shouldn't really use it.


// Hoisting & Fx Declaration vs Fx Expression

// Function declaration
// Invoking fx before creation works because fx gets hoisted with everything in it.

helloWorld()
function helloWorld() {
    if (true) {
        // let adele = "Adele" // Reference Error --> let scoped to block not fx
        var adele = "Adele" // var scoped to fx
    }
    console.log(`Hello World from the Hoisting Side! - ${adele}`)
}

// Function Expression

let addNums = (x, y) => console.log (x + y)
//Works --> fx expression created, THEN invoked
addNums(5, 5)

//subNums(5, 1) Type Error --> because subNums declaration is hoisted with a default value of undefined.

let subNums = (x, y) => console.log(x -y)

// Above is the same as:
// var subNums = function(x, y) {
//     console.log(x-y)
// }

/*
    Things that are NOT hoisted:
        - let variables
        - const variables
        - fx expressions
        - classes
*/

