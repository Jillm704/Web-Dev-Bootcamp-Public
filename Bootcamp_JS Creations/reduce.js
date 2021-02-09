const nums = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

const score = [9.99, 1.50, 19.99, 49.99, 30.99];
//Without reduce:
let total = 0;
for (let top of score) {
    total += top;
}
console.log(total);

//Using reduce:
const totals = score.reduce((total, element) => {
    return total + element;
})

//Using Implicit return:
const implicit = score.reduce((total, element) => total + element);

//Find minimum score:
const minScore = score.reduce((min, score) => {
    if(score < min) {
        return score;
    }
    return min;
})