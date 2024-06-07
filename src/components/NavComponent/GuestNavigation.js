import React from 'react'
import { Link } from 'react-router-dom';
const GuestNavigation = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <a class="navbar-brand ms-lg-5">
                <h1 class="display-5 m-0 text-primary">eAuc<span class="text-secondary">tion</span></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                    <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    {/* <div class="nav-item dropdown">
                <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                <div class="dropdown-menu m-0">
                    <a href="" class="dropdown-item">Our Team</a>
                    <a href="" class="dropdown-item">Testimonial</a>
                    <a href="" class="dropdown-item">Our Clints</a>
                </div>
            </div> */}
                    <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                    <a class="nav-item nav-link"><Link to="/login">Login</Link></a>

                    <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i
                        class="bi bi-telephone-outbound me-2"></i>+ XXX XXX XXXX</a>
                </div>


            </div>
        </nav>
    )
}
export default GuestNavigation;