import React from 'react';
import { NavLink } from 'react-router-dom';
const SignOutLink = () =>{
    return (
        <ul className="right">
            <li> <NavLink to = "/login">Login</NavLink> </li>
            <li> <NavLink to = "/signup">SignUp</NavLink></li>
        </ul>
    )
}
export default SignOutLink;