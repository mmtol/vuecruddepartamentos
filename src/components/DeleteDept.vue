<template>
    <div>
        <h1>DELETE</h1>
        <h2>Va a deletear el departamento {{num}}</h2>
        <button class="btn btn-warning" @click="deleteDept">Delete</button>
    </div>
</template>

<script>
    import ServicioDept from './../servicios/ServicioDepts';

    const servicio = new ServicioDept();

    export default 
    {
       name:"DeleteDept",
        data()
        {
            return{
                num:0
            }
        },
        methods:
        {
            deleteDept()
            {
                servicio.deleteDept(this.num).then(result =>
                {   
                    console.log(result);
                    this.$router.push("/depts");
                })
            }
        },
        mounted()
        {
            var numero = this.$route.params.numero;
            this.num = numero;
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>