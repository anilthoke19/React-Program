import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Routes,BrowserRouter, Route,Link } from 'react-router-dom';
import AddEmployee from './component/AddEmployee';
import ViewEmployee from './component/ViewEmployee';
import SearchEmployee from './component/SearchEmployee';


function App(){return (
    <>

<BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light " >

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            

            <li className="nav-link"><Link to='/addEmp' >Add Employee</Link></li>

            
            
            <li className="nav-link"><Link to='/viewEmp' >View Employee</Link></li>

            
            <li className="nav-link"><Link to='/searchEmp'>SearchEmployee</Link></li>
    


          </ul>
        </div>
      </nav>

<ul>
</ul>
<Routes>

<Route path='/addEmp' element={<AddEmployee/>}/>
<Route path='/viewEmp' element={<ViewEmployee/>}/>
<Route path='/searchEmp' element={<SearchEmployee/>}/>




</Routes>
</BrowserRouter>



    </>
  );
}

export default App;
