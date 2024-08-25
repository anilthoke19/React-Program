import React from "react";
import { useState } from "react";

let Home=()=>{
    const [color,setColor] = useState({
name:" ",
contact:" ",
address:" "
 } );


{
  
  let changeName=(e)=>{
setColor({name:e.target.value});
  }


return (
<>
<input type="text" value={color.name} onChange={(e)=>changeName(e)} />
</>
);
    }
}
export default Home;