console.log('hola desde el js')

let titulo = document.getElementById('titulo')
console.log(titulo)

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM CONTENT LOADED')
    //Modificamos stilos y texto
    let titulo = document.getElementById('titulo')
    console.log(titulo)
    titulo.innerHTML='<u>Buenas tardes</u>, esto es una web con JS'
    titulo.style.color= '#fdafaf'

    //Ocultamos el subtitulo
    let subtitulo = document.getElementById('subtitulo')
    let clasesSubtitulo = subtitulo.classList
    
    console.log('Clases del subtitulo', clasesSubtitulo)
    subtitulo.classList.add('ocultar')
    clasesSubtitulo = subtitulo.classList
    console.log('Clases del subtitulo después de añadir', clasesSubtitulo)

    // Pintar tarjetas en el html
    let tarjetas = document.getElementById('tarjetas')
    
    const divCard = document.createElement('div')
    divCard.classList.add('cardBox')
    divCard.innerHTML = `
    <div class="card">
                <div class="front">
                    <h3>Card One</h3>
                    <p>Hover to flip</p>
                    <strong>&#x21bb;</strong>
                </div>
                <div class="back">
                    <h3>Back Side One</h3>
                    <p>Content in card one</p>
                    <a href="#">Button 1</a>
                </div>
            </div>
    `
    tarjetas.appendChild(divCard)

    const divCard2 = document.createElement('div')
    divCard2.classList.add('cardBox')
    divCard2.innerHTML = `
    <div class="card">
                <div class="front">
                    <h3>Card One</h3>
                    <p>Hover to flip</p>
                    <strong>&#x21bb;</strong>
                </div>
                <div class="back">
                    <h3>Back Side One</h3>
                    <p>Content in card one</p>
                    <a href="#">Button 1</a>
                </div>
            </div>
    `
    tarjetas.appendChild(divCard2)

    const divCard3 = document.createElement('div')
    divCard3.classList.add('cardBox')
    divCard3.innerHTML = `
    <div class="card">
                <div class="front">
                    <h3>Card One</h3>
                    <p>Hover to flip</p>
                    <strong>&#x21bb;</strong>
                </div>
                <div class="back">
                    <h3>Back Side One</h3>
                    <p>Content in card one</p>
                    <a href="#">Button 1</a>
                </div>
            </div>
    `
    tarjetas.appendChild(divCard3)




})

//Funciones
function modoOscuro() {
    console.log('Desde la función modoOscuro')
    let body = document.getElementById('body')
    let clasesBody = body.classList
    /*
    Existe la opción de alternar la clase en función
    de si existe o no en la lista.
    body.classList.toggle('fondo-oscuro')
    Este método no está mal, pero no sirve para
    cambiar el texto del botón XD
    */
    let boton = document.getElementById('boton')
    if(clasesBody.contains('fondo-oscuro')) {
        body.classList.remove('fondo-oscuro')
        boton.innerHTML='Activar modo oscuro'
    } else {
        body.classList.add('fondo-oscuro')
        boton.innerHTML='Activar modo claro'
    }

}

