import React from "react";

import {Link} from 'react-router-dom';

const NavBar:React.FC<unknown> = (props)=>{

    return(
        <nav className= "navbar navbar-nav navbar-expand-lg">

        <ul>
           <button><Link to ={""} style = {{margin:"12mm", color: "Blue"}}>Home</Link></button> 
           
            <button><Link to ={"/customer"} style = {{margin:"12mm"}}>Customer</Link></button>

             <button><Link to={"/product"} style = {{margin:"12mm"}}>Product</Link></button>

             <button><Link to={""} style = {{margin:"12mm"} }>About</Link></button>
             <button><Link to={""} style = {{margin:"12mm"}}>Search</Link></button>

             </ul>
    </nav>);

}
export default (NavBar);