const input = document.querySelector('input')
const button = document.querySelector('button')
const pokemonContainer = document.querySelector('.pokemon-container')

const form = document.getElementById('form')

function getPokemon (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => {
        createPokemon(data)
        form.reset()
    })
}

function createPokemon (pokemon) {
    const imgPokemon = document.createElement('img')
    imgPokemon.src = pokemon.sprites.front_default

    const namePokemon = document.createElement('h3')
    namePokemon.textContent = pokemon.name

    const divContainer = document.createElement('div')
    divContainer.appendChild(imgPokemon)
    divContainer.appendChild(namePokemon)

    pokemonContainer.appendChild(divContainer)
}

function clearPokemon () {
    pokemonContainer.innerHTML = ''
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        console.log('Please!!')
    } else {
        getPokemon(input.value.toLowerCase())
        clearPokemon()
    }
})