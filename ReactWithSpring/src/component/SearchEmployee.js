import React, { useState } from "react";

let SearchEmployee=()=>
{

let [varName,methodNam]=useState({
name:" ",
contact:" "

}
);

let univerHandler=(e)=>
{

methodNam({[e.target.value]:e.target.value})
}

    return(
<>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search Employee" name="name" value={varName.name} onChange={(e)=>univerHandler(e)} placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

</>

    );
}

export default SearchEmployee;