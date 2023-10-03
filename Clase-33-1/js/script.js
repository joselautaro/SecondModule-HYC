//Accedemos al DOM

//Ejemplo N°1

//Cambiamos le texto de un elemento con id "miElemento"

//Obtenemos y modificamos el elemento por id

// document.getElementById('miElemento').textContent = "Nuevo texto"

// Obtenemos y modificamos el elemento via clase

// document.querySelector('.subtitulo').textContent = "Soy un infiltrado"

// let heading = document.querySelector("h4").style.backgroundColor = "red"

//Ejemplo 

//Crear un nuevo parrafo y lo vamos a agregar


//Ejemplo cambio de color segun hover
let boton = document.getElementById("miBoton")

boton.addEventListener("mouseover", function(){
    this.style.color = "red";
})

boton.addEventListener("mouseout", function(){
    this.style.color = "blue";
})


//Ejemplo de cambiar el estilo al cambiar el valor de un campo de entrada numerica

let inputNumero = document.getElementById("inputNumero")

inputNumero.addEventListener("input", function(){
    let valor = parseFloat(this.value)

    if(valor > 50){
        this.style.color = "green"
    }else{
        this.style.color = "red"
    }
})

//_________________________________________________

let campoTexto = document.getElementById("campoTexto")

let contador = document.getElementById("contador")

campoTexto.addEventListener("input", function() {
    let caracteresRestantes = 70 - campoTexto.value.length;
    if(caracteresRestantes < 0){
        campoTexto.value = campoTexto.value.substring(0, 70)
        caracteresRestantes = 0
    }
    contador.textContent = "Caracteres restantes: " + caracteresRestantes
})

//______________________________________________________

let elementoLista = document.querySelectorAll("li")

elementoLista.forEach(function(elemento) {
    elemento.addEventListener("mouseover", function() {
        this.style.fontFamily = "Itálica"
    })
})

elementoLista.forEach(function(elemento) {
    elemento.addEventListener("mouseout", function() {
        this.style.fontFamily = "Verdana"
    })
})

//___________________________________________________________

// let body = document.getElementsByTagName("body")

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowUp"){
        document.body.style.backgroundColor = "#223026"
    }
})


//______________________________________


// Obtenemos los elementos del DOM
var mostrarModalBtn = document.getElementById("mostrarModal");
var modal = document.getElementById("miModal");
var cerrarModalBtn = document.getElementById("cerrarModal");

// Evento para mostrar el modal
mostrarModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Evento para cerrar el modal al hacer clic en la "x"
cerrarModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Evento para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
