
import './App.css';
import Home from './Home.js';
import Service from './Service.js';
import Login from './Login.js';
import {Routes,BrowserRouter, Route,Link } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>

<ul>
<li><Link to='/' className="one"> Home</Link></li>
<li><Link to ='/Services' className="one">Service</Link></li>
<li><Link to='/Loginn'className="one">Login</Link></li>

</ul>



<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/services' element={<Service/>}   />
<Route path='/Loginn' element={<Login/>} />




</Routes>
</BrowserRouter>

  )
}

export default App;
