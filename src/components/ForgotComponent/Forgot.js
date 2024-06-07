import './Forgot.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Apiurls';
import { useNavigate } from 'react-router-dom';

function Forgot() {

    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        var updateDetails = { "condition_obj": { "email": email }, "content_obj": { "password": password } }
        axios.get(_apiurluser + "fetch?email=" + email).then((res) => {
            if (res.data[0].status) {
                axios.patch(_apiurluser + "forgot", updateDetails).then((res) => {
                    alert(res.data.msg)
                    // alert(res.msg);
                    navigate("/login")
                })
            } else {
                setOutput("Enter valid email");
            }
        }).catch((err) => {
            setOutput("Enter valid email");
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
                            <h2 class="text-primary text-uppercase" style={{ "margin": "0px 0px 0px 180px" }}>Forgot Password</h2>
                            <font style={{ "margin": "0px 0px 0px 180px" }} color="green">{output}</font>
                            <br />
                            <form>
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-2 col-form-label" >Enter Registered Email </label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Enter New Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <button style={{ "margin": "0px 0px 0px 280px" }} class="btn btn-success" type='button' onClick={handleSubmit}>Save New Password</button>
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
export default Forgot;