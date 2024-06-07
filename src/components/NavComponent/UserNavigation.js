import React from 'react'
import { Link } from 'react-router-dom';
const UserNavigation = () => {
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
                    <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                    <a class="nav-item nav-link "><Link to="/spuser">Search Product</Link></a>
                    {/* <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                    <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    */}
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Settings</a>
                        <div class="dropdown-menu m-0">
                            <a class="dropdown-item"><Link to="/changepassword"> Change Password</Link></a>
                            <a class="dropdown-item"><Link to="/editprofile"> Edit Profile</Link></a>
                            {/* <a href="" class="dropdown-item">Our Clints</a> */}
                        </div>
                    </div>
                    {/*<div class="nav-item dropdown">
                            <a href="" class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Product</a>
                            <div class="dropdown-menu m-0">
                                <a class="dropdown-item"><Link to="/addproduct">AddProduct</Link></a>
                                <a href="" class="dropdown-item"><Link to="/manageproduct">ManageProduct</Link></a> */}
                    {/* <a href="" class="dropdown-item">Our Clints</a> 
                            </div>
                        </div> */}
                    {/* <a class="nav-item nav-link"><Link to="/register">Register</Link></a>  */}

                    <a class="nav-item nav-link"><Link to="/logout">LogOut</Link></a>
                    {/* <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5">Welcome to User</a> */}
                    <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i
                        class="bi bi-envelope-open text-white me-2"></i>{localStorage
                            .getItem('email')}</a>
                </div>
            </div>
        </nav>
    )
}

export default UserNavigation;
