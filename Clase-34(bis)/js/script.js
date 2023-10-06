document.getElementById("cotizadorForm").addEventListener("submit", function(e){
e.preventDefault()


const marca = document.getElementById("marca").value;
const modelo = document.getElementById("modelo").value;
const precio = parseFloat(document.getElementById("precio").value);
const descuento = parseFloat(document.getElementById("descuento").value);

if(isNaN(precio)){
    showModal("Por favor, introduce un precio válido")
}else{
    let precioFinal = precio;

    if(!isNaN(descuento)){
        precioFinal -= descuento;
    }

    setTimeout(() =>{
        const cotizacionInfo = document.getElementById("cotizacionInfo");
        cotizacionInfo.innerHTML = `
                <h3>Cotizando...<h3/>
                
        `;

        showModal()
    }, 500)

    //Sumular una espera asincrónica de 2 segundos

    setTimeout(() =>{
        const cotizacionInfo = document.getElementById("cotizacionInfo");
        cotizacionInfo.innerHTML = `
                <p>Marca: ${marca}</p>
                <p>Modelo: ${modelo}</p>
                <p>Precio Original: $${precio.toFixed(2)}</p>
                <p>Descuento: $${descuento.toFixed(2)}</p>
                <p>Precio final: $${precioFinal.toFixed(2)}</p>
        `;

        showModal()
    }, 3000)
}
})
//Mostrar el modal

const showModal = () =>{
    const modal = document.getElementById("myModal")
    modal.style.display = "block";

    //Cerrar el modal cuando hacemos click en la "x" o en cualquier lugar

    const closeBtn = document.querySelector(".close")

    closeBtn.addEventListener("click", () =>{
        modal.style.display = "none";
        cotizadorForm.reset();
    });

    window.addEventListener("click", (e) =>{
        if (e.target === modal){
            modal.style.display = "none";
            cotizadorForm.reset();
        }
    })
}