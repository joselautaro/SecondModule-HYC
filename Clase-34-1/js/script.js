//Sincronismo vs Asincronismo
/*

for (let i = 0; i < 5; i++){
    console.log(i)
}

console.log('Fin del bucle')

// Ejemplo 2

const suma = (a, b) => {
    return a + b;
}
const resultado = suma(2, 3)
console.log(resultado)

/*
//Asincronismo

console.log("Inicio");

setTimeout(() => {
    console.log("Pasaron 3 segundos desde la impresion de 'Fin'")
}, 5000);

//Milisegundos

//1 segundo === 1000 milisegundos

console.log("Fin");
*/

//Ejemplo 2 de asincronimo

const leerArchivo = (callback) =>{
    setTimeout(() =>{
        const contenido = 'Contenido del archivo'
        callback(contenido)
    }, 3000)
}

console.log("Leyendo archivo...")
leerArchivo(contenido =>{
    console.log("Archivo leido: ", contenido);
})