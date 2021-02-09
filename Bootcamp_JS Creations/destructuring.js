const scores = [111, 222, 3343, 453, 4566, 54324, 564];

const highScore = scores[0];

//Destructuring:
//Array:
const [first, second, ...everyoneElse] = scores;

const raceResults = ['Myah Brown', 'Nisha Mikeh', 'Cory Brooks'];
const [gold, silver, bronze] = raceResults;
gold; //"Myah Brown"
silver; //"Nisha Mikeh"
bronze; //"Cory Brooks"

//Object:
const user = {
    email: 'mike@gmail.com',
    password: 'pass123',
    firstName: 'Mike',
    lastName: 'Wilson',
    born: 1972,
    city: 'New Orleans'
}
const { firstName, lastName, born, city } = user;
firstName; //"Mike"

//Params:
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
fullName(user); //Mike Wilson.