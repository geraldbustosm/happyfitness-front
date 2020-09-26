<template>
<div class="container">
	<Header/>
<div class="row">
    <div class="col-12">
        <!-- Errores -->
            <div class="alert alert-danger">
                <ul>
                        <li></li>
                </ul>
            </div>

        <!-- Custom Error -->
            <div class="alert alert-danger">
                <ul>
                    <li></li>
                </ul>
            </div>
        
        <!-- Éxito -->
            <div class="alert alert-success">
               
            </div>
        <h1 class="text-center text-lg-left text-secondary">Escribe los motivos de la encuesta para </h1>
    </div>
</div>

<div class="row">
    <form action="" method="post">
        <input type="hidden" name="sede" value="" />
        <div class="form-row">
            <div class="col">
                <input type="text" name="motivos[]" class="form-control" 
                    value=""
                    placeholder="Motivo (Requerido)">
            </div>
            <div class="col">
                <input type="text" name="motivos[]" class="form-control" 
                    value=""
                    placeholder="Motivo">
            </div>
        
            <div class="col">
                <input type="text" name="motivos[]" class="form-control" 
                    value=""
                    placeholder="Motivo (Requerido)">
            </div>
        
            <div class="col">
                <input type="text" name="motivos[]" class="form-control" 
                    value=""
                    placeholder="Motivo">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Crear / Editar</button>
        </div>
    </form>
</div>
</div>
</template>

<script>
export default {
    name: 'CrearMotivo',
    data: function(){
        return {

        }
    }
}
</script>