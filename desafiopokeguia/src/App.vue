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

    <img src="./assets/pokemon_logo.png" />
    <input type="text" v-model="userInputData" />
    <button @click="captureUserInputDataAndExecuteFunctionFetchDataFromApi">
      Capturar Input y Fetch Api
    </button>

    <ComponentDisplayCharacter
      :characterAttributesDataFromApi="characterAttributesDataFromApi"
    />
  </div>
</template>

<script>
import ComponentDisplayCharacter from "./components/ComponentDisplayCharacter";
import { fetchDataFromApi } from "./api/ApiCreateUrlAndFetchDataFromApi";
export default {
  name: "App",
  components: {
    ComponentDisplayCharacter,
  },
  data() {
    return {
      userInputData: "",
      characterAttributesDataFromApi: {},
    };
  },
  methods: {
    async captureUserInputDataAndExecuteFunctionFetchDataFromApi() {
      let { userInputData } = this; // captura en la variable el texto ingresado por el usuario
      this.characterAttributesDataFromApi = await fetchDataFromApi(
        userInputData
      );
    },
  },
  async created() {
    this.characterAttributesDataFromApi = await fetchDataFromApi("pikachu");
  },
};
</script>

<style></style>
