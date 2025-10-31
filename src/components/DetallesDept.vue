<template>
    <div>
        <h1>DETALLES</h1>
        <ul class="list-group">
            <li class="list-group-item">
                NÚMERO: {{$route.params.numero}}
            </li>
            <li class="list-group-item">
                NOMBRE: {{$route.params.nombre}}
            </li>
            <li class="list-group-item">
                LOCALIDAD: {{$route.params.localidad}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default 
    {
        name:"DetallesDept"
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>