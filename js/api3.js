// seleccionamos el selector 
const jsonArray = document.querySelector("#abrirJSONArray")
// agregamos el evento
jsonArray = addEventListener("click", mostrarDatos)
// aplicamos la funcion para mostrar los datos
function mostrarDatos(){
    const url = 'data/nombres.json'
    
    fetch(url)
    .then(res => res.json())
    .then(datos => mostrarHTML(datos))
}

// mostramos en html lo aplicado PRIMER EJEMPLO
function mostrarHTML(nombres) {
    console.log(nombres)
    const body = document.querySelector("body")
    // comentamos el div para que no se pise la informacion
    // const div = document.createElement("div")
    let div = ''

    // aplicamos un maps para marcar toda la informacion en el archivo json
    nombres.map(nombre => {
        // desestructuramos dentro del mapa 
        const { name, username, phone, address: {city} } = nombre
        // contenedor con informacion del json
        // agregamos una etiqueta <hr> para separar la informacion
        div += `
        <hr>
        <div class= 'nombre'> Nombre: ${name} </div>
        <div class= 'nombre'> Usuario: ${username} </div>
        <div class= 'nombre'> Direccion: ${city} </div>
        <div class= 'nombre'> Telefono: ${phone} </div>
        `
        body.innerHTML = div
    })
}


// SEGUNDO EJEMPLO
/* 
function mostrarHTML(nombres) {
    nombres.map(nombre => {
        const {name, username, address: {city}} = nombre
        const body = document.querySelector("body")
        const div = document.createElement("div")

        div.innerHTML = `
        <hr>
        <div class= 'nombre'> Nombre: ${name} </div>
        <div class= 'nombre'> Usuario: ${username} </div>
        <div class= 'nombre'> Direccion: ${city} </div>
        <div class= 'nombre'> Telefono: ${phone} </div>
        `
        body.appendChild(div)
    })
} */