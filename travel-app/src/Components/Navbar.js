import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './img/logo.avif'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/">
                        <img src={Logo} alt="Travel.com"
                        style={{height: "50px", width: "80px;"}} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/buy">Buy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/sell">Sell</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/about">About us</NavLink>
                            </li>
                            
                            

                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-but">
                                <NavLink className="btn  btn-outline-light mx-1" exact to="/signup">Sign up</NavLink>
                            </li>
                            <li className="nav-but">
                                <NavLink className="btn btn-outline-light mx-1" exact to="/login">Log in</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
