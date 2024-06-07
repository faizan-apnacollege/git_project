import './Register.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../../Apiurls';
function Register() {

    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();

    const handleSubmit = () => {
        var userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender }
        axios.post(_apiurluser + "save", userDetails).then((response) => {
            setOutput("User register successfully....");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
            setGender("");
        }).catch((err) => {
            setOutput("User registeration failed....");
        })
    };
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1 s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h1 class="text-primary text-uppercase" style={{ "margin": "0px 0px 0px 190px" }} >Register Here</h1>
                            <form>
                                <div class="form-group row">
                                    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputName" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
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
                                <div class="form-group row">
                                    <label for="inputMobile" class="col-sm-2 col-form-label">Mobile</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputMobile" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows={3} placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <label for="inputCity" class="col-sm-2 col-form-label">City</label>
                                    <div class="col-sm-10">
                                        <select class="form-control" placeholder="City" value={city} onChange={e => setCity(e.target.value)} >
                                            <option>Select City</option>
                                            <option>Indore</option>
                                            <option>Bhopal</option>
                                            <option>gwalior</option>
                                            <option>Ujjain</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <label for="gender" >Gender  </label>
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        {/* <input type='radio' name='gender' value="male" onChange={e => setGender(e.target.value)} />Male
                                        &nbsp;&nbsp;
                                        <input type='radio' name='gender' value="female" onChange={e => setGender(e.target.value)} />Female */}
                                        <input type="radio" name='gender' value="male" checked={gender === 'male'} onChange={() => setGender('male')} />Male
                                        &nbsp;&nbsp;
                                        <input type="radio" name='gender' value="female" checked={gender === 'female'} onChange={() => setGender('female')} />Female
                                    </div>
                                    <div class="col-sm-8"></div>
                                </div>
                                <br />
                                <h3 style={{ "margin": "0px 0px 0px 90px", "color": "green" }} >{output}</h3>
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <button style={{ "margin": "0px 0px 0px 190px" }} type="button" onClick={handleSubmit} class="btn btn-success">submit</button>
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
export default Register;