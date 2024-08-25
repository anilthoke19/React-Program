import { useState } from "react";

let Login=()=>
    {

        let[name,changeData]=useState({
            
name:'',
contact:'',
address:''
            
     } )


let changeName=(e)=>
    {
        changeData({name:e.target.value});

    }

 



        return(

<>

<center>
<input type="text" placeholder="Enter name" value={name.value} onChange={(e)=>changeName} /><br></br><br></br>
<input type="text" placeholder="Enter contact" value='' /><br></br><br></br>
<input type="text" placeholder="Enter Address" value='' /><br></br><br></br>

</center>






</>


        )


    }

    export default Login;