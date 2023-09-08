// Ejemplo 1
// let i = 0

// const miNumero = 3;

// let resultado = false

// while( i < numeros.length ){
//     if ( numeros[i] === miNumero  ){
    //         resultado = true;
    //         break
    //     }
    //     i++
// }

// console.log(resultado)

// Ejemplo 2
// let i = 0

// let suma = 0

// do{
//     suma += numeros[i]
//     i++
// }while (i < numeros.length)

// const promedio = suma / numeros.length

// console.log("El promedio de los números es: ", promedio)



// const numeros = [1, 2, 3, 4, 5]
// Ejemplo 3
// let i = 0

// const otroNumeros = []

// while(i < numeros.length){
//     otroNumeros.push(numeros[i])
//     otroNumeros.push(numeros[i])
//     i++
// }
// console.log(otroNumeros)

// ______________________________

// Ejemplo 4

// const numeros = [-2, 5, -8, 3, -7, 2, 63, -89, 78, -151]

// let positivos = 0

// let negativos = 0

// for ( let i = 0; i < numeros.length; i++){
//     if ( numeros [i] > 0){
//         positivos++
//     }else{
//         negativos++
//     }
// }

// console.log("Números negativos: ", negativos)
// console.log("Números positivos: ", positivos)

// Ejemplo 5

// const numeros = [4, 7, 10, 13, 15, 19]

// let primerPrimo = null

// for ( let i = 0; i < numeros.length; i++){
//     let esPrimo = true;
//     for ( let j = 2; j < numeros[i]; j++){
//         if (numeros[i] % j ===0){
//             esPrimo = false;
//             break;
//         }
//     }
//     if (esPrimo){
//         primerPrimo = numeros[i]
//         break
//     }
// }

// console.log(primerPrimo)

const numeros = [4, 7, 10, 13, 15, 19];

function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

let primerPrimo = null;

for (let i = 0; i < numeros.length; i++) {
    if (esPrimo(numeros[i])) {
        primerPrimo = numeros[i];
        break;
    }
}

console.log(primerPrimo);


