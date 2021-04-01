import React from 'react';
import { Link, Router } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
const Navbar = () =>{
    return (
        <nav className="nav-swapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand logo">Sainy</Link>
                <SignInLink />
                <SignOutLink />
            </div>
        </nav>
    )
}
export default Navbar;