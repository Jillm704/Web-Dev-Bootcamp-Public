// If :
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!");
    console.log(random);
}

if (random >= 0.5) {
    console.log("Your number is greater than 0.5!");
    console.log(random);
}

//Else - if , Else :

// const age = 8;
// if (age >= 55) {
//     console.log("Cost is $10.")
// } 
// else if (age <= 54) {
//     console.log("Price is $20");
// }

const dayOfWeek = "Monday";
if (dayOfWeek === 'monday') {
    console.log("I hate Monday.");
}
else if (dayOfWeek === 'saturday') {
    console.log("Yay, I love Saturday!");
}
else if (dayOfWeek === 'friday') {
    console.log("It's almost the weekend!");
}
else {
    console.log("Meh.")
}

// Nested Conditionals :

/*Password must be 6+ characters;
password cannot include spaces*/

// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Good, you have no spaces.");
//     } else {
//         console.log("Password cannot have a space.");
//     }
// } else {
//     console.log("Password must be 6 or more characters");
// }

//Truthy and Falsy :

// const userInput = prompt("Enter Something");
// if (userInput) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Logical AND :

// const password = prompt("Enter your password");
// if (password.length >=6 && password.indexOf(' ') === -1) {
//     console.log("Valid password.");
// } else {
//     console.log("Incorrect password format");
// }

// Logical OR :

const age = 60;
if (age < 5 || age >= 65) {
    console.log("free");
} else if (age < 10) {
    console.log("$10");
} else if (age < 65) {
    console.log("$20");
}

// Logical NOT:

const firstName = prompt("Enter your name");
if (!firstName) {
    firstName = prompt("Please Try Again.")
}