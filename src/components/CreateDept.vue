<template>
    <div>
        <h1>CREATE</h1>
        <form v-on:submit.prevent="createDept">
            <h2>Introduce todos los datos</h2>
            <hr/>
            <label>Número</label>
            <input type="number" v-model="dept.numero"/>
            <hr/>
            <label>Nombre</label>
            <input type="text" v-model="dept.nombre"/>
            <hr/>
            <label>Localidad</label>
            <input type="text" v-model="dept.localidad"/>
            <hr/>
            <button>Create</button>
            <hr/>
        </form>
        <h3>{{mensaje}}</h3>
    </div>
</template>

<script>
    import ServicioDepts from './../servicios/ServicioDepts';

    const servicio = new ServicioDepts();

    export default 
    {
        name:"CreateDept",
        data()
        {
            return{
                dept:
                {
                    numero:0,
                    nombre:"",
                    localidad:""
                },
                mensaje:""
            }
        },
        methods:
        {
            createDept()
            {
                servicio.createDept(this.dept).then(result =>
                {
                    console.log(result);
                    this.mensaje = "Departamento creado"
                    this.$router.push("/depts");
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>