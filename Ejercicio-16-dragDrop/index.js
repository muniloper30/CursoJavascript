const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy" // copy por defecto
        // console.log("Drag Over")
    })

    section.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})