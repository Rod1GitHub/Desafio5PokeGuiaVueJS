<template>
  <div id="app">
    <ul>
      <li>charmander</li>
      <li>charizard</li>
      <li>wartortle</li>
      <li>caterpie</li>
      <li>butterfree</li>
      <li>kakuna</li>
      <li>pidgey</li>
      <li>pidgeot</li>
      <li>raticate</li>
    </ul>
    <section>
      <img src="./assets/pokemon_logo.png" />
    </section>
    <input type="text" v-model="userInputDataStep1" />
    <button
      @click="captureUserInputDataAndExecuteFunctionFetchTopLevelDataFromApi"
    >
      Capturar Input y Fetch Api
    </button>

    <ComponentDisplayCharacter :characterDataFromApi="characterDataFromApi" />
  </div>
</template>

<script>
import ComponentDisplayCharacter from "./components/ComponentDisplayCharacter";
import { fetchTopLevelDataFromApiAndExecuteFunctionChooseSecondLevelDataFromApi } from "./api/ApiCreateUrlAndFetchDataFromApi";

export default {
  name: "App",
  components: {
    ComponentDisplayCharacter,
  },
  data() {
    return {
      userInputDataStep1: "",
      characterDataFromApi: {},
    };
  },
  methods: {
    async captureUserInputDataAndExecuteFunctionFetchTopLevelDataFromApi() {
      console.log(
        `1.captureUserInputDataAndExecuteFunctionFetchTopLevelDataFromApi`
      );
      let { userInputDataStep1 } = this; // captura en la variable el texto ingresado por el usuario
      console.log(`userInputDataStep1: ${userInputDataStep1}`);
      this.characterDataFromApi =
        await fetchTopLevelDataFromApiAndExecuteFunctionChooseSecondLevelDataFromApi(
          userInputDataStep1
        );
    },
  },
  /*   async created() {
    this.characterDataFromApi = await fetchTopLevelDataFromApiAndExecuteFunctionChooseSecondLevelDataFromApi("pikachu");
  }, */
};
</script>

<style></style>
