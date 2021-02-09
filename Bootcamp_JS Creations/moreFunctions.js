//Defining Methods: -------------------------->
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
};
//Don't need the colons and 'function' keyword.

//Coding Exercise 45:
const square = {
    area(num) {
        return num * num;
    },
    perimeter(num) {
        return num * 4;
    }
}

//This keyword in methods:
const person = {
    first: 'Robert',
    last: 'Smith',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
person.fullName();

const cat = {
    name: 'Minnie',
    color: 'gray',
    breed: 'Maine Coon',
    catInfo() {
        console.log(`${this.name}, ${this.color}, ${this.breed}`)
    }
}
cat.catInfo();

//Coding Exercise 46: Lay Egg
const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg(){
        if (this.eggCount < 10) {
            this.eggCount ++;
        }
        return "EGG";
    }
}

//Try/Catch --- catching errors:

try {
    hello.toUpperCase();
} catch {
    console.log("Error.")
}

//Callbacks and Array Methods:
//ForEach:

const nums = [10,9,8,7,6,5,4,3,2,1];

nums.forEach(function (n) {
    console.log(n*n);
});

nums.forEach(function(even) {
    if(even % 2 === 0) {
        console.log(even)
    }
});

//Map:
const doubles = nums.map(function(num) {
    return num * 2;
});
doubles;

//Coding exercise 47 - map practice:
function cleanNames(arr) {
    const newArr = arr.map(function(str) {
        return str.trim();
    })
    return newArr;
}

//Arrow Functions:
// const add = function(x,y) {
//     return x + y;
// }

const addition = (x,y) => {
    return x + y;
}
addition(5,6); //11
//Same thing but with shorter notation.

const squared = (x) => {
    return x * x;
}
squared(9); //81

// const rollDice = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//Coding Exercise 48:
const greetings = (name) => {
    return `Hey ${name}!`;
}
console.log(greetings('Harry'));

//Arrow Function Implicit Returns: ------------------->
const rollDice = () => (
    Math.floor(Math.random() *6) + 1
);
//Use regular parentheses instead of curly braces.
//Sometimes don't need parentheses:
const subtr = (a, b) => a - b
subtr(5,3) //2

