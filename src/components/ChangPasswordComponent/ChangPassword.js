import './ChangPassword.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Apiurls';
import { useNavigate } from 'react-router-dom';

function ChangPassword() {


    const navigate = useNavigate();
    const [output, setOutput] = useState();

    const [opassword, setOldPassword] = useState();
    const [npassword, setNewPassword] = useState();
    const [cnpassword, setConfirmNewPassword] = useState();


    const handleSubmit = () => {
        var userDetails = { "email": localStorage.getItem("email"), "password": opassword };

        axios.post(_apiurluser + "login", userDetails).then((response) => {
            if (npassword == cnpassword) {
                var updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpassword } }
                axios.patch(_apiurluser + "update", updateDetails).then(() => {
                    alert("Password Updated successfully.....")
                    navigate("/logout");
                })
            }
            else {
                setOutput("New and Confirm New password mismatch.....");
                setNewPassword("");
                setConfirmNewPassword("");
            }

        }).catch((err) => {
            setOutput("Invalid Old password.....");
            setOldPassword("");
        })
    }
    return (

        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Change Password Here!!!</h2>
                            <font style={{ "margin": "0px 0px 0px 180px" }} color="green">{output}</font>
                            <br />
                        </div>
                        <form>

                            <div class="form-group row">
                                <label for="opwd" class="col-sm-2 col-form-label">Old Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="OldPassword" value={opassword} onChange={e => setOldPassword(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="npwd" class="col-sm-2 col-form-label">New Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="NewPassword" value={npassword} onChange={e => setNewPassword(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="cnpwd" class="col-sm-2 col-form-label">Confirm New Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="ConfirmNewPassword" value={cnpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <button style={{ "margin": "0px 0px 0px 190px" }} class="btn btn-success" onClick={handleSubmit} type='button' >submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default ChangPassword;