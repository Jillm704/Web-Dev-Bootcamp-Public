for (let i = 1; i <= 10; i++) {
    console.log(i);
};

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
};

for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

//--------------------------While Loops:
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// const secret = "Dragon";
// let guess = prompt("Enter the secret code.");
// while (guess !== secret) {
//     guess = prompt("Enter the secret code.")
// };
// console.log("Congrats, you guessed it!");

//-------------------Break Keyword:
// let input = prompt("Hi! I mimick whatever you say.");
// while (true) {
//     input = prompt(input);
//     if (input === "Stop copying me!") {
//         break;
//     }
// }
// console.log("Okay, I'll stop.");

//For..Of Loops---------------------------->

const subreddits = ['cringe', 'books', 'cats', 'funny', 'pics', 'sports'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(sub);
}
//Whatever you set as the variable will call on the elements of the array. Sub, pass, etc.
const test = ['one', 'two', 'three', 'four'];
for (let pass of test) {
    console.log(pass);
}
//Can use for strings too:
for (let char of "hello world") {
    console.log(char);
}

// For.. In Loops ------------------------>

const testScores = {
    Lily: 80,
    James: 89,
    Jess: 85,
    Emily: 95,
    Justin: 93,
    Adam: 82,
    Nina: 90
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

//Using Object.values or Object.keys:
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);