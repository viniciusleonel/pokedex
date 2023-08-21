
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type} pokebola-img">
                    
            <span class="pokemon-number">#${completeNumber(pokemon.number)}${pokemon.number}</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-details">
                <ol class="pokemon-types">
                    ${pokemon.types.map((type) => `<li class="pokemon-type ${type}">${type}</li>`).join("")}
                </ol>
                
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                
            </div>

        </li>       
    `
}

function completeNumber(num){
    if (num < 10) {
        return "00"
    }
    else if (num < 100){
        return "0"
    }
    else {
        return ''
    }
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => { 
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
})    
