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

    <img class="poke_logo" src="./assets/pokemon_logo.png" alt="pokemon logo" />
    <section>
      <input type="text" v-model="nameInputbyUserPokemon007" />
      <button
        type="submit"
        @click.prevent="passInputNameToGetDataFromApiMethod007"
      >
        Asignar Input a URL para llamar API
      </button>
    </section>
    <PokemonObjectAttributeComponent007
      :attributesPokemon007="attributesPokemon007"
    />
  </div>
</template>

<script>
import PokemonObjectAttributeComponent007 from "@/components/PokemonObjectAttributeComponent";
import { getDataFromApiPokemon007 } from "./api/ApiUrlFetchPokemon007";
export default {
  name: "App",
  components: {
    PokemonObjectAttributeComponent007,
  },
  data() {
    return {
      nameInputbyUserPokemon007: "",
      attributesPokemon007: {},
    };
  },
  methods: {
    async passInputNameToGetDataFromApiMethod007() {
      let { nameInputbyUserPokemon007 } = this; // captura en la variable el texto ingresado por el usuario
      this.attributesPokemon007 = await getDataFromApiPokemon007(
        nameInputbyUserPokemon007
      );
      console.log(nameInputbyUserPokemon007);
    },
  },
  async created() {
    this.attributesPokemon007 = await getDataFromApiPokemon007("pikachu");
  },
};
</script>

<style></style>
