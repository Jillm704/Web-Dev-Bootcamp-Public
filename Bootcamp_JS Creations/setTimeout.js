setTimeout(() => {
    console.log("Hello!")
}, 3000)
//Delays printing "Hello" for three seconds.

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
clearInterval(id);
//Prints a random decimal every two seconds unless we enter clearInterval(id) to stop it.