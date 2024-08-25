import React from 'react';
import ReactDom from 'react-dom';


 class NavBar extends React.Component
{
constructor(props)
{
     super(props);  

    this.showAlert=this.showAlert.bind(this);
}

// showAlert()
// {
// alert("It is in Home page");
// }



render()
{
return (
<>
<div className='nav'>
<ul>
<li><a id='e'>EDGECUT</a>    </li>

<li> <a >HOME </a>    </li>
<li> <a>ABOUT </a>    </li>
<li> <a>FURNITURES </a>    </li>
<li> <a>BLOG</a>    </li>
<li> <a>CONTACT US</a>    </li>

<li id='l'> <a onMouseLeave={this.showAlert()}>LOGIN </a>    </li>
<li> <a > Search </a> <i class="fa-solid fa-magnifying-glass"></i></li>




</ul>

</div>




</>
)

}

}

export default  NavBar;