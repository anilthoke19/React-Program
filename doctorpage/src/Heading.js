import React from 'react';
import './index.css';
import GoodHealth from './GoodHealth';
class Head extends React.Component{

    render()
    {
return(
<>



<div className='container-fluid'>
<div className="row " id='head'>
    <div class="col">
123 Street, New York, USA</div>
    <div class="col">Mon - Fri : 09.00 AM - 09.00 PM</div>
    <div class="col">+012 345 6789</div>

</div>
<div className='navBar' id='navStick'>

<div className='row' id='second'  >

<div className='col-2' id='h'>
  <h1> HOSPITAL </h1>
</div>

<div className='col-7' id='navBar'>

<ul>
<li><a>HOME</a></li>
<li><a>ABOUT</a></li>
<li> <a>SERVICE</a></li>
<li><a>CONTACT</a></li>
<li><a id='from-label2'>
<label for="" className="form-label"></label>
    <select  id="form-label2">
        <option selected>Pages</option>
        <option value="">Feauter</option>
        <option value="">Our Doctor</option>
        <option value="">Appoitment</option>
        <option value="">Login</option>

    </select>
    </a>
    </li>
</ul>


</div>

<div className='col-3' id='a' >

<h3 id='b'><a>Appoitment</a> </h3>
</div>

</div>

</div>




</div>


<GoodHealth/>


</>

)

    }



} 
export default Head;