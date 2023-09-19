// Ecma es un estandard de JS, que es el lenguaje más utilizado a nivel DW

// La versión de Ecmascript6 también conocida como ECMAScript 2015, introdujo nuevas caracteristicas y mejores en JS

// ES6 fue lanzado en 2015, y las versiones siguientes fueron ES7, ES8

// Ejemplo básico de ES5

// console.log("Hola Mundo")

// Tema 2

// Declaración de variables

//var nombre = "Pepito" //Esto es en las viejas versiones

// Desde ES6 en adelante

//let: se utiliza para declarar variables que pueden cambiar su valor

//const: se utiliza en constantes, el valor no puede ser reasignado

// let variableCambiante = 42

// const incambiable = "No se puede cambiar este valor"

// variableCambiante = 52 //Esto es válido

// console.log(variableCambiante)

// incambiable = "Te cambié"

// console.log(incambiable)

// Tema 3

// Funciones comunes vs Funciones Flechas

// function suma(a, b){
//     return a + b
// }

//Funciones Flechas || Arrow Function (ES6+)

// const suma = (a, b) =>{
//     return a + b
// }

// Diferencias

//1 - No tiene la palabra function, tecnicamente conocida como función anónima
//2 - Uso de const
//3 - Tiene una flecha =>
//4 - Tiene un = atras de los parámetros

//Funciones flechas con return implícito

// const resta = (a, b) => a - b

// Diferencias

//1 - No se expresa el return
//2 - No contiene llaves de bloque de ejecución
//3 - También denominada, funcion de una sola linea

// Ventajas

//1 - Legibilidad
//2 - Sintaxis muy clara
//3 - Código simple
//4 - Rápido y comprimido

// Funciones flechas con parámetros implícitos

// const cuadrado = (x, b) => x * b

// cuadrado()

// Ejemplo N°1 

// Calcular el área de un rectángulo

// const areaRectangulo = (a,b) => a * b;

// console.log(areaRectangulo(2,3));
// console.log(areaRectangulo(2,3));

// Ejemplo N°3

// Funcion para filtrar números pares de una lista

// const numeros = [ 1, 2, 3, 4, 5, 6 ]

// const numeros = [-150, 5959, -58, 96]

// const pares = numeros.filter(numero => numero < 0)

// console.log(pares)

// Ejercicios N°4

//Dado una arreglo de nombres, mapear la lista completa y pasar todos los datos a mayúsculas e imprimirlos en consola

// const nombres = [ "Juan", "Magali", "Lorenzo"]

// const nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase())

// console.log(nombresEnMayusculas)

// Tema 4

//String templates

//Los string templates o plantillas de cadena también conocidos como template literaL, lo que nos permiten es crear cadenas de texto de manera mas fácil y legible

// const nombre = "Juan"

// console.log(nombre)

// const segundoNombre = "Eliseo"

// const mensaje = `Hola, ${segundoNombre}`

// console.log(mensaje)

// const producto = "libro"

// const precio = 20

// const detalle = `Producto: ${producto}\nPrecio: $${precio}`

// console.log(detalle)

// Ejemplo 10

// Funcion para ordenar un arreglo de objetos por una propiedad

// const estudiantes = [
//     {nombre: "Juan", edad: 25},
//     {nombre: "María", edad: 56},
//     {nombre: "Esparta", edad: 1105}
// ]

// Ordenar de manera alfabética mediante una función y que me devuelve el valor por consola

// const ordenarPorPrimeraLetra = (estudiantes) =>{
//     return estudiantes.sort((a, b) =>{

//         const primeraLetraA = a.nombre[0].toUpperCase()

//         const primeraLetraB = b.nombre[0].toUpperCase()

//         if( primeraLetraA < primeraLetraB){
//             return -1
//         }
//         if(primeraLetraA > primeraLetraB){
//             return 1
//         }

//         return 0

//     })
// }

// console.log(ordenarPorPrimeraLetra(estudiantes))


// Ejemplo 11
// const textos = [ "Manzanas", "Banana", "Durazno"]

// const incognito = (textos) => textos.map(word => word.length)

// console.log(incognito(textos))

// Ejemplo 12

const numeros = [ 5, 25, 30, 9852, 1050]

const esDe = (numeros) => numeros.find(numero => numero %10 === 0)

console.log(esDe(numeros))