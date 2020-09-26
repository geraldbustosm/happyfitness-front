<template>
<div class="container">
	<Header/>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center text-lg-left text-secondary">Selecciona tu sede</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul>
                <li v-for="sede in sedes" :key="sede.id">
                    <router-link :to="{ name: 'Emojis', params: { id: sede.id } }">{{ sede.nombre }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SeleccionSede',
    data: function(){
        return {
            sedes: null,
            msg: null
        }
    },
    mounted: function(){
        axios
            .get('http://localhost:8000/sedes')
            .then(response => (this.sedes = response.data))
   }      
}
</script>