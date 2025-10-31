import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import CreateDept from './components/CreateDept.vue';

const rutas =
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/depts",
        component:DepartamentosComponent
    },
    {
        path:"/create",
        component:CreateDept
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    }
)

export default router;