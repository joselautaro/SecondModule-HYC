class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
class Carrito{
    constructor(){
        this.productos = []
    }
    agregarProducto(producto){
        this.productos.push(producto)
    }
    calcularTotal(){
        return this.productos.reduce((total, producto) => total + producto.precio, 0 )
    }
}
class Usuario {
    constructor(nombre){
      this.nombre = nombre;
      this.carrito = []  
    }

    crearCarrito(){
        const carrito = new Carrito()
        this.carrito.push(carrito)
        return (carrito)
    }
}
const usuario1 = new Usuario('ana')
const usuario2 = new Usuario('Carlos')

const carritoAna = usuario1.crearCarrito()
const carritoCarlos = usuario2.crearCarrito()

const producto1 = new Producto('Camisa', 20)
const producto2 = new Producto('Pantalon', 20)

carritoAna.agregarProducto(producto2)
carritoAna.agregarProducto(producto2)

console.log(`Total de compra de ${usuario1.nombre}: $${carritoAna.calcularTotal()}`)
console.log(`Total de compra de ${usuario2.nombre}: $${carritoCarlos.calcularTotal()}`)