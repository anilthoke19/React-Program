import React from "react";




// let st={
//     backgroundColor:"red"
    
// };


export default  class Form2 extends React.Component {
state={
    name2:"",
        address:"",
        contact:""
    };

   changeName=(e)=>
    {
this.setState({[e.target.name]:e.target.value})

    }

    


render()
{

    return (
<>

<center>
<form > 
<input type="text" style={{backgroundColor:"red"}} name="name2" value={this.state.name2}  onChange={(e)=>this.changeName(e)}/><br></br><br></br>
<input type="text" name="contact" value={this.state.contact}  onChange={(e)=>this.changeName(e)} /><br></br><br></br>
<input type="text" name="address" value={this.state.address} onChange={(e)=>this.changeName(e)} /><br></br><br></br>
<button > Submit </button>
</form>
</center>

{/* <h1>{this.state.contact}</h1> */}


</>
    )
}    





}

