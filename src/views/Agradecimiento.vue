<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="d-none d-lg-block display-1 text-center text-secondary">¡Gracias por ayudarnos a crecer!</h1>
            <h1 class="d-lg-none text-center text-secondary">¡Gracias por ayudarnos a crecer!</h1>
            <p class="text-center text-secondary">Serás redirigido a la página principal, sino toca <a id="link" href="/sede/1">acá</a></p>
        </div>
    </div>
</div>
</template>


<script>
setTimeout(function(){
    window.location = 'www.google.cl';
}, 3000);
</script>