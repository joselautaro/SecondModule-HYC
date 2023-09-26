// POO = Programación Orientada a Objetos

// Se basa en la idea de llevar objetos de la vida real a un lenguaje de programacion, en este Javascript

// El POO consta de dos características claves:

// Atributos: Son propiedades o variables que pertencen a un objeto

//Estos almacenan datos que describen al objeto en si

//Estos atributos puede ser numeros, cadenas, booleanos, objetos

//Metodos:

// Acciones que están asociadas al objetos

// Los metodos puede modificar los atributos de un objetos



// Primer objeto: AUTO


//Propiedad == Atributo

//Propiedad 1: color

//Propiedad 2: modelo

//Propiedad 3: marca

//Propiedad 4: patente

//Métodos == Acciones

// Método 1: Encender

// Método 2: Apagarse

// Método 3: Retroceder

// Método 4: Autoestacionarse

// const coche = {
//     marca: "Toyota",
//     modelo: 2023,
//     encender: function(){
//         console.log(`El ${this.marca} ${this.modelo} arrancó`)
//     }
// }

// coche.encender()

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
//     }
// }

// //Creamos una instancia de el objeto constructor Persona
// const persona1 = new Persona('Juan', 30)
// const persona2 = new Persona('Alejo', 15)
// persona1.saludar()
// persona2.saludar()




// class Animal{
//     constructor(nombre){
//         this.nombre = nombre
//     }
//     hacerSonido(){
//         console.log("hace un sonida")
//     }
// }

// class Perro extends Animal{
//     hacerSonido(){
//         console.log(`El perro ${this.nombre} ladra `)
//     }
// }

// const miPerro = new Perro("Fatiga")
// miPerro.hacerSonido()

//Clase constructora persona
class Persona {
    constructor(nombre, edad, comer){
        this.nombre = nombre;
        this.edad = edad;
        this.comer = comer;
    }
}

//Funcion para agregar una nueva persona

// const agregar = () =>{
//     const nombre = prompt('Ingrese el nombre de la persona')

//     const edad = parseInt(prompt("Ingrese la edad de la persona"))

//     const comer = prompt("Quiere comer?")

//     const persona = new Persona(nombre, edad, comer)

//     //Agregar la persona a la lista y mostrarla en la página

//     const $lista = $('#listaPersonas')

//     $lista.append(`<li>${persona.nombre}, ${persona.edad}, ${persona.comer}</li>`)

// }
// //Asociar la función al botón agregar persona 
// $('#agregarPersona').click(agregar)


const agregar = () =>{
    const nombre = $("#nombreInput").val()

    const edad = parseInt($("#edadInput").val())

    const persona = new Persona(nombre, edad)

    //Agregar la persona a la lista y mostrarla en la web

    const $lista = $("#listaPersonas")

    $lista.append(`<li>${persona.nombre}, ${persona.edad}</li>`)

    $("#nombreInput").val('')
    $("#edadInput").val('')
}
// Agregamos evento al botón
$('#agregarPersona').click(agregar)

// Agregamos evento de escucha sobre el enter
$("#nombreInput, #edadInput").keypress(function(e){
    if(e.which === 13){
        agregar()
    }
})



