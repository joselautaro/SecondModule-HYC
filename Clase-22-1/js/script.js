// Array: es una estructura de datos, que permite almacenar multiples valores en una sola variable
// Cada valor dentro de esta variable se llama elemento y se puede accerder a el mediante un índice
// Los indices en JS comienzan en 0, es decir el primer elemento tiene un indice de 0 y sigue el seguiente que es 1, etc.

// Un variable normal se declara asi:

// let variableNombre = "Chanchito";

// let variableApellido = "Feliz"

// Una variable tipo array

// let array = ["Chanchito", "Feliz"]
// console.log(array)

// Para que se muestre el primer elemento hacemos esto:
// console.log(array[0])
// console.log(array[1])

// Variable tipo array vacio

// let arrayVacio = []

// console.log(arrayVacio)

// Primer método de array

// const array = ["Gonzalo", "Magalí", "Damián"]

// Método push()
// Agregamos elementos al final del array
// array.push("Lorenzo")

// Método pop()
// Eliminamos el útimo elemento del array
// array.pop()

// Método length
// Obtenemos la longitud de un array
// console.log(array.length)

// Modificamos los elementos asignando nuevos valores a travéz de su indice

// array[2] = "Andrea"
// array[0] = 3

// console.log(array)

let numeros = [1, 2, 3, 4, 5, 6]
numeros.pop()
console.log(numeros)

let colores = ["Rojo", "Verde", "Azul"]
colores.shift()
//Eliminamos el indice 0 Todo lo contrario al pop()
console.log(colores)

let frutas = ["Manzana", "Pera", "Duranzo"]
let verduras = ["Brócoli", "Zanahoria", "Limón"]
// Combinamos ambas variables en una
let comida = frutas.concat(verduras)
console.log(comida)

let numerosLetras = ["uno", "dos", "tres", "cuatro"]
// Join: traforma los elementos al valor a un string
let cadena = numerosLetras.join(", ")
console.log(cadena)

let letras = ["a", "b", "c", "d", "e"]
// Reverse: Invierte el orden de los elementos al 100%
letras.reverse()
console.log(letras)

let numerosGrandes = [10, 20, 30, 40, 50]
let subGrupo = numerosGrandes.slice(1, 4)
console.log(subGrupo)

