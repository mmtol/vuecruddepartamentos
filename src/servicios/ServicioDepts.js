import axios from "axios";
import Global from "./../Global";

export default class ServicioDepts
{
    getDepts()
    {
        return new Promise(function(resolve)
        {
            var url = Global.apiDepts;
            var endPoint = "api/Departamentos";

            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    createDept(dept)
    {
        return new Promise(function(resolve)
        {
            var url = Global.apiDepts;
            var endPoint = "api/Departamentos";
            axios.post(url+endPoint, dept).then(response =>
            {
                resolve(response);
            })
        })
    }

    getDept(numero)
    {
       return new Promise(function(resolve)
        {
            var url = Global.apiDepts;
            var endPoint = "api/Departamentos/"+numero;
            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    updateDept(dept)
    {
        return new Promise(function(resolve)
        {
            var url = Global.apiDepts;
            var endPoint = "api/Departamentos";
            axios.put(url+endPoint, dept).then(response =>
            {
                resolve(response);
            })
        })
    }
}