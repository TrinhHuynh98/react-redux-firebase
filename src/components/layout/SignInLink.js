import React from 'react';
import { NavLink } from 'react-router-dom';
const SignInLink = () =>{
    return (
        <ul className="right">
            <li> <NavLink to = "/create">New Project</NavLink> </li>
            <li> <NavLink to = "/">SignOut</NavLink></li>
            <li><NavLink to = "/" className="btn btn-floating pink lighten-1">Sainy</NavLink></li>
        </ul>
    )
}
export default SignInLink;