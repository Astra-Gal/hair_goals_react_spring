import React from 'react';
import {Link} from 'react-router-dom';



const NavBar = ({users}) => {
    if(!users){
        return null;
    }
    return (
        <div>
        <ul className="navbar">
            <li>
                <Link to="/" className="navlink">Home</Link>
            </li>
            <li>
                <Link to='/new-user' className="navlink">Enter your hair future!</Link>
            </li> 
            <li>
                <Link to='/user-details' className="navlink">My Details</Link>
            </li>
        </ul>
        </div>
    )
}



export default NavBar;