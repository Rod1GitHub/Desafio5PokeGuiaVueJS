<template>
  <div>
    <img :src="attributesPokemon007.imagen" />
    <h1>Habilidades</h1>
    <section>
      <div
        v-for="(skillArgument007, index007) in attributesPokemon007.skills"
        :key="index007"
      >
        <p>{{ skillArgument007.ability.name }}</p>
      </div>
    </section>
    <h1>Movimientos</h1>
    <section class="container-movements">
      <div
        v-for="(movements, index) in attributesPokemon007.movements"
        :key="index"
      >
        <p>{{ movements.move.name }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PokemonObjectAttributeComponent007",
  props: {
    attributesPokemon007: {},
  },
};
</script>
<style></style>
