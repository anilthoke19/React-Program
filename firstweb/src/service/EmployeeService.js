import axios from "axios";

let url="http://localhost:8080/save";
let url2="http://localhost:8080/view";
let durl="http://localhost:8080/delete/{eid}";


class EmployeeServ
{
createEmployee(Employee)
{
    return axios.post(url,Employee)  
}


viewEmployeeData()
{
    return axios.get(url2)
}

deleteEmployeeData(eid)
{
return axios.delete(durl/eid)
}


}
export default new EmployeeServ;