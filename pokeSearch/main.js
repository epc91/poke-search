const input = document.querySelector('input')
const buttonSearch = document.querySelector('.btn-search')
const buttonPrevious = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
const pokemonContainer = document.querySelector('.pokemon-container')

const form = document.getElementById('form')

let pokemonId = null

function getPokemonByName (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => {
        createPokemon(data)
        pokemonId = data.id
        form.reset()
    })
}

function getPokemonById (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => {
        createPokemon(data)
    })   
}

function createPokemon (pokemon) {
    const infoPokemon = document.createElement('h3')
    infoPokemon.textContent = '#' + pokemon.id + ' ' + pokemon.name.toUpperCase()

    const imgPokemon = document.createElement('img')
    imgPokemon.src = pokemon.sprites.front_default

    const divContainer = document.createElement('div')
    divContainer.appendChild(infoPokemon)
    divContainer.appendChild(imgPokemon)

    pokemonContainer.appendChild(divContainer)
}

function clearPokemon () {
    pokemonContainer.innerHTML = ''
}

buttonSearch.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value == '') {
        alert('Choose a Pokemon!')
    } else {
        getPokemonByName(input.value.toLowerCase())
        clearPokemon()
    }
})

buttonPrevious.addEventListener('click', (e) => {
    e.preventDefault()
    if (pokemonId == null) {
        alert('Choose a Pokemon!')
    } else {
        clearPokemon()
        pokemonId--
        getPokemonById(pokemonId)
    }
})

buttonNext.addEventListener('click', (e) => {
    e.preventDefault()
    if (pokemonId == null) {
        alert('Choose a Pokemon!')
    } else {
        clearPokemon()
        pokemonId++
        getPokemonById(pokemonId)
    }
})