
function convertPokemonToTypesLi (pokemonTypes){
    return pokemonTypes.map((typesSlot) => `<li class="pokemon-type">${typesSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon pokebola-img">
                    
            <span class="pokemon-number">#${pokemon.order}</span>
            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-details">
                <ol class="pokemon-types">
                    ${convertPokemonToTypesLi(pokemon.types).join("")}
                </ol>
                
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                
            </div>

        </li>       
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => { 
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
})    
