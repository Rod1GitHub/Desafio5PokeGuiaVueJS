<template>
  <div>
    <section>
      <h1>Personaje</h1>
      <img v-bind:src="characterAttributesDataFromApi.imagesKey" />

      <div
        v-for="(pokename, index) in characterAttributesDataFromApi.namesKey"
        v-bind:key="index"
      >
        <p>{{ pokename.name }}</p>
      </div>
    </section>

    <section>
      <h1>Habilidades</h1>
      <div
        v-for="(skill, index) in characterAttributesDataFromApi.skillsKey"
        v-bind:key="index"
      >
        <p>{{ skill.ability.name }}</p>
      </div>
    </section>

    <section>
      <h1>Movimientos</h1>
      <div
        v-for="(movement, index) in characterAttributesDataFromApi.movementsKey"
        v-bind:key="index"
      >
        <p>{{ movement.move.name }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PokemonAttributes",
  props: {
    characterAttributesDataFromApi: {},
  },
};
</script>
<style></style>
