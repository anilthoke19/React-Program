import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeService from '../service/EmployeeService';
import {useParams } from "react-router-dom";



let ViewEmployee =()=>
{

let [empData,emapDataChange]=useState([]);

//  const {Eid}=useParams();
//  const {Eid}=URLSearchParams()
// const {Eid} = useParams();


useEffect(() => {

    EmployeeService.viewEmployeeData() 
    .then(employ =>emapDataChange(employ.data))
    .catch(error => console.error('Error fetching users:', error));
}, []);

let delE=(Eid)=>{
EmployeeService.deleteEmployeeData(Eid).then()
{
// EmployeeService.viewEmployeeData()

}
}


    return(
        <>
<table class="table">
  <thead>
  <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">contact</th>
      <th scope="col">Salary</th>
      <th scope="col">UPDATE</th>
      <th scope="col" >DELETE</th>


      


    </tr>
  </thead>
  <tbody>
      {empData.map(user=> (
      
          <tr>
          <th >{user.id} </th>
          <th >{user.name} </th>
          <th >{user.address} </th>
          <th >{user.email} </th>
          <th >{user.salary} </th>
          <th >DELETE</th>






        
        </tr> 
       
        ))}
    
  </tbody>
</table>
        
        
        </>
    );
}
export default ViewEmployee;