// Estructuras de control de flujos

// ¿Que nos permite hacer? Mantener y controlar el flujo de datos ingresados por nuestros users


// Validación de edad para ingresar a la discoteca
// let edad = parseInt(prompt("Ingrese su edad"))

// if( edad >= 18 ){
//     console.log("Eres mayor de edad")
// }else{
//     console.log("Eres menor de edad")
// }

// Validación de posibilidad de votar
// let edadPermitida = parseInt(prompt("Que edad tiene usted?"))
// if(edadPermitida >= 16){
//     alert("Usted se encuentra en rango para votar")
// }else{
//     alert("Usted no puede votar")
// }

// Comprobación de números, si es par o impar
// let numero = parseFloat(prompt("Ingrese un número"))
// if(numero %2 === 0){
//     console.log("El número es par")
// }else{
//     console.log("El número es impar")
// }

// Evaluación de contraseña
// let contrasenia = prompt("Ingrese contraseña con letras")
// if(contrasenia === "missecretos"){
//     console.log("Acceso concedido")
// }else{
//     console.log("Contraseña incorrecta")
// }

// Verificación de dia de la semana
// const dia = prompt("Ingrese dia de la semana")
// if( dia === "Sabado" || dia === "Domingo" ){
//     console.log("Hoy es ", dia + " osea fin de semana")
// }else{
//     console.log("Es dia de la semana")
// }

// Control de flujos con multicondicionales

// Clasificación de notas
// let nota = parseFloat(prompt("Ingrese nota"))
// if(nota >= 90){
//     console.log("Tu nota es A")
// }else if(nota >= 80){
//     console.log("Tu nota es B")
// }else if(nota >= 70){
//     console.log("Tu nota es C")
// }else if(nota >= 60 && nota <= 69){
//     console.log("Tu nota es D")
// }else{
//     console.log("Tu nota es F")
// }

// Elección de medio de transporte según distancia y clima
// let distancia = parseFloat(prompt("Ingrese su distancia"))
// let estaLloviendo = true;

// if (distancia <= 5){
//     console.log("Camina o usa bicicleta")
// }else if( distancia <= 10 && !estaLloviendo){
//     console.log("Toma el autobus")
// }else if(distancia <= 20){
//     console.log("Usa el auto")
// }else{
//     console.log("Considera otras opciones de transporte")
// }

// Elección de comida según preferencias y hora del dia
// let esVegetariano = true;
// let hora = parseFloat(prompt("Ingrese hora"))
// if(esVegetariano && hora >= 12 && hora <18){
//     console.log("Opciones vegetarianas para el almuerzo")
// }else if(hora >= 18){
//     console.log("Cena variada para todos los gustos")
// }else{
//     console.log("Menú estandar para el desayuno")
// }

// Calcular el valor de la tarifa segun el dia de la semana
// let diaSemana = prompt("Ingrese dia")
// let tarifaBase = parseFloat(prompt("Ingrese tarifa"));
// if (diaSemana === "sabado" || diaSemana === "domingo"){
//     console.log("Tarifa con descuento: $" + (tarifaBase -5))
// }else{
//     console.log("Tarifa estandar: $" + tarifaBase)
// }

// Hace un algoritmo de eleccion de regalo segun ocasión y presupuesto

// 1) El presupuesto debe ser dinamico entre $1000 y $2000
// 2) La ocasión pueden ser cumpleaños, aniversario, findecurso
// 3) Debe tener un minimo de 3 validaciones con diferentes rangos de presupuestos
// let ocasion = prompt("Ingrese ocasion")
// let presupuesto = parseFloat(prompt("Ingrese su presupuesto"))

// if(ocasion === "cumpleaños" && presupuesto >= 2000){
//     console.log("Comprar un regalo especial")
// }else if(ocasion === "aniversario" && presupuesto < 2000){
//     console.log("Organiza una cenar romántica")
// }else if(ocasion === "findecurso" && presupuesto >= 1000){
//     console.log("Organiza saluda al cine")
// }else{
//     console.log("Nos pedimos una pizza en casa")
// }


