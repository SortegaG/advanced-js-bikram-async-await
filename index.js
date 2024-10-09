//DESARROLLA AQUI TUS SOLUCIONES



// Ejercicios Pokémon
// Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo async/await:

// Antes de empezar, lee la documentación de la API para comprender como funcionan los endpoints

// Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.

async function getRandomPokemon() {
    
    let pokemonAleatorio = Math.floor(Math.random() * 20) + 1;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)

        if (!response.ok) {
            throw new error ('Error al leer la API');
        }
            const data = await response.json();
            return data;  
        }
    
        
    catch {
        console.log('Error')
    }

}
// Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName (pokemon){

    try {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (!response.ok) {
        throw new error ('Error al leer la API');
        }
            let data = await response.json();
            let name = data.name;
            let img = data.sprites.front_default;
            return {name, img}
        
    } catch {
        console.log('Error')
    }
    
}

// Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

// <section>
//     <img src="url de imagen" alt="nombre del pokemon">
//     <h1>Nombre del pokemon</h1>
// </section>

async function printImageAndName(pokemon) {

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;    
        
        return `<section>
                <img src=${img} alt="${name}">
                <h1>${name}</h1>
                </section>`;

    } catch {
        console.log('error')
        return `<section>
        <img src="" alt="">
        <h1></h1>
        </section>`;

    }
}

printImageAndName().then((html) => {
    const container = document.getElementById('container')
    container.innerText = html
})
// Ejercicios Batalla entre Pokemon y perritos
// Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'

// Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')

        if (!response.ok) {
            throw new error ('Error al leer la API');
            
        }
            const data = await response.json();
            const img = data.message;
            return img;
        

    } catch {
        console.log('Error')
    }
    
}

// Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
    
    let pokemonAleatorio = Math.floor(Math.random() * 20) + 1;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)

        if (!response.ok) {
            throw new error ('Error al leer la API');
        }
            const data = await response.json();
            return data.sprites.front_default;  
        }
    
        
    catch {
        console.log('Error')
    }
}
// Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)


async function printPugVsPikachu() {

    try {
        const responsePikachu = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

        if (!responsePikachu.ok) {
            throw new error ('Error al leer la API');
        }

        const dataPikachu = await responsePikachu.json()
        const imagenPikachu = dataPikachu.sprites.front_default;

        const pug = await fetch('https://dog.ceo/api/breed/pug/images/random');

        if (!pug.ok) {
            throw new error ('Error al leer la API');
        }
        const datapug = await pug.json();
        const imgPug = datapug.message;

    const batalla = `<div>
                        <img src=${imagenPikachu} style="width:400px">
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTyaadFwQK5GzWIheI35f5L_ihiXFyFJOWYg&s">
                    </div>
                    <div>
                        <img src=${imgPug} style="width:400px">
                    </div>`
    return batalla;

} catch {
    console.log('Error')
}
}

printPugVsPikachu().then(cadena => {
    const div6 = document.getElementById('ejercicio-6');
    div6.innerHTML = cadena;
});


// Ejercicios con Rick and Morty
// Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:

// Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.

async function getRandomCharacter() {

    let personajeAleatorio = Math.floor(Math.random() * 20) + 1;

    try {

        const response = await fetch(`https://rickandmortyapi.com/api/character/${personajeAleatorio}`);

        if (!response.ok) {
            throw new error ('Error al leer la API');
            
        }

        const data = await response.json();
        return data;

    } catch {
        console.log('error')
    }
    
}

getRandomCharacter().then(datos => 
console.log(datos))

// Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno,
// tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})

async function getRandomCharacterInfo() {

    let personajeAleatorio = Math.floor(Math.random() * 20) + 1;
    
    try {

        const response = await fetch (`https://rickandmortyapi.com/api/character/${personajeAleatorio}`);
        
        if (!response.ok) {
            throw new error ('Error al leer la API');
        }

        const data = await response.json();
        const img = data.image;
        const name = data.name;
        const episodes = data.episode;

        const firstEpisode = episodes[0];
        const epResponse = await fetch(episodes[0]);

        if (!epResponse.ok) {
            throw new Error('Error al leer la API de episodios');
        }

        const epData = await epResponse.json(); 
        const dateEpisode = epData.air_date;  
        return {img, name, episodes, firstEpisode, dateEpisode}

    } catch {
        console.log('error')
    }
    

getRandomCharacterInfo()
}
// Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)

getRandomCharacterInfo().then(personaje => {
    const section = document.getElementById('ejercicio-9');
    section.innerHTML = `<div>
                            <img src = ${personaje.img}>
                            <h2>Nombre: ${personaje.name}></h2>
                            <p>Episodios: ${personaje.episodes}</p>
                            <p>Primer episodio: ${personaje.firstEpisode}</p>
                            <p>Fecha: ${personaje.dateEpisode}</p>
                        </div>`
})

document.addEventListener('DOMContentLoaded', () => {
    getRandomCharacterInfo();
} )

// getRandomCharacterInfo().then(personaje => {
//     const section = document.getElementById("ejercicio-9") 
//     section.innerHTML =  `<section>
//               <img src="${personaje.img}" alt="Personaje aleatorio">
//               <h1>Nomrbre = ${personaje.name}</h1>
//               <p>Episodios: ${personaje.episodes}</p>
//               <p>Primer Episodio: ${personaje.firstEpisode}</p>
//               <p>Fecha: ${personaje.dateEpisode}</p>
//             </section> `
//     }) 
//     document.addEventListener("DOMContentLoaded", () => {
//         getRandomCharacterInfo();
//       });