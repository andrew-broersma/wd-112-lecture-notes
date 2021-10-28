/* LOOPS

Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without rewriting a lot of code.
*/

/* FOR LOOPS

Structure
    - We have to setup our loops in a way that we can:
        -see where we are in a loop
        -Consider what sort of condition we want to run against
        -Note when we are done with that condition and move on to the next iteration.

    We need to:
        1)Create an Index
        2) Run a condition
        3) Change to the indexing variable.
*/

// Let's count to 10:

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/*
we state our loop with a "for". Within this function we are injecting some parameters that JS will run against. syntax---> index; condition; change index <--- lead us to our result.

Within our parameters, we are stationg an index declaration to 0. This is baseline. We move on asking if that variable is less than or equal to the number 10, take that set number and add 1 to it's value. Once that is processed, return that value (in this case a console.log of that number). Once our condition is met, we return a FALSE which ends our loop. THIS is important to note:

for (<create index variable>; <run condition>; <change index>) {
    <return results>
    <continue until condition is met>
}
*/

// Challenge
for(let i = 2; i > -10; i -= 4) {
    console.log(i);
}

// we aren't limited by positive or negative numbers. We can even cycle through variables assigned as strings.

let word = "supercalifragilisticecspialidocious";

for (let i = 0; i < word.length; i++) {
    // .length is a method that we can use in JS that helps us determine a value that we may not know.
    console.log(i, word[i]);
    console.log(`the letter ${word[i]} is in position: ${i}`)
}
//1) We set a value of each index and are displaying that
//2) we set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.

/*  FORIN LOOPS

with For loops, we are seeking an index value and running that against a condition. For In Loops don't require us to have an index number.
*/

let city = {
    name: "Indianapolis",
    pop: "8777000",
    speedway: true
};

for (info in city) {
    console.log(info);
}

// "info" is a placeholder for the information that we are wanting to pull from "city". We could use the "bear" or "potato" and it would produce the same result. BUT, keeping a standard that we are writing code in a "relative" manner so that people reading it after can easily follow allong.

// info has shown us the keys within our object.

// what if we wanted to see those values that are represented within the objects?
console.log(city[info]);

/*
SYNTAX of For In
for(variable IN object) {
    statement-- do something
}

for IN an array:
*/
let list = ["milk", "eggs", "beans", "meat", "bread", "apples"];

for (item in list){
    // variable gives the index, object gives what's in the array
    console.log(item);
    console.log(list[item]);
}


let name = 'piCard';
let propCase;

for(letter in name){
    letter == 0 ? propCase = name[letter].toUpperCase(): propCase += name[letter].toLowerCase();
//    1            2                       3                 4                  5
}
console.log(`${propCase}: "Engage!"`);

/*
1) We are taking the value of "letter" index and declaring a position of 0
2) We assign our empty variable top equal that posititioned value.
3) If that index is 0, we will take that value and run a ".toUpperCase()" method on it.
4) If the index is not 0, we still want to include it into our empty variable and utilize our += expression so it knows to add the next value or (n++)
5) If the index is not 0, we want to run a ".toLowerCase()" method so that all letters are in the proper case.
*/

/* FOROF Loops

In order to run a FOR OF loop, the "thing" must be numbered like an array.

let object = {
    string: "Peter",
    boolean: true,
    number: 1
}

for (item of object){
    console.log(item)
}

because the object isn't indexed like an array, we are unable to loop items "of" that object. We can't be sure what is "of" this particular object.

*/

let indexArray = ["spot 1", 2, true, "not fifth"];

for (let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/*
SYNTAX FOR OF LOOP
for(variable of interable){
    statement
}
*/

// We are capable of iterating over the values within this array or "of" this array.

/*
Quick Recap:
    -FOR loop: loops through a block of code until the counter reaches a specified number
    -FOR IN loop: loops through the "of" in an object
    -FOR OF loop: loops over iterable objects as arrays and strings *remember*, a string can be accessd in much the same way as an array.
*/

let animalArray = ["mouse", "cat", "dog", "bird", "pig"];

for (let animal of animalArray) {
    animal === "mouse" ?
    console.log("squeek") :
    animal === "cat" ?
    console.log("meow") :
    animal === "dog" ?
    console.log("woof"):
    animal === "bird"?
    console.log("tweet"):
    animal === "pig"?
    console.log("oink"):
    console.log('no animal')
};

let animals = ['mouse' , 'cat' , 'dog' , 'bird' , 'pig']
let sounds = ['squeak' , 'meow' , 'bark' , 'chirp' , 'oink']

for (animal of animals) {
    console.log(animal + ' says ' + sounds);
}

let x = 89;

if (x %= 3) {
    console.log("Fizz");
} else if (x %= 5) {
    console.log("Buzz");
} else if ((x %= 5) && (x %= 3)) {
    console.log("fizz buzz")
} else {
    console.log("not fizzing or buzzing");
}
let x = 90;
    (x %= 3)?
    console.log("Fizz"):
    (x %= 5)?
    console.log("Buzz"):
    (x %= 15)?
    console.log("Fizz Buzz"):
    console.log("nothing to fizz or buzz about");

    let num =  89

    if (num % 15 === 0) {
        console.log('Fizz Buzz')
    }
    else if (num % 3 === 0) {
        console.log('Fizz')
    }
    else if (num % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(num)
    }
    for (var i=1; i < 101; i++){
        if (i %= 15) console.log("FizzBuzz");
        else if (i %= 3) console.log("Fizz");
        else if (i %= 5) console.log("Buzz");
        else console.log(i);
    } 
    