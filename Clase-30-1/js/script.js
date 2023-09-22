// $ Le indicamos a JS que estamos trabajando con JQuery

//() indicamos a que estamos haciendo referencia 

// .ready lee inmediamente el documento al cargar
// $(document).ready(function (){
//     $("#saludoBtn").click(function () {
//         alert("Hola Mundo")
//     })
// })

// $("#desaparecer").click(function(){
//     $(".miParrafo").text("Texto nuevo")
// })

// Ejemplo 2
$("#desaparecer").click(function () {
    $("#miDiv").fadeOut(5000)

})
$("#aparecer").click(function () {

    $("#miDiv").fadeIn(5000)

})
// Aca guardamos en una variable el valor iniciar del contador
let contador = 0;

// Agregamos un manejador de eventos al botón
$("#botonClics").click(function () {
    //  Incrementa el contador en 1 cada vez que se hace clic
    contador++
    // Actualizar el exto del contador en la página
    $("#contador").text(contador)

    if(contador >= 5){
        $("#botonClics").hide()
    }
})

$("#cambiarFondoBtn").click(function(){
    var colorFondo = "#" + Math.floor(Math.random()*167772215).toString(11)

    $("body").css("background-color", colorFondo)
})

// Agregamos el evento Clic al botón agregar tarea
$("#agregarTarea").click(function(){

    // guardamos en una variable el valor que obtenemos al escribir en el input
    let tareaTexto = $("#nuevaTarea").val()

    //Validamos si la variable tareaTexto esta vacia o no
    if( tareaTexto !== "" ){
        // Crear un nuevo elemento de lista con la tarea
        let nuevaTarea = $("<li></li>").text(tareaTexto)
        // Creamos un botón de eliminar tarea y este tiene la funcion de remover todos sus elementos padres (tareas nuevas)
        let botonEliminar = $("<button style='background-color: red';>Eliminar</button>").click(function(){
            $(this).parent().remove()
        })
        // Agregamos a las nuevas tareas, el botón recién creado para eliminar
        nuevaTarea.append(botonEliminar)

        // Limpiar el campo de entrada
        $("#nuevaTarea").val("")

        // Agregamos a la lista de tareas las nuevas tareas que recién se van creando
        $("#listaTareas").append(nuevaTarea)
    }

})


// Capturamos el evento con la tecla con código 13(enter)
$("#nuevaTarea").keypress(function(e){
    if( e.which === 13 ){
        $("#agregarTarea").click()
    }
})
