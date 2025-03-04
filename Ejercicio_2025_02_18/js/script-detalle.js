
window.addEventListener('DOMContentLoaded', (event) => {
    // Recuperamos el valor del pokemon que hemos hecho click de la URL
    let parametrosURL = new URLSearchParams(document.location.search)
    console.log('Parametros de la URL', parametrosURL)
    let nombrePokemon = parametrosURL.get("name")
    console.log('Nombre de la URL', nombrePokemon)

    const URL_GET_POKEMONS = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    console.log('URL construida', URL_GET_POKEMONS)

    // Llamamos a la función después de definir la URL
    obtenerDetallePokemon(URL_GET_POKEMONS);
    
})


//Trabajamos con los fetchs de JS
// Método async/await
const obtenerDetallePokemon = async (URL_GET_POKEMONS) => {
    const resultadoAPI = await fetch(URL_GET_POKEMONS) // Esto es una promesa que hacemos a la URL de la API 
    console.log('URL solicitada', URL_GET_POKEMONS)
    console.log('Resultado de la API', resultadoAPI)
    const datosPokemon = await resultadoAPI.json()
    console.log('Datos Pokemon: ', datosPokemon)
/**
 * detallePokemon = {
 * height: number,
 * id: number,
 * name: string,
 * types: Array
 * sprites: Array
 * }
 */



    //Pintamos el pokemon en el html
    pintaPokemon(datosPokemon)
    



}


const pintaPokemon = (datosPokemon) => {
    console.log('Datos pokemon desde la función pintarPolkemon', datosPokemon)
   /**
 * detallePokemon = {
 * height: number,
 * id: number,
 * name: string,
 * types: Array
 * sprites: Array
 * }
 */
    let tarjeta = document.getElementById('poke_detalle')
    

    const divCard = document.createElement('div')
    divCard.classList.add('cardBox')
    //Con el map creamos el tipo
    let tipos = pokemon.types.map((item) => {
        console.log('item: ', item.type.name)
        return item.type.name
        /**
         * types = [
         * {
         * 
         * },
         * { slot,
         * type {
         * name, ---> NOS QUEDAMOS SOLO CON EL NOMBRE
         * url}
         * }
         * ]
         */
        console.log('tipos: ', pintartipos)
        let pintartipos = tipos.join(', ')

    })

    //RellenamosTarjeta
    divCard.innerHTML = `
    <div class="card">
                <div class="front">
                    <h3>${datosPokemon.name}</h3>
                    <img src="${datosPokemon.sprites.other.home.front_default}" style="max-width: 100%; height: auto;">
                    
                </div>
                <div class="back">
                    <p>#: ${datosPokemon.id}</p>
                    <p>Altura: ${datosPokemon.height}</p>
                    <a href="${datosPokemon.url}">Ver info del pokemon</a>
                </div>
            </div>
    `
    tarjeta.appendChild(divCard)


}

obtenerDetallePokemon()