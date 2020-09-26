<template>
<div class="container">
	<Header backbutton/>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center text-lg-left text-secondary">Dinos porqué</h1>
        </div>
    </div>
    <ButtonMotive></ButtonMotive>
</div>
</template>

<script>
import ButtonMotive from '@/components/ButtonMotive'

  export default {
    name: 'Motivo',
    components: {
        ButtonMotive
    }
  }
</script>