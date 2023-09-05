// Bucle Do While

// El bucle do while es similar al while, pero garantiza que el bloque de código se ejecutara al menos una vez inclusive si la condicion es falsa

// Sintaxis

// do{
//     // Código que se va a ejecutar al menos una vez
// }while(condicion)

// Ejemplo 1
// let numero;

// do{
//     numero = prompt("Introduce un numero valido")
// }while(isNaN(numero)) //Repite mientras el usuario no ingrese un número válido

// Ejemplo 2

// const numeros = [5445, 4548, 15487, 847885]

// let i = 0;

// do{
//     console.log(numeros[i])
//     i++;
// }while(i < numeros.length)

const num1 = Number(prompt("Ingrese un numero"));

const num2 = Number(prompt("Ingreser un numero"));

const operacion = prompt("Ingrese signo aritmético");

let resultado;

switch(operacion){
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 !== 0){
            resultado = num1 / num2;
        } else{
            resultado = 'No se puede divir por 0'
        }
        break;
    default:
        resultado = "Operacion no válida"
}
console.log(resultado)

