const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 12
let offset = 0

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

function loadPokemons(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 
        const newHtml = pokemons.map((pokemon) => 
        `
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
        `).join("")

        pokemonList.innerHTML += newHtml
    }) 
}   

loadPokemons(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemons(offset,limit)
})
