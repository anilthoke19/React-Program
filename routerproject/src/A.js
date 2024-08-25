import React from "react";
import B from './B.js';
import C from './C.js';
import { BrowserRouter, NavLink, Route,Routes } from "react-router-dom";

let Afunctio=()=>
    {
        return(
            <>

<BrowserRouter>

<NavLink to='Bpage' >B</NavLink>
<NavLink to='Cpage'> C</NavLink>

<Routes>

<Route path="Bpage"  element={<B/>} />
<Route path="Cpage" element={<C/>}  />

</Routes>



</BrowserRouter>

</>
        )

    }
 export default Afunctio;