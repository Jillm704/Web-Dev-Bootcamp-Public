// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++) {
    const pokemonNum = document.createElement('div');
    pokemonNum.classList.add('pokemon');
    const numLabel = document.createElement('span');
    numLabel.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    
    pokemonNum.appendChild(newImg);
    pokemonNum.appendChild(numLabel);
    container.appendChild(pokemonNum);
}