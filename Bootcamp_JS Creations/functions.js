function singSong() {
    console.log("Happy");
    console.log("As");
    console.log("The");
    console.log("Sun");
};

function greet() {
    console.log("Hello there!");
};

//With an argument:
function greet(person) {
    console.log(`Hello there, ${person}!`);
}

greet('Anna');
greet('Rachel');
greet('Thomas');

//Multiple Arguments example:
function greeting(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName}!`);
}

greeting('Elvis', 'Presley');

//More complicated function:
function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat ('$', 5); 

//Coding Exercise
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes(1,1);
isSnakeEyes(1,2);

//Using the return keyword:
function add(x, y) {
    return x + y;
}

const sum = add(10, 14);
sum;

const ans = add(100, 50);
sum;

//Example of nesting a 'return' inside a conditional:
function sub(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}

//Coding Exercise 38:
function multiply(num1, num2) {
    return num1 * num2;
}

const product = multiply(2,3);
console.log(product);

//isShortsWeather Exercise 39:
function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    }
    return false;
}

console.log(isShortsWeather(80));

//lastElement Exercise 40:
function lastElement(input) {
    if (input.length > 0) {
        return input[input.length - 1];
    }
    return null;
}

//capitalize Exercise 41:
function capitalize(input) {
    return (`${input[0].toUpperCase()}${input.slice(1)}`);
}

//Sum Array Exercise 42: (Had to look up answer***)
function sumArray(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++){
        total += input[i];
    }
    return total;
}
sumArray([3,4,6]) //Returns 13.

//Days of Week Exercise 43: (***Figured out on own after a while!)
let weekDay = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else if ( num >= 1 || num <= 7) {
        return weekDay[num]
    }
}

returnDay(5); //Returns "Friday"

//Function Scope: ----------------------------------------------->
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs); //---Would return undefined if placed outside parentheses.
}
/*Any variable that is defined inside of a function is scoped to that function and cannot be accessed outside of the function.*/

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron'; //if commented out, "Scarlet Macaw" would print to console.
    console.log(bird); //Prints Great Blue Heron if not commented out.
}
birdWatch();
console.log(bird); //Prints "Scarlet Macaw"

//Block Scope: (Blocks include Conditionals and Loops, just not functions.)
let radius = 8;
if (radius > 0) {
    const PI = 3.1415927;
    let msg = 'HI!'
}

console.log(radius);
console.log(PI); //Will return that PI is not defined. Because this is not a function, it is a conditional.

for (let i = 0; i < 5; i++) {
    let msg = "Run me five times!"
};
console.log(msg); //Returns error because we cannot access msg outside of loop.

// Lexical Scope -------------------------------------------------->
function bankRobbery() {
    const heroes = ['Spiderman', 'Batman', 'Wonder Woman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP, ${hero.toUpperCase()}!`);
        }
    }
    cryForHelp();
}
bankRobbery();

//Function Expressions: -------------------------------------->

const mathematic = function (x, y) {
    return x - y;
} //A function stored in a variable.

//Higher Order Functions: ----------------------------------->
function callTwice(func) {
    func();
    func();
}

function rollTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie);

//Returning Functions:
function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log("Congrats! I am a good function. You win $1,000")
        } 
    } else {
        return function() {
            alert("You have received a bad function!")
            alert("You have received a bad function!")
            alert("You have received a bad function!")
            alert("You have received a bad function!")
            alert("You have received a bad function!")
        }
    }
}

//Is a number between 50 and 100 example:

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
};
