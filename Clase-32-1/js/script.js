// Ejemplo 1 Sobre carga con argumentos opcionales

const suma = (a, b) =>{
        if( b === undefined){
            return a;
        }else{
            return a + b
        }
}

console.log(suma(2))
console.log(suma(2, 3))


// Ejemplo 2: Sobre carga utilizando typeof

const mensaje = (texto) =>{
    if ( typeof texto === 'string' ){
        return `Texto: ${texto}`;
    }else if( typeof texto === 'number' ){
        return `Número: ${texto}`
    }
}

console.log(mensaje('Hola'))

console.log(mensaje(42))

//Ejemplo 3: Sobre carga con parámetros opcionales

const saludar = (nombre, saludo) => {
    if(!saludo){
        saludo = 'Hola'
    }
    return `${saludo}, ${nombre}`
}

console.log(saludar('Ana'))
console.log(saludar('Carlos', 'Hola!'))

//Ejemplo 4: Sobrecarga de valores por defecto

const multiplicar = (a, b = 2) => {
    return a * b
}
console.log(multiplicar(3))
console.log(multiplicar(3, 4))

//Ejemplo 5: Sobre carga utilizando objetos como parámetros

const persona = (info) => {

    const {nombre, edad} = info

    return `Nombre: ${nombre}, Edad: ${edad}`
}

console.log(persona({nombre: 'Juan', edad: '30'}))

// Relaciones entre clases

//Ejemplo 1


class Estudiante {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Escuela{
    constructor(){
        this.estudiantes = []
    }

    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante)
    }
}

const estudiante1 = new Estudiante('Ana')
const estudiante2 = new Estudiante('Carlos')
const escuela = new Escuela()

escuela.agregarEstudiante(estudiante1)
escuela.agregarEstudiante(estudiante2)

console.log(escuela.estudiantes)

//Ejemplo 2

class Motor{
    encender(){
        console.log('Motor encendido')
    }
}

class Coche{
    constructor(){
        this.motor = new Motor()
    }

    arrancar(){
        console.log('Coche arrancado')
        this.motor.encender()
    }
}

const miCoche = new Coche()
miCoche.arrancar()

//Ejemplo 3 Agregación simple

class Libro{
    constructor(titulo){
        this.titulo = titulo;
    }
}

class Biblioteca{
    constructor(){
        this.libros = []
    }

    agregarLibro(libro){
        this.libros.push(libro)
    }
}

const libro1 = new Libro('El principito')
const libro2 = new Libro('Don quijote')
const biblioteca = new Biblioteca()

biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)

console.log(biblioteca.libros)

//Ejemplo 4: Herencia simple

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacerSonido(){
        console.log("Hace un sonido")
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log('Ladra')
    }
}

const miPerro = new Perro('Fido')
miPerro.hacerSonido()






