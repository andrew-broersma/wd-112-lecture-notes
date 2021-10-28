// Conditionals
/* A falsy value is a value that is condidered false when encountered in a Boolean context.
    There are 6 falsey values in JS:
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN (not a number)

    What does this mean? Whenever JS is expecting a Boolean value and it returns one of those 6 values, it is evalueated as falsey.
*/

let test = []; // true
let test1 = 0; // false
let test2 = 1; // true
let test3 = null; // false

console.log(Boolean(test));
console.log(Boolean(test1));
console.log(Boolean(test2));
console.log(Boolean(test3));


/*
When utilizing comparison operators, we typically are asking so we can move on to the next batch of code. "IF" something is true, do "this thing".
*/

let light = "on";

if(light == "on") {
    console.log("The light is on");
};

let weather = 65;

if (weather < 70) {
    console.log("Consider wearing a jacket");
};

/* Syntax Conditional
if (conditional) {
        do this code;
}
*/

if(true) {
    console.log("Works");
}

/* Understanding how our comparison operators are functioning can help us ask questions to produce the results we are wanting.

In the case above we said "If the weather is less than 70 degrees outside, then we might want to be instructed to bring a jacket"

? What if we wanted to make sure two things are true inside our if statement?
*/

let rain = true;

if (weather < 70 && rain != false){
    console.log("It is a little chilly and will possibly rain.");
}

// Challenge
/*
create two variables:
    1) let batman = 'is the night'
    2) let bruce = true

Create an if statement that returns true and console log 'batman'
*/

let batman = 'is the night';
let bruce = true;

if ((batman == 'is the night') && (bruce == true)) {
    console.log("Batman");
}

/* 
? Perhaps we want to evaluate a question and provide an option for either the "yes" and "no" of that answer. EX. "if you're tired, sleep. If not, go for a walk" If/Else statements allow us this ability to write out a chain of events.

*/

let today = 75;

if (today < 70){
    console.log(`It's ${today}, wear a jacket`);
} else {
    console.log(`It's ${today}. No jacket needed.`);
}

/*
? What if there are multiple things you would like to check agains and compare to?
*/

let myName = "Andrew";
let otherName = "Mike";

if (myName == 'Andrew') {
    console.log('Andrew');
} else {
    console.log('Hello, what is your name?');
}

if (myName == 'Andrew') {
    console.log(`Hello, my name is ${myName}`);
} else {
    console.log(`Hello is your name ${myName}?`);
}

/*  ELSE IF
This is a condition that would be checked if the above condition was not met.
*/

//? Let's cook something:

let cookTime = 40;
if (cookTime === 45) {
    console.log("Let us feast!");
} else if (cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5-15 min.`);
} else if (cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 min.`);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it. `);
};

/* The end of the ELSE IF statement should have a simple "Else" to finish it. This is simply stating that none of our conditions were met. And to execute we should provide a response for the ones we can't account for.

it should also be considered that it will finish the method once the condition has been met. Remember JavaScript reads from top to bottom. If it passes on a particular Else If, it will consider it completed.
*/

// Bad example. The order of the 'else if' statements ends before checking all of them. It should have given the 2nd else if statement, but it stops because the first one listed was technically true even though there were others that were more true.
let cookTime2 = 40;
if (cookTime2 === 45) {
    console.log("Let us feast!");
} else if (cookTime2 >= 20) {
    console.log(`It has only been ${cookTime2} minutes. Wait another 10-25 min.`);
} else if (cookTime2 >= 30) {
    console.log(`It has only been ${cookTime2} minutes. Wait another 10-15 min.`);
} else {
    console.log(`It's only been ${cookTime2}. At least cook it.`);
}

// Challenge

let age = 23;

if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log('Sorry you\'re too young to do anything');
};

/*  TERNARIES

This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a much more simple manner.
*/
// ? We can consider an if/else:
let first = "Andrew";

if (first === "Andrew") {
    console.log(`Hi, ${first}!`);
} else {
    console.log(`Not sure I know ${first}`);
}

/*
Writing a ternary requires us to define our condition
- "IF" that returns true, provide a result - "ELSE" return a result.
*/

/* TERNARY SYNTAX
condition ? if true: else result
*/
first === "Andrew" ? console.log(`Hi ${first}! We\'re using a ternary`): console.log(`Not sure I know ${first}...`)

first === "Andrew"?
console.log(`Hi ${first} We're using a Ternary!`):
console.log(`Not sure I know ${first}...`);

// It's even possible to chain out if/else

let hero = "Batman";
let villain = "Kiteman";

hero == "Batman" && villain == "Riddler" ?
    console.log(`What has a head and a tail but no body?`) :
    hero == "Batman" && villain == "Joker" ?
        console.log('Why so serious?') :
        hero == "Batman" && villain == "Kiteman" ?
            console.log(`What does Kiteman do?`) :
            console.log(`${hero} is the night!`);

// Challenge

let lampOn = false;
let dayTime = true;

lampOn == true && dayTime != true 
  ? console.log ('The lamp is on during the night')
  : lampOn != true && dayTime != true 
    ? console.log('The lamp is off during the night') 
  : lampOn == true && dayTime == true 
    ? console.log('The lamp is on during the day') 
  : lampOn != true && dayTime == true 
    ? console.log('The lamp is off during the day')
    : console.log("What lamp?");
// slightly cleaner version since both were already boolean
    lampOn && !dayTime 
    ? console.log('The lamp is on during the night')
    : !lampOn && !dayTime
    ? console.log('The lamp is off during the night')
    : lampOn && dayTime
    ? console.log('The lamp is on during the day')
    : !lampOn && dayTime
    ? console.log('The lamp is off during the day')
    : console.log('What lamp?');


/* SWITCH

-The switch statement executes a block of code depending upon different cases.

Switch statements are another version of how we consider if/else statements. We are asking a question and requiring a specific response that is determined by our answer.
*/

let instructor = "Zach";

switch(instructor) {
    case "Zach":
        console.log(`${instructor} is part of the Web Development team.`);
        break;
        //Once each case has been evaluated and we return a result, we need to note to "break" out from our switch statements, otherwise we continue on through our statements and produce the other results as well.
    case "Ing":
        console.log(`${instructor} is part of the Web Development team.`);
        break;
    default:
        console.log(`Sorry I can't find what ${instructor} teaches at this time.`)
        //We must end all of our SWITCH statements with a default. The same way we end ElseIf statements with an else. Think of this as a "catch" for those condition that we either haven't considered or don't want to consider.
}
// We can also simplify this down to check among a variety of cases to result in one response.

instructor = "Zach";

switch(instructor){
    case "Ing":
    case "Adam":
    case "Eric":
    case "Zach":
    case "Donovan":
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case "Josh":
    case "Amanda":
    case "Casey":
    case "Junior":
        console.log(`${instructor} is part of the Software Development team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
}

// Challenge

grade = "A";

switch (grade) {
    case "A":
        console.log('Passed!');
        break;
    case "B":
        console.log('Passed with some errors.');
        break;
    case "C":
        console.log("Passed with moderate success.");
        break;
    case "D":
        console.log("I guess you barely didn't fail");
        break;
    case "F":
        console.log("Failed.");
        break;
    default:
        console.log("maybe you should have turned something in.")
}

// We can apply conditionals within our switch to be met as well

let switchConditional = true;
switch(switchConditional == "string" || typeof switchConditional == "boolean") {
    case true:
        console.log(`${switchConditional} is a string or boolean!`)
        break;
    default:
        console.log(`${switchConditional} is NOT a string or Boolean.`);
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

let numberGrade = 80;

switch (true) {
    case numberGrade >= 89:
        console.log("You passed with an 'A'");
        break;
    case numberGrade >= 79:
        console.log("You passed with a 'B'");
        break;
    case numberGrade >= 66:
        console.log("You passed with a 'C'");
        break;
    case numberGrade >= 59:
        console.log("You have barely passed with a 'D'");
        break;
    case numberGrade < 59:
        console.log("You failed.")
    default:
        console.log("input not a grade");
}
