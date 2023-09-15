// Cuando queremos hacer un software de cualquier, como devs lo que queremos es sacar principalmente, la mayor cantidad de features, con la menor cantidad de código posible

// En JS, tenemos algo llamado, funciones, estas nos permiten crear bloques de código que pueden tomar argumentos(entradas), estas nos van a permitir realizar tareas, y devolver un resultado que puede ser o no utilizado a lo largo de nuevo programa

// ¿Cuá es la sintaxis de una función?

// Function es la palabra reservada que declara una función
// suma es el nombre de la función
// (a, b) son los parámetros de entrada
// {return a + b} es el cuerpo de la función, que realiza la suma y devuelve el resultado
function suma(a, b){
    return a + b
}

// Para llamar a esta función y obtener un resultado
// console.log(suma(2, 3))


// Scope Local y Global
// Se refiere al ambito donde una variable es accesible

// Scope Local
// Son variables declaradas dentro de una funcion en particular, no se puede acceder a esa variable desde ningun otro punto por fuera

// function miFuncion () {
//     const variableLocal = "Soy local"
//     console.log(variableLocal)
// }
// miFuncion()


// Esto está mal!
// En la consola del browser nos dirá esto: script.js:29 Uncaught ReferenceError: variableLocal is not defined
    // at script.js:29:13
// console.log(variableLocal)

// Scope Global
// Las variables declaradas por fuera de cualquier de funcion son globales y accesibles dsde cualquier otra parte del código

// const variableGlobal = "Soy Global"

// function otraFuncion (){
//     console.log(variableGlobal + "Mas poderosa")
// }

// otraFuncion()

// console.log(variableGlobal)

// Contextos y problemáticas

// const x = 10;

// function imprimeX(){
//     console.log(x) //Esto funciona porque es global
// }

// function otraX(){
//     x = 20
//     console.log(x)
// }

// // Imprime 10
// imprimeX()
// otraX()

// Buenas prácticas y recomendaciones
// Generalmente trabajamos con distintos tipos de variables en un software

// Punto N°1 como buena practica: usar nombres legibles en variables y funciones que describan su próposito y lo que hace que tu código sea más leble

// Punto N°2: Modularización: Divide tu código en pequeñas funciones y bien definidas para facilitar el mantemientos

// Punto N°3: Scope limitado, es decir evitemos la creación de demasiadas variables, utilizar variables locales siempre que sea posible

// Punto N°4: Eviten la contaminación de scope global, en variables globales no modificarlas en ninguna funcion

// Punto N°5: Comentarios, agregarlos descriptivos para explicar partes importantes del código

// Definimos una variable global
const mensajeGlobal = "Hola desde el ámbito global"

// Definimos una funcion que contiene variable local y la muestra en consola, esta variable no puede ser invocada desde afuera
function saludo(){
    const mensajeLocal = "Hola desde la funcion"
    console.log(mensajeLocal)
}
// Mostramos por consola la variable global
console.log(mensajeGlobal)

// Activamos/invocamos la funcion
saludo()

// Porque crear modulos?

// Organizacion: division de código en pequeños fragmentos lógicos
// Reutilización: Permite que nuestro que pueda reutilizar siempre y cuando pueda
// Mantenimiento: Facil mantención y depuración porque se centra en alguna funcionalidad específica
// Colaboración: facilita colaborar entre colegas ya que todos podemos trabajar en modulos diferentes sin afectar el código de los demás


