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
}