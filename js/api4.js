// Cargamos el api del html
const abrirAPI = document.querySelector("#cargarApi")
abrirAPI.addEventListener("click", mostrarDatos)

function mostrarDatos() {
    const url = "http://jsonplaceholder.typicode.com/photos"


    fetch(url)
        .then (res => res.json())
        .then (datos => mostrarHTML(datos))
};

function mostrarHTML(fotos) {
    const body = document.querySelector("body");
    const section = document.createElement("section");
    section.classList.add("cards-component");
    body.appendChild(section)
    fotos.map(foto => {
        const {title, thumbailUrl} = foto
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img sr="${thumbailUrl}">
        <h2>${title}</h2>
        `

        section.appendChild(card)
    })
}