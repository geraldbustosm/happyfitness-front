<template>
<div class="container">
  <!--  Aca podria pasarle otra prop con el link de la pag anterior -->
	<Header/>
	<div class="row">
      <div class="col-12">
        <h1 class="text-center text-lg-left text-secondary">¿Cómo calificas nuestra experiencia hoy?</h1>
      </div>
    </div>
    <EmojisVote />
  </div>
</template>

<script>
import EmojisVote from "@/components/EmojisVote"

export default {
  name: "Emojis",
  components: {
    EmojisVote
  }
};
</script>