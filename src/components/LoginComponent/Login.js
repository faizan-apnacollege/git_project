import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Apiurls';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        var userDetails = { "email": email, "password": password };
        axios.post(_apiurluser + "login", userDetails).then((response) => {

            var resdata = response.data.userDetails;
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("_id", resdata._id);
            localStorage.setItem("name", resdata.name);
            localStorage.setItem("email", resdata.email);
            localStorage.setItem("password", resdata.password);
            localStorage.setItem("mobile", resdata.mobile);
            localStorage.setItem("address", resdata.address);
            localStorage.setItem("city", resdata.city);
            localStorage.setItem("gender", resdata.gender);
            localStorage.setItem("role", resdata.role);
            localStorage.setItem("info", resdata.info);

            resdata.role == "admin" ? navigate("/admin") : navigate("/user");


        }).catch((err) => {
            setOutput("Invalid user or please varify your account.....");
            setEmail("");
            setPassword("");
        })

    }
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "margin": "0px 0px 0px 180px" }}>Login Here</h2>
                            <font style={{ "margin": "0px 0px 0px 180px" }} color="green">{output}</font>
                            <br />
                            <form>
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-2 col-form-label" >Email </label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <br />
                                <Link style={{ "float": "right" }} to="/forgot">forgot password</Link>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <button style={{ "margin": "0px 0px 0px 280px" }} class="btn btn-success" type='button' onClick={handleSubmit}>Login</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default Login;