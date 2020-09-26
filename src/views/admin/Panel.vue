<template>
<div class="container">
	<Header/>
    <div class="row mt-3">
        <div class="col-7 my-auto">
            <div class="align-self-center">
                <p class="text-secondary">Bienvenido/a Gerald, <a href="#">Cerrar sesión</a></p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <!-- Éxito -->
                <div class="alert alert-success">
                    
                </div>

            <!-- Alerta -->
                <div class="alert alert-warning">
                    
                </div>

            <!-- Error -->
                <div class="alert alert-danger">
                </div>
            <h1 class="text-center text-lg-left text-secondary">Panel de administración</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <ul>
                <li><a href="/crear/sede">Crear sede</a></li>
                <li><a href="/encuesta/sedes">Crear/Editar encuesta para sede</a></li>
                <li><a href="/editar/nombre/sedes">Cambiar nombre sede</a></li>
                <li><a href="/eliminar/sede">Eliminar sede</a></li>
            </ul>
        </div>
    </div>
</div>
</template>