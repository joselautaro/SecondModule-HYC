// Arreglo de números

const numeros = [1, 2, 3, 4, 5]

// Creación de un objeto persona

const persona = [
    {
        nombre: "Mateo",
        edad: 19,
        ciudad: "Rosario, Funes"
    },
    {
        // Clave: valor
        nombre: "Martín",
        edad: 31,
        ciudad: "Rosario"
    },
];
// console.log(persona)

// Qe es una matriz?

// Una matriz es un tipo especial de arreglo bidimensional que organiza los elementos en filas y columnas donde cada una de las celdas, tiene un valor

// Como sea crea una matriz o también array multidimensional

// Creación de una matriz 2x2
// const matriz = [
//     [1, 2],
//     [3, 4]
// ]

// console.table(matriz)
// console.table(matriz[0][0])
// console.table(matriz[1][1])

// Recorremos cada una de las filas y las columnas
// for ( let fila = 0; fila < matriz.length; fila++){
//     for ( let columna = 0; columna < matriz[fila].length; columna++ ){
//         console.log(matriz[fila][columna])
//     }
// }

// Alternativas a la creación de una matriz

// const cuadricula = {
//     fila1:{
//         columna1: 1,
//         columna2: 2
//     },
//     fila2:{
//         columna1: 3,
//         columna2: 4
//     }
// };

// console.table(cuadricula)
// console.log(cuadricula.fila1.columna1)

// const personaDos = {
//     nombre: "Ana",
//     edad: 25,
//     ciudad: "Springfield"
// }

// const nombrePersona = personaDos.nombre

// console.log(nombrePersona)

// const estudiante = {
//     nombre: "Lorenzo",
//     edad: 23,
//     notas: [85, 92, 78, 95],
//     grado: "Universidad"
// }

// console.warn(estudiante.notas)

// Creación de una arreglo/array de objetos
const estudiantes = [
    {
        nombre: "Mateo",
        edad: 19,
        ciudad: "Rosario, Funes"
    },
    {
        // Clave: valor
        nombre: "Martín",
        edad: 31,
        ciudad: "Rosario"
    },
    {
        nombre: "Agustín",
        edad: 28,
        ciudad: "La Rioja"
    },
    {
        nombre: "Magalí",
        edad: 25,
        ciudad: "CABA"
    },
];

// Iteración a travez del arreglo de objetos

for ( let i = 0; i < estudiantes.length; i++){
    const estudiante = estudiantes[i]

    // Mostrar cada estudiante en el navegador utilizando document.write
    document.write(`<p>Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Ciudad: ${estudiante.ciudad}</p>`)
}

// console.table(estudiantes)








