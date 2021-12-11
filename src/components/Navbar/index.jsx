import React from "react";
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white shadow">
        <div class="container">
            <Link to="/">
                <img class="logo" src={Logo} alt="logikmind" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/services">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
