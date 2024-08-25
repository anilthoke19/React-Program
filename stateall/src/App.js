import './App.css';
import React from 'react';

export default class App extends React.Component{

state={
    name:"Anil",
    contact:"",
    address:""

    }


//     changeName=(e)=>
//     {
//         this.setState({name:e.target.value})

//     }

//     changeContact=(e)=>
//         {
// this.setState({contact:e.target.value})        }

//         changeAddress=(e)=>
//             {

//                 this.setState({address:e.target.value})
//             }

changeName=(e)=>
{
this.setState({[e.target.name]:e.target.value})

}


render(){
    return <>
    
    <input type='text' name='name' value={this.state.name} onChange={(e)=>this.changeName(e)}></input><br></br><br></br>
    <input type='text' name='contact' value={this.state.contact } onChange={(e)=> this.changeName(e)}></input><br></br><br></br>
    <input type='text' name='address' value={this.state.address} onChange={(e)=>this.changeName(e)}></input><br></br>







    </>
}

}

