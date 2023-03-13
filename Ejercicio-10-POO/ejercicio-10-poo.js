class Estudiante {
    constructor(nombre){
        this.nombre = nombre
        this.asignaturas = ["Javascript, HTML y CSS"]
    }
    obtenDatos(){
        console.log(`Hola, mi nombre es ${this.nombre} y estoy estudiando ${this.asignaturas}`)
    }
}

const nuevoEstudiante = new Estudiante("Víctor")
console.log(nuevoEstudiante.obtenDatos())