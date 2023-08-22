const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 8
let offset = 0

function completeNumber(num){
    if (num < 10) {
        num = "00" + num
        return num
    }
    else if (num < 100){
        num = "0" + num
        return num
    }
    else {
        return num
    }
}

function loadPokemons(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => { 
        const newHtml = pokemons.map((pokemon) => 
        `
            <li class="pokemon ${pokemon.type} pokebola-img">
                        
                <span class="pokemon-number">#${completeNumber(pokemon.idNumber)}</span>
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
    const qtdRecordsNextPage = offset + limit
    if (qtdRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    } else {
        loadPokemons(offset,limit)
    }
})
