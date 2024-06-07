import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// import Header from './components/HeaderComponent/Header';
import Nav from './components/NavComponent/Nav';
import Banner from './components/BannerComponent/Banner';
import Main from './components/MainComponent/Main';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import VarifyUser from './components/VarifyUserComponent/VarifyUser';
import Login from './components/LoginComponent/Login';
import Logout from './components/LogoutComponent/Logout';
import Footer from './components/FooterComponent/Footer';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import Manageusers from './components/ManageUsersComponent/Manageusers';
import ChangPassword from './components/ChangPasswordComponent/ChangPassword';
import EditProfile from './components/EditProfileComponent/EditProfile';
import Addcategory from './components/AddcategoryComponent/Addcategory';
import Addsubcategory from './components/AddsubcategoryComponent/Addsubcategory';
import Userhome from './components/UserhomeComponent/Userhome';
import SearchProduct from './components/SearchProductComponent/SearchProduct';
import SearchSubCategory from './components/SearchSubCategoryComponent/SearchSubCategory';
import AddProduct from './components/AddproductComponent/Addproduct';
import ShowProduct from './components/ShowProductComponent/ShowProduct';
import Deletecategory from './components/DeletecategoryComponent/Deletecategory';
import Deletesubcategory from './components/DeletesubcategoryComponent/Deletesubcategory';
import Bidproduct from './components/Bidproduct/Bidproduct';
import ShowBid from './components/ShowBid/ShowBid';
import Forgot from './components/ForgotComponent/Forgot';





function App() {
    const [role, setRole] = useState(localStorage.getItem('role'))
    console.log(localStorage.getItem('role'), "App component...")
    return (
        <>
            <Nav role={role} />

            <Banner />

            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service' element={<Service />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/verifyuser/:email' element={<VarifyUser />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/forgot' element={<Forgot />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/admin' element={<Adminhome />}></Route>
                <Route path='/addcategory' element={<Addcategory />}></Route>
                <Route path='/deletecategory' element={<Deletecategory />}></Route>
                <Route path='/deletesubcategory' element={<Deletesubcategory />}></Route>
                <Route path='/addsubcategory' element={<Addsubcategory />}></Route>
                <Route path='/addproduct' element={<AddProduct />}></Route>
                <Route path='/manageusers' element={<Manageusers />}></Route>
                <Route path='/changepassword' element={<ChangPassword />}></Route>
                <Route path='/editprofile' element={<EditProfile />}></Route>
                <Route path='/user' element={<Userhome />}></Route>
                <Route path='/spuser' element={<SearchProduct />}></Route>
                <Route path='/ssubcategory/:catname' element={<SearchSubCategory />}></Route>
                <Route path='/showproductlist/:subcatname' element={<ShowProduct />}></Route>
                <Route path='/bidproduct/:pid' element={<Bidproduct />}></Route>
                <Route path='/showbid/:pid' element={<ShowBid />}></Route>
            </Routes>

            <Footer />



            {/* Footer Start */}
            <div class="container-fluid bg-primary text-light py-4">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">eAuction</a>. All Rights
                                Reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <p class="mb-0">Designed by <a class="text-white border-bottom"
                                href="https://htmlcodex.com">eAuction</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    );
}

export default App;
