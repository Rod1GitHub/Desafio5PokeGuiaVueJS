// 1 capturar el input del usuario
// 2 pasar el input a la URL
// 3 traer los datos desde la URL

export const BASE_URL_API = "https://pokeapi.co/api/v2/pokemon/";
export const GET_POKEMON_BY_NAME = (valueNamePokemon) => `${valueNamePokemon}`;

export const fetchDataFromApi = async (valueNamePokemon) => {
  return await fetch(
    `${BASE_URL_API}${GET_POKEMON_BY_NAME(valueNamePokemon.toLowerCase())}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return pokemonResource(responseJson);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export const pokemonResource = (bodyResponsePokemon) => {
  return {
    namesKey: bodyResponsePokemon.forms,
    skillsKey: bodyResponsePokemon.abilities,
    movementsKey: bodyResponsePokemon.moves,
    imagesKey: bodyResponsePokemon.sprites.front_default,
  };
};
