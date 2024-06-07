import './Nav.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Auth from '../AuthComponent/Auth';
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';
import GuestNavigation from './GuestNavigation';

function Nav() {
    const [NavContent, setNavContent] = useState(<GuestNavigation />);
    const [rolle, setRole] = useState();
    // useEffect(() => {
    //     if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
    //         setNavContent(
    //             <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    //                 <a class="navbar-brand ms-lg-5">
    //                     <h1 class="display-5 m-0 text-primary">eAuc<span class="text-secondary">tion</span></h1>
    //                 </a>
    //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //                     <span class="navbar-toggler-icon"></span>
    //                 </button>
    //                 <div class="collapse navbar-collapse" id="navbarCollapse">
    //                     <div class="navbar-nav ms-auto py-0">
    //                         <a class="nav-item nav-link"><Link to="/admin">Admin Home</Link></a>
    //                         {/* <a class="nav-item nav-link"><Link to="/about">About</Link></a>
    //                 <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
    //                 <a class="nav-item nav-link"><Link to="/service">Service</Link></a>*/}
    //                         <div class="nav-item dropdown">
    //                             <a class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Settings</a>
    //                             <div class="dropdown-menu m-0">
    //                                 <a class="dropdown-item"><Link to="/changepassword"> Change Password</Link></a>
    //                                 <a class="dropdown-item"><Link to="/editprofile"> Edit Profile</Link></a>
    //                                 {/* <a href="" class="dropdown-item">Our Clints</a> */}
    //                             </div>
    //                         </div>
    //                         <div class="nav-item dropdown">
    //                             <a class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Product</a>
    //                             <div class="dropdown-menu m-0">
    //                                 <a class="dropdown-item"><Link to="/addproduct"> AddProduct</Link></a>
    //                                 {/* <a class="dropdown-item"><Link to="/managecategory"> Manage Category</Link></a>

    //                             <a href="" class="dropdown-item"><Link to="/addsubcategory"> Add sub Category</Link></a>
    //                             <a class="dropdown-item"><Link to="/managesubcategory">Manage Sub Category</Link></a> */}
    //                                 {/* <a href="" class="dropdown-item">Our Clints</a> */}
    //                             </div>
    //                         </div>
    //                         <div class="nav-item dropdown">
    //                             <a class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Category</a>
    //                             <div class="dropdown-menu m-0">
    //                                 <a class="dropdown-item"><Link to="/addcategory"> Addcategory</Link></a>
    //                                 <a class="dropdown-item"><Link to="/deletecategory"> Delete Category</Link></a>
    //                                 <a class="dropdown-item"><Link to="/addsubcategory"> Add sub Category</Link></a>
    //                                 <a class="dropdown-item"><Link to="/deletesubcategory">Delete SubCategory</Link></a>
    //                                 {/* <a href="" class="dropdown-item">Our Clints</a> */}
    //                             </div>
    //                         </div>
    //                         <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
    //                         <a class="nav-item nav-link"><Link to="/logout">LogOut</Link></a>

    //                         {/* <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5">Welcome to Admin</a> */}
    //                         <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5">{localStorage
    //                             .getItem('email')}</a>
    //                     </div>
    //                 </div>
    //             </nav>
    //         );
    //     }
    //     else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
    //         setNavContent(<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    //             <a class="navbar-brand ms-lg-5">
    //                 <h1 class="display-5 m-0 text-primary">eAuc<span class="text-secondary">tion</span></h1>
    //             </a>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarCollapse">
    //                 <div class="navbar-nav ms-auto py-0">
    //                     <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
    //                     <a class="nav-item nav-link "><Link to="/spuser">Search Product</Link></a>
    //                     {/* <a class="nav-item nav-link"><Link to="/about">About</Link></a>
    //                 <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
    //                 <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
    //                 */}
    //                     <div class="nav-item dropdown">
    //                         <a class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Settings</a>
    //                         <div class="dropdown-menu m-0">
    //                             <a class="dropdown-item"><Link to="/changepassword"> Change Password</Link></a>
    //                             <a class="dropdown-item"><Link to="/editprofile"> Edit Profile</Link></a>
    //                             {/* <a href="" class="dropdown-item">Our Clints</a> */}
    //                         </div>
    //                     </div>
    //                     {/*<div class="nav-item dropdown">
    //                         <a href="" class="nav-link dropdown-toggle" style={{ "color": "#2878EB" }} data-bs-toggle="dropdown">Product</a>
    //                         <div class="dropdown-menu m-0">
    //                             <a class="dropdown-item"><Link to="/addproduct">AddProduct</Link></a>
    //                             <a href="" class="dropdown-item"><Link to="/manageproduct">ManageProduct</Link></a> */}
    //                     {/* <a href="" class="dropdown-item">Our Clints</a> 
    //                         </div>
    //                     </div> */}
    //                     {/* <a class="nav-item nav-link"><Link to="/register">Register</Link></a>  */}

    //                     <a class="nav-item nav-link"><Link to="/logout">LogOut</Link></a>
    //                     {/* <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5">Welcome to User</a> */}
    //                     <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i
    //                         class="bi bi-envelope-open text-white me-2"></i>{localStorage
    //                             .getItem('email')}</a>
    //                 </div>
    //             </div>
    //         </nav>);
    //     }
    //     else {
    //         setNavContent(<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    //             <a class="navbar-brand ms-lg-5">
    //                 <h1 class="display-5 m-0 text-primary">eAuc<span class="text-secondary">tion</span></h1>
    //             </a>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarCollapse">
    //                 <div class="navbar-nav ms-auto py-0">
    //                     <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
    //                     <a class="nav-item nav-link"><Link to="/about">About</Link></a>
    //                     <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
    //                     <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
    //                     {/* <div class="nav-item dropdown">
    //             <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
    //             <div class="dropdown-menu m-0">
    //                 <a href="" class="dropdown-item">Our Team</a>
    //                 <a href="" class="dropdown-item">Testimonial</a>
    //                 <a href="" class="dropdown-item">Our Clints</a>
    //             </div>
    //         </div> */}
    //                     <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
    //                     <a class="nav-item nav-link"><Link to="/login">Login</Link></a>

    //                     <a class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i
    //                         class="bi bi-telephone-outbound me-2"></i>+ XXX XXX XXXX</a>
    //                 </div>


    //             </div>
    //         </nav>
    //         );
    //     }
    // });


    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (token && role === "admin") {

            setNavContent(<AdminNavigation />);
        } else if (token && role === "user") {

            setNavContent(<UserNavigation />);
        } else {

            setNavContent(<GuestNavigation />);
        }
    }, [rolle]);

    return (
        <>

            {/* Navbar Start */}
            <Auth />
            {NavContent}
            {/* Navbar End */}
        </>
    );
}
export default Nav; 