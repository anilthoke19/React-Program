import React,{useEffect, useState} from 'react';

let cssAp={

backgroundColor:"red"
};

 let Head=()=>{

    useEffect(

()=>
    {
        alert("effect applied")
    }

    )
    let [count,setCount]=useState(0);

    let Val=()=>
        {
            setCount(count+1)

        }




    return(
        <>
        <h1>Cont vlue is {count}</h1>
<button value={"Click here"} onClick={Val} style={cssAp}  > Click Here</button>
</>
    );


}

export default Head;