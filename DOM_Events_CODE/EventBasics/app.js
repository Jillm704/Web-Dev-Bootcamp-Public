const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You clicked me!")
    console.log("I hope it worked!")
}

function scream() {
    console.log("STOP TOUCHING ME")
    console.log("OUCH!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('You clicked the h1!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert("You clicked the third button!");
})

function twist() {
    console.log("Twist!")
}
function shout() {
    console.log("Shout!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)