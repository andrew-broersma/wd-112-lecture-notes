// Arrays

/*
    Array is a list-like object whose prototype has methods to perform traversal and mutation operations. (MDN Web Docs)
        - Denoted by [ ]
        - Hold multiple data types
        - Mutable (can be modified)
        - Can be accessed by their index
*/

let make = ["BMW", "Porche", "Maserati", "Lamborghini"];

console.log(make)

// Accessable by Index

console.log(make[1]) // Square bracket notation: returns Porche

// Array indexes start at zero (0)

console.log(typeof make) // returns an object. Arrays are objects

console.log(make instanceof Array)  // returns true; Arrays are constructors

console.log(make[0]);

let arr = [] // Array Literal
console.log(Boolean([])) // returns true; an empty array is true because it is still an object or something.

// Creating an Array with a constructor

let countries = new Array("Englend", "Germany", "USA", "France")

console.log(countries) // returns a new array

//Challenge

let students = ["Andrew", "Bryson", "Cole", "Dean", ["Jessica", "Steven", "Jonathan"], "Quinton"]

console.log(`Hello ${students[4][2]}`)

// Methods

/*
    In Object Oriented Programming Language (OOP) is a procedure that is associated with an object. It's a function that lives inside of a class.
        - Denoted by the . at the end of object being worked on
            - ex array.map()
*/

let carList = ["BMW M5", "BMW Z4M", "Mercedes 300E", "Maserati GranTourismo S", "Audi S8", "Mercedes E63s"]

// .length method --> returns the length of an array (non-indexed)

console.log(carList.length)

/* 
    .shift() method --> removes first element from an array and returns it.
        - returns removed element
        - if array empty --> returns undefined
*/

console.log(carList)
let removeItem = carList.shift()
console.log(carList)
console.log(removeItem)

console.log(arr.shift())

/*
    .unshift() method --> adds an element to the beginning of an array
        -returns the length of a new array
*/

let newArrLength = carList.unshift("Porsche 911 GT3")
console.log(carList)
console.log(newArrLength) // returns new arr length

/*
    .pop() method --> removes the last array element and returns it (opposite of .shift() )
*/

let lastCar = carList.pop()
console.log(carList)
// console.log(LastCar)

//example of using .pop() return statement
let unwantedCars = []

if (lastCar.includes("Mercedes")) {
    unwantedCars.unshift(lastCar)
    console.log(unwantedCars)
}

/*
    .push() --> adds element to the end of an array (opposite of .unshift() )
        - returns new length of the array
*/

console.log(carList)
console.log(carList.push("BMW M6"))
console.log(carList)

/*
    .reverse() --> returns reversed array elements
*/

console.log(carList)
console.log(carList.reverse())
console.log(carList)

let myStr = "potato"
let myStr2 = "myStr"
myStr = "chicken"
console.log(myStr, myStr2) // returns "chicken" and "potato"  // variables are a simple data type and will create their own space not refering to the original

// console.log(carList)
// let carList2 = carList
// console.log(carList.reverse())
// console.log(carList2)   // arrays are a reference data type and refer back to the original value when a change like this is made.

/*
    .slice() --> returns copy of an array from start to end (non-inclusive)
        -original array NOT modified
        - parameters are (start, stop)
 */

let slicedCars = carList.slice(0, 3)
console.log(slicedCars)
// does not modify reference array unlike .reverse()
slicedCars.unshift("Honda")
console.log(slicedCars)
console.log(carList)

let dinnerIdeas = ["bulgogi", "fried chicken", "italian beef", "sad single frozen pizza and cheap wine"]

let newDinnerIdeas = dinnerIdeas.slice(3)
console.log(newDinnerIdeas)

/*
    .splice() --> changes contents by removing array item and replacing it with something else.
        -parameters are (start, deleteCount, itemToBeAdded)
*/

let months = ["January", "March", "April", "June"]

months.splice(1, 0, "February")
// adds February in index one and removes nothing
console.log(months)

months.splice(0, 1, "Jan")
// adds Jan and removes January
console.log(months)

/* .join() --> creates and returns a new string by concatenating all items in an array 
    - (separator)
*/

let greetings = ["Hi", "Hello", "Welcome", "Guten tag"]

let nakedJoin = greetings.join()
// default; concatenates using commas
console.log(nakedJoin)

let concatJoin = greetings.join("")
// concatenate using no spaces
console.log(concatJoin)

let dashJoin = greetings.join("-")
// concatenate using dashes
console.log(dashJoin)

/*
    .includes() --> checks if a value exists and returns true or false
 */

    let bulldogs = ["Old English Bulldog", "English Bulldog", "Frech Bulldog", "Bullmastif", "Victorian Bulldog"]

    let includesFrenchie = bulldogs.includes("French Bulldog")

    console.log(includesFrenchie)

    /*
        .sort() --> sorts elements as strings in ascending (default) or descending order
    */

console.log(bulldogs.sort())

let cost = [3, 2, 13, 4]

console.log(cost.sort((a, b) => b -a)) // changes the ascending (default) order to descending

/*
    forEach --> executes a fx for each element in an array
*/

let grades = [56, 78, 96, 98, 100, 65]

grades.forEach((item, index) => console.log(item, index))

grades.forEach((item, index, myArr) => myArr[index] = item + 15)

console.log(grades)

/*
    .map() --> creates a whole new array populated with results from the callback function
 */

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man", "Angelina Jolie in Eternals say whaaaaa?"]

let marvelCharsCaps = marvelCharacters.map(character => character.toUpperCase())

console.log(marvelCharsCaps)

/*
    .filter() --> creates a new array with elements that pass the test in a callback function
*/

let startsA = marvelCharacters.filter(character => character.startsWith("A"))

console.log(startsA)

