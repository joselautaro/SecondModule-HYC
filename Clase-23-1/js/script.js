// El switch es una estructura de control de flujo en programación que se utiliza para tomar decisiones basadas en el valor de una expresion o variable. En otras palabras el switch nos permite hacer que el software se ejecute en diferentes bloque de código segun el valor de una variable

// Cual es el uso principal del switch? Es simplicar el código cuando se tienen multiples condiciones que deben evaluarse. En lugar de usar una serie de declaraciones, 'if...else..if...else?, podemos usar el switch para organizar y simplicar el bloque

// Características claves y ventajas del switch:

// 1. Evaluación única: La expresión o variable se evalua una sola vez en un switch, que es muchos que multiples if...else..if...else

// 2. Casos multiples: Puede agrupar multples casos que deben tener la misma lógica o acción en un solo bloque de código

// 3. Limpieza del código: Hace que el código sea LEGIBLE y facil de mantener cuando tenés muchas condiciones que deben mantenerse

// 4. Uso del default: Se puede proporcionar un caso del "default" que va a ejecutar si ninguno de los bloques coincide con el valor de la expresion, lo que proporciona una forma de manejar algo inesperado

// switch(expresion){
//     case valor1:
//         // Código a ejecutar si la expresion === valor1
//         break;
//     case valor2:
//         // Código a ejecutar si la expresion === valor2
//         break;
//     default:
//         // Código a ejecutar si ninguno de los casos coincide
// }


// _____________________________________________________________________________________

// Ejemplo N°1

// let dia = parseInt(prompt("Ingrese numero"));

// switch(dia){
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Martes")
//         break;
//     case 3:
//         console.log("Miercoles")
//         break;
//     default:
//         console.log("Dia no válido");
// }

// let dia = Number(prompt("Ingrese número"))

// switch (dia) {
//     default:
//         console.log("Dia no válido")
//         break
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Martes")
//         break
// }

// let dia = Number(prompt("Ingrese dia"))
// let mensaje

// switch(dia){
//     case 1:
//         mensaje = "Lunes";
//         break
//     case 2:
//         mensaje = "Martes";
//         break
//     case 3:
//         mensaje = "Miercoles";
//         break
//     default:
//         mensaje = "Dia no valido";
// }
// console.log(mensaje)

// let numero = Number(prompt("Ingrese dia"))

// switch(numero){
//     case 1:
//     case 2:
//     case 3:
//         console.log("Es un numero bajo")
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Es un numero medio")
//         break;
//     default:
//         console.log("Es un numero alto")
// }

// let puntaje = Number(prompt("Ingrese un numero"))

// switch(true){
//     case puntaje >= 90:
//         console.log("A")
//         break;
//     case puntaje >= 80:
//         console.log("B")
//         break;
//     case puntaje >= 70:
//         console.log("C")
//         break;
//     default:
//         console.log("F")
// }