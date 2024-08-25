import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeService from "../service/EmployeeService";



  let AddEmployee=()=>
{
 
  
  let [reg,regmetho]=useState(
    {

      name:"",
      email:"",
      address:"",
      salary:""
    
    }
  );
  let [msg,setMsg]=useState("");


  let genHandler=(e)=>{
    regmetho(prevState=>{
       return {...prevState,[e.target.name]:e.target.value}
     });
    }



let saveEmpObje=(e)=>
{
  

  let JsonObjectt={
    name:reg.name,
    email:reg.email,
    address:reg.address,
    salary:reg.salary


  }




  EmployeeService.createEmployee(JsonObjectt).then((res)=>{
      setMsg("Employee Added succesfully")
    }
    ).catch((res)=>
    {
      setMsg("Employee not added");
    }
    );

}



return (
< >
<h1 style={{marginLeft:"40px"}}>Employee Register </h1>

<form  className="one" style={{marginLeft:"40px"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" name="name" class="form-control" id="exampleInputEmail1" value={reg.name} aria-describedby="emailHelp" placeholder="Name" onChange={(e)=>genHandler(e)} />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" name="email" class="form-control" id="exampleInputPassword1" value={reg.email} placeholder="Email" onChange={(e)=>genHandler(e)} />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" name="address" class="form-control" id="exampleInputPassword1" value={reg.address} placeholder="address" onChange={(e)=>genHandler(e)} />
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Salary</label>
    <input type="text" name="salary" class="form-control" id="exampleInputPassword1" value={reg.salary} placeholder="salary" onChange={(e)=>genHandler(e)} />
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={(e)=>saveEmpObje(e)} >Submit</button>
  <br></br>

     
</form>
<p>{msg}</p> 



</>

);

}

export default AddEmployee;