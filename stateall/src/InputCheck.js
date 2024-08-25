import { useState } from "react"


let CheckInput=()=>
    {
useState(count,[name,contact,address])

let unverHandle=(e)=>
  {
this.setState({[e.target.name]:e.target.value})

  }


return(
  <>  
  
<input type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e)=>unverHandle(e)} /><br></br>
<input type="text" name="address" value={this.state.address} placeholder="Address" onChange={(e)=>unverHandle(e)}/><br></br>
<input type="text" name="contact" value={this.state.contact} placeholder="contact " onChange={(e)=>unverHandle(e)}/>



</>
)

    }

    export default  CheckInput;