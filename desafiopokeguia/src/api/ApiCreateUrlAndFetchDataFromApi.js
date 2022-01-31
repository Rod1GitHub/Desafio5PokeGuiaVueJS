// 1. Construir URL para cada personaje
export const URL_API_1 = "https://pokeapi.co/api/v2/pokemon/";
export const URL_API_2 = (userInputDataStep3) => `${userInputDataStep3}`;

// 2. Conectarse a la data de la API
export const fetchTopLevelDataFromApiAndExecuteFunctionChooseSecondLevelDataFromApi =
  async (userInputDataStep2) => {
    console.log(
      `2.fetchTopLevelDataFromApiAndExecuteFunctionChooseSecondLevelDataFromApi`
    );
    console.log(`userInputDataStep2: ${userInputDataStep2}`);
    console.log(`URL concat without toLowerCase`);
    console.log(`${URL_API_1}${URL_API_2(userInputDataStep2)}`);

    return await fetch(
      `${URL_API_1}${URL_API_2(userInputDataStep2.toLowerCase())}`
    )
      .then((response) => response.json())
      .then((responseJsonStep1) => {
        console.log(`fetch and responseJsonStep1`);
        console.log(responseJsonStep1);
        return chooseSecondLevelDataFromApi(responseJsonStep1);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

// 3. Crear una llave para cada Array de objetos, que se usará en el componente
export const chooseSecondLevelDataFromApi = (responseJsonStep2) => {
  console.log(`3.chooseSecondLevelDataFromApi`);
  console.log(responseJsonStep2);
  console.log(responseJsonStep2.forms);
  console.log(responseJsonStep2.abilities);
  console.log(responseJsonStep2.moves);
  console.log(responseJsonStep2.sprites.front_default);
  return {
    namesKey: responseJsonStep2.forms,
    skillsKey: responseJsonStep2.abilities,
    movementsKey: responseJsonStep2.moves,
    imagesKey: responseJsonStep2.sprites.front_default,
  };
};
