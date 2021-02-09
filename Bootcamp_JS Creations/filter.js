const movies = [
    {
        title: 'Jurrasic Park',
        score: 99,
        year: 1993
    },
    {
        title: 'The Last Jedi',
        score: 100,
        year: 1970
    },
    {
        title: 'Sharknado',
        score: 10,
        year: 2013
    },
    {
        title: 'Teeth',
        score: 5,
        year: 2010
    },
    {
        title: 'Hidden Figures',
        score: 87,
        year: 2016
    }
]

//Get an array with only the high rated movies:
// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })

//more compact:
const goodMovies = movies.filter(m => m.score > 80)

//Bad movies:
const badMovies = movies.filter(m => m.score < 70)

//Recent movies:
const recentMovies = movies.filter(m => m.year > 2000)

//Older movies:
const olderMovies = movies.filter(m => m.year < 2000)

//Using MAP to select the good movie titles:
const goodTitles = goodMovies.map(m => m.title )
//Can combine:
// const combo = movies.filter(m => m.score > 80).map(m => m.title);


//-------Coding Exercise 49: Usernames --------------->
const validUserName = (arr) => arr.filter(n => n.length < 10)