// Operadores de COMPARACIÓN

// Estos determinan si la comparación de dos operandos, de ahora en más datos, se cumple o no...

// Si se cumple, nos devuelve algo llamado: Operador Buleano Verdadero

// En ingles, Boolean True

// Caso contrario, nos devuelve algo llamado: Operador Buleano Verdadero

// En ingles, Boolean False

// ¿Cuales son los operadores de comparación más utilizados?

// 1) == igual / Devuelve "true" si los datos son iguales

// 2) != no es igual también conocido como "distinto" / Devuelve true si los datos no son iguales

// 3) === estrictamente igual / devuelve true si los datos son iguales en tipo y valor

// 4) !== desigualdad estricta / Devuelve true si los datos son del mismo tipo no son iguales o son de diferente tipo

// 5) > mayor que / Devuelve true si el dato IZQUIERDO es MAYOR que el dato derecho

// 6) >= mayor o igual que / Devuelve true si el dato izquierdo es mayor o igual al derecho

// 7) < menor que / Devuelve true si el dato izquierdo es menor que el dato derecho

// 8) <= menor que / Devuelve true si el dato izquiero es menor o igual al derecho




// Operador == / ===

// let esIgual = 10 == 10;
// let esIgual = 10 == "10";
// let esIgual = 10 === "10";
// console.log(esIgual)

// Operador !=
// let desigualdad = 10 != 10;
// console.log(desigualdad)

// Operador !==
// let desigualdadEstricta = 'abc' !== 'def';
// console.log(desigualdadEstricta)

// Operador >
// let mayorQue = 10 > 10;
// console.log(mayorQue)

// Operador >=
// let mayorIgualQue = 10 >= 10;
// console.log(mayorIgualQue)

// Operador <
// let menorQue = 5 < 8;
// console.log(menorQue)

// Operador <=
// let menorIgualQue = 8 <= 7;
// console.log(menorIgualQue)


// OPERADORES LÓGICOS 

// && / AND también llamados y

// || / OR tambien llamados o

// COMBINACIÓN CON AND
// let numero = 8;
// let esMayorQueCinco = numero > 5;
// let esMenosQueDiez = numero < 10;
// let resultado = esMayorQueCinco && esMenosQueDiez;
// El número es mayor que 5 y menor que 10
// console.log(resultado)

// COMBINACIÓN CON OR
// let dia = "Sábado";
// let esFinDeSemana = dia === "Sábado" || dia === "Domingo";
// Si el dia es Sábado o Domingo, es fin de semana
// console.log(esFinDeSemana)

// VALIDACIÓN DE ACCESO
// let esAdmin = false;
// let tienePermiso = true;
// let accesoPermitido = esAdmin || tienePermiso;
// Si es administrador o tiene permiso, el acceso está permitido
// console.log(accesoPermitido)

// Tarea de 10 minutos

// Crear un algoritmo SIMPLE y verificar mediante prompt si el numero es mayor a 18 puede entrar, resultado final deberia ser true

// let numero = prompt("Ingrese su edad")

// numero = parseInt(numero)

// let puedeEntrar = numero > 18

// console.log("Puede entrar?", puedeEntrar)

// Evaluación de rangos

// let numero = 15;
// let dentroDeRango = (numero > 10 && numero < 20);
// console.log(dentroDeRango)

// Combinación de AND y OR
// let edad = 25;
// let tieneLicencia = true;
// let puedeConducir = (edad >= 18 && tieneLicencia) || (edad >= 16 && !tieneLicencia);
// Si es mayor de 18 y tiene licencia, o si tiene al menos 16 y no tiene licencia, puede conducir
// console.log(puedeConducir)



// VALIDACIÓN DE CONTRASEÑA
// let longitud = 8;
// let caracteresEspeciales = false;
// let contraseniaValida = (longitud >= 6 && caracteresEspeciales) || (longitud >= 8 && !caracteresEspeciales);
// Si la longitud es al menos 6 y tiene caracteres especiales o si la longitud es al menos 8 pero no tiene caracteres especiales, la contraseña es valida
// console.log(contraseniaValida)

// COMPROBACIÓN DE MEMBRESIA
// let membresiaActiva = true;
// let membresiaPremium = false;
// let tieneAccesoPremium = membresiaActiva && membresiaPremium
// Si la membresia está activa y es premium, tiene acceso a premium
// console.log(tieneAccesoPremium)

// Ejercicio dos: Verificacion de envío GRATUITO

// Si el total de compra es mayor que 100 y es miembro, o si el total de compra es mayor que 200 pero no es miembro, tiene envio gratuito, lo que deberia tener un resultado true
// Deberán hacerlo en menos de 5 lineas de código

// let monto = parseFloat(prompt("Ingrese el monto de la compra"))
// let esMiembro = prompt("Es miembro? (true/false)") === "true"
// let envioGratuito = (monto > 100 && esMiembro) && (monto > 200 && !esMiembro)
// console.log("¿Tiene envío gratuito?", envioGratuito)












