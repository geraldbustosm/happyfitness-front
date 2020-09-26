<template>
<div class="container">
	<Header backbutton/>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center text-lg-left text-secondary">Estás a punto de finalizar</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <form action="">
                <button type="submit" class="btn btn-primary btn-lg btn-block">Enviar</button>
            </form>
        </div>
        <div class="w-100 d-lg-none mb-2"></div>
        <div class="col">
            <router-link :to="{ name: 'Razon', params: { sede, calificacion, motivo } }" class="btn btn-warning btn-lg btn-block">Añadir comentario</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Confirmacion',
    data: function(){
        return {
            sede: null,
            calificacion: null,
            motivo: null
        }
    },
    beforeMount: function(){
        this.sede = this.$route.params.sede
        this.calificacion = this.$route.params.calificacion
        this.motivo = this.$route.params.motivo
    }
}
</script>