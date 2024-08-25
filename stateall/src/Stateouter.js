import React from 'react';

let cssStyle={
  width:"400px",
  height:"40px"

}

export default class Stateouter extends React.Component
{

 
state={
id:"",
name:""
,
address:""
};


// changeName=(e)=>{
// this.setState({name:e.target.value})
// }

// changeId=(e)=>
// {
// this.setState({id:e.target.value})
// }

// changeAddress=(e)=>
//   {
// this.setState({address:e.target.value})
//   }

  univerEvent=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})


  }

  render(){
return(
<>

<form style={cssStyle}>
<input type='text' name='id' value={this.state.id} onChange={(e)=>this.univerEvent(e)} /><br></br>
<input type='text' name='name' value={this.state.name} onChange={(e)=>this.univerEvent(e)}/><br></br>
<input type='text' name='address' value={this.state.address} onChange={(e)=>this.univerEvent(e)} /><br></br>
  <button>Submit</button>

</form>

    </>


  )
  
  }

}

