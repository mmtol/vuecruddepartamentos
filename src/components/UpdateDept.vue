<template>
    <div>
        <h1>UPDATE</h1>
        <hr/>
        <button class="btn btn-warning"><router-link to="/depts">Volver a Departamentos</router-link></button>
        <hr/>
        <form v-on:submit.prevent="updateDept()">
            <label>NÚMERO</label>
            <input type="number" class="form-control" v-model="dept.numero" disabled/>
            <hr/>
            <label>NOMBRE</label>
            <input type="text" class="form-control" v-model="dept.nombre"/>
            <hr/>
            <label>LOCALIDAD</label>
            <input type="text" class="form-control" v-model="dept.localidad"/>
            <hr/>
            <button class="btn btn-info">Update</button>
        </form>
    </div>
</template>

<script>
    import ServicioDept from './../servicios/ServicioDepts';

    const servicio = new ServicioDept();

    export default 
    {
        name:"UpdateDept",
        data()
        {
            return{
                dept:{}
            }
        },
        methods:
        {
            getDept()
            {
                var numero = this.$route.params.numero;
                servicio.getDept(numero).then(result =>
                {   
                    this.dept = result;
                })
            },
            updateDept()
            {
                servicio.updateDept(this.dept).then(result =>
                {   
                    console.log(result);
                    this.$router.push("/depts");
                })
            }
        },
        mounted()
        {
            this.getDept();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>