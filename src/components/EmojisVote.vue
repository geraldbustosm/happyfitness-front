<template>
<div class="row">
    <div class="col-3">
        <router-link :to="{ name: 'Motivo', params: { sede, calificacion: 1} }"><img class="img-fluid" src="@/assets/img/terrible.gif" alt=""></router-link>
        <h3 class="text-center text-secondary">Muy malo</h3>
    </div>

    <div class="col-3">
        <router-link :to="{ name: 'Motivo', params: { sede, calificacion: 2} }"><img class="img-fluid" src="@/assets/img/deficiente.gif" alt=""></router-link>
        <h3 class="text-center text-secondary">Malo</h3>
    </div>

    <div class="w-100 d-md-none d-lg-none"></div>

    <div class="col-3">
        <router-link :to="{ name: 'Motivo', params: { sede, calificacion: 3} }"><img class="img-fluid" src="@/assets/img/estupendo.gif" alt=""></router-link>
        <h3 class="text-center text-secondary">Bueno</h3>
    </div>

    <div class="col-3">
        <router-link :to="{ name: 'Motivo', params: { sede, calificacion: 4} }"><img class="img-fluid" src="@/assets/img/excelente.gif" alt=""></router-link>
        <h3 class="text-center text-secondary">Muy bueno</h3>
    </div>
</div>
</template>

<script>
export default {
  name: 'EmojisVote',
  data: function(){
      return {
          sede: null
      }
  },
  beforeMount: function(){
    this.sede = this.$route.params.id
  }
}
</script>