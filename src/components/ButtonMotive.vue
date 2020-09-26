<template>
<div class="row">
    <div class="btn-motive col-6" v-for="motivo in motivos" v-bind:key="motivo.id">
        <router-link :to="{ name: 'Confirmacion', params: { sede, calificacion, motivo: motivo.correlativo } }" class="btn-motive btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">
            {{motivo.nombre}}
        </router-link>
    </div>
</div>
</template>

<style scoped>
    .btn-motive:nth-child(even){
        margin-bottom: 1rem;
    }
</style>

<script>
import axios from 'axios'

export default {
    data: function(){
        return {   
            motivos: null,         
            sede: null,
            calificacion: null
        }
    },
    beforeMount: function(){
        this.sede = this.$route.params.sede
        this.calificacion = this.$route.params.calificacion
    },
    mounted: function(){
        axios
            .get('http://localhost:8000/sede/' + this.sede)
            .then(response => (this.motivos = response.data.motivos))
    }
}
</script>