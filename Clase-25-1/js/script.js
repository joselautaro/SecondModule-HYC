// // Ejemplo 1 del dia de hoy

// // Tenemos un array que contiene 5 datos
// const numeros = [36598, 98745, 31, 289, 15668]

// // Declaramos una variable que le asignamos el valor de un vector que contiene un dato
// let maximo = numeros[0]

// // Tenemos un for que tiene una variable inicializadora que inicia en 1, la condición de corte dice que el for va cortar cuando i sea menor que la cantidad total de datos que contiene el vector numeros; i se incrementa una 
// for (let i = 1; i < numeros.length; i++){

//     // Controla el valor del vector numeros que pertenece al indice i, con el valor del máximo(valor del dato)
//     if(numeros[i] > maximo){
//         maximo = numeros[i]
//     }
//     // Compara todos los valores del arreglo y guarda el máximo

// }
// console.log("El número más grande del array es ", maximo)



// Ejemplo 2

// Declaramos un arrelo con 4 elementos
// const numeros = [2, 3, 4, 5];

// // Declaramos una variable con un entero
// let producto = 1;

// // Iniciamos un bucle for que inicia una variable i en 0; mientras que i sea menor a la longitud de numeros; i va aumentando de 1 en 1
// for ( let i = 0; i < numeros.length; i++){

//     // La variable productos es igual a la multiplicación entre su valor y el valor del arreglo en la posición i
//     producto *= numeros[i]

// }

// console.log("El ", producto)

// Ejemplo 3

// Declaramos una constante con tremendo string
// const texto = "Hola, como estás? Supercalifrastilisticoespidalidoso"

// // Declaramos una variable que tiene un entero 0
// let comienzo = 0;

// // Declaramos un bucle for que tenga una variable inicializadora en 0; mientras i sea menor a la longitud completa de texto; y  la iteración cada una vuelta
// for ( let i = 0; i < texto.length; i++ ){

//     // Declaramos una const y le asignamos la const texto inicializada en i y parseamos todas las letras minúsculas
//     const caracter = texto[i].toLowerCase();

//     // Controlamos si la variable caracter tiene estrictramente alguna de estas letras
//     if ( caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter ==="u"){
//         // Iteramos la variable comienzo vuelta por vuelta
//         comienzo++
//     }

// }

// console.log("Número de vocales: ", comienzo)

// Ejemplo 4

// for ( let i = 10; i >= 0; i-- ){
//     console.log(i)
// }



