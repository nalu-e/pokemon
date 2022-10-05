const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName, 
    pokemon, 
    card; 



function getElement(element) {
  return document.querySelector(element);
}

function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}


function createCard () {
  card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Nome: ${pokemon.name}</h1>
        <h2 class="number">Nº id: ${pokemon.id}</h2>
    </div>`;
  return card;
}


function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
      container.innerHTML = createCard();
  }, 2000);
}


searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
});