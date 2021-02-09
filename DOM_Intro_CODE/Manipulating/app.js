//const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
//}

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href);
// }

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = "I'm a link!";
// }

for (let link of allLinks) {
    link.style.color = '#3e94e4';
    link.style.textDecorationColor = 'red';
}