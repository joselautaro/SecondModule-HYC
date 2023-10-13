//Método fetch, una de los métodos mas populares para realizar solicitudes tipo HTTP a servidores y mostrar datos


//Se basa en el uso de las promesas para manejar respuestas asincrónicas

//GET: método para obtener datos de un servidor: ejemplo, cuando agregamos un valor en un input, cuando ponen submit o lo envian lo que hacen tecnicamente hablando es hacer un método get y obtener la situación o ubicación del envío

//ejemplo 1

//Realizar una solicitud de obtención (get) y mostramos la respuesta por consola

// fetch('https://pokeapi.co/api/v2/pokemon/post')
//     .then(resp => resp.json()) //Parsear la respuesta a JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error =>{
//         console.log('Error: ', error)
//     })


//Ejemplo N2 imprimimos con texto
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(resp => resp.text()) //Parsear la respuesta a JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error =>{
//         console.log('Error: ', error)
//     })

//Ejemplo N°3: errores de red
// fetch('https://pokeapi.co/api/v2/pokemon/3')
//     .then(resp =>{
//         if ( !resp.ok ){
//             throw new Error('La solicitud falló');
//         }
//         return resp.json();
//     })
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(error =>{
//         console.error("Error de red: ", error)
//     })

//Ejemplo N°4: Consumimos un array de obj





const cardsContainer = document.querySelector("#cards-container");

const numberOfPokemon = 10;

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)
fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}`)

.then(resp => resp.json())
  .then(data => {
    const pokemonList = data.results;


    
    pokemonList.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const card = document.createElement("div");
          card.classList.add('card', 'm-2', 'shadow');

          const cardBody = document.createElement("div");
          cardBody.classList.add('card-body');

          cardBody.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">Id: ${pokemonData.id}</h5>
            <p class="card-text">Nombre: ${pokemonData.name}</p>
            <div>
            <p>Peso: ${pokemonData.weight}kg</p>
            <p>Altura: ${pokemonData.height}cm</p>
            </div>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            </div>
          `;

          card.appendChild(cardBody);
          cardsContainer.appendChild(card);
        })
        .catch(error => {
          console.log("Error:", error);
        });
    });
  })




// .then(resp => resp.json())
// .then(data => {
//         const pokemonList = data.result;
//         pokemonList.forEach(obj => {

//             const card = document.createElement("div");
//             card.classList.add('card', 'm-2', 'shadow');

//             const cardBody = document.createElement("div");
//             cardBody.classList.add('card-body');

//             cardBody.innerHTML = `
//                 <h5 class="card-title">${obj.id}</h5>
//                  <p class="card-title">${obj.name}</p>
//                  <img src=${obj.sprites.front_default} alt={data.sprites.front_default}>
//                 `;

//             card.appendChild(cardBody)
//             cardsContainer.appendChild(card)
//         })
//     })
//     .catch(error => {
//         console.log("error:", error)
//     })