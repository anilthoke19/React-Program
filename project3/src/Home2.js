import React, { useEffect } from "react"
import { useState } from "react"


let Home2=()=>
    {
        useEffect(
()=>{
    alert("I am effect method")
}

        )
        

let [info,changinfo]=useState(
{
name:" ",
contact:" ",
address:" "
}
)

let changeName=(e)=>
    {
        changinfo({[e.target.name]:e.target.value})
    }

   

        return (
<>
<input type="text" name="name" value={info.state}  onChange={(e)=>changeName(e)}/><br></br>
<input type="text" name="contact"  value={info.contact} onChange={(e)=>changeName(e)} /><br></br>
<input type="text" name="address" value={info.address} onChange={(e)=>changeName(e)}/><br></br>
<input type="submit" name="Submit" value="SUBMIT"  /><br></br>
<input type="text" value={info.address} />
<h1> {info.address}</h1>



</>
        )


    }
    export default Home2;