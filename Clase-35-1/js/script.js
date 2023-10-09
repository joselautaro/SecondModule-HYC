//Seleccionamos el id resultado y lo guardamos en una variable

const resultado = document.querySelector("#resultado");

const formulario = document.querySelector("#formulario");

const filtrar = () => {
    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for (const producto of productos) {
        let nombre = producto.nombre.toLowerCase();

        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src=${producto.imagen} alt="https://dummyimage.com/300x200/000/fff" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <h5 class="card-title">Destino: ${producto.destino}</h5>
                    <p class="card-text">Valor: $${producto.valor}</p>
                </div>

                </div>
            `
        }
        if(  resultado.innerHTML === ''  ){
            resultado.innerHTML = `<li>Producto no encontrado</li>`
        }
    }
}

formulario.addEventListener('keyup', filtrar)
filtrar();