<template>
    <div>
        <h1>DEPARTAMENTOS</h1>
        <img src="./../assets/images/cargando.jpg" v-if="status == false"/>
        <table class="table table-warning">
            <thead>
                <tr>
                    <th>NÚMERO</th>
                    <th>NOMBRE</th>
                    <th>LOCALIDAD</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in depts" :key="dept">
                    <td>{{dept.numero}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServicioDept from './../servicios/ServicioDepts';

    const servicio = new ServicioDept();

    export default 
    {
        name:"DepartamentosComponent",
        data()
        {
            return{
                depts:[],
                status:false
            }
        },
        methods:
        {
            getDepts()
            {
                servicio.getDepts().then(result =>
                {   
                    this.depts = result;
                    this.status = true;
                })
            }
        },
        mounted()
        {
            this.getDepts();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>