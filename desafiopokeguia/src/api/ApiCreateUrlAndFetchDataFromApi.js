// 1. Construir URL para cada personaje
export const URL_API_1 = "https://pokeapi.co/api/v2/pokemon/";
export const URL_API_2 = (x) => `${x}`;

// 2. Conectarse a la data de la API
export const fetchDataFromApi = async (characterName) => {
  return await fetch(`${URL_API_1}${URL_API_2(characterName.toLowerCase())}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return pokemonResource(responseJson);
    })
    .catch((error) => {
      console.error({ error });
    });
};

// 3. Crear una llave para cada Array de objetos, que se usará en el componente
export const pokemonResource = (bodyResponsePokemon) => {
  return {
    namesKey: bodyResponsePokemon.forms,
    skillsKey: bodyResponsePokemon.abilities,
    movementsKey: bodyResponsePokemon.moves,
    imagesKey: bodyResponsePokemon.sprites.front_default,
  };
};
