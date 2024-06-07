import axios from 'axios';
import { _apiurluser } from '../../Apiurls';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './EditProfile.css'
function EditProfile() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    useEffect(() => {
        axios.get(_apiurluser + "fetch?email=" + localStorage.getItem("email")).then((response) => {
            // console.log(response.data[0]);
            setName(response.data[0].name)
            setEmail(response.data[0].email);
            setAddress(response.data[0].address);
            setCity(response.data[0].city);
            setGender(response.data[0].gender);
            setMobile(response.data[0].mobile);
        }).catch((err) => {
            console.log("Record not found.....");
        })
    }, []);

    const handleSubmit = () => {
        var updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "address": address, "city": city, "mobile": mobile, "gender": gender } }
        axios.patch(_apiurluser + "update", updateDetails).then(() => {
            alert("Record updated succesfully....");
            navigate("/editprofile");
        }).catch(() => {
            alert("Record Updation Failed....");
        })
    }

    return (
        <>

            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Change Profile Here!!!</h2>
                            {/* <font style={{ "margin": "0px 0px 0px 180px" }} color="green">{output}</font> */}
                            <br />
                        </div>
                        <form>
                            <div class="form-group row">
                                <label for="name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="name" placeholder="OldPassword" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" readOnly value={email} onChange={e => setEmail(e.target.value)} />
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
                                    <input type='radio' name='gender' value="male" onChange={e => setGender(e.target.value)} />Male
                                    &nbsp;&nbsp;
                                    <input type='radio' name='gender' value="female" onChange={e => setGender(e.target.value)} />Female
                                </div>
                                <div class="col-sm-8"></div>
                            </div>
                            <br />
                            {/* <h3 style={{ "margin": "0px 0px 0px 90px", "color":"green" }} >{output}</h3> */}
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <button style={{ "margin": "0px 0px 0px 190px" }} type="button" onClick={handleSubmit} class="btn btn-success">submit</button>
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
export default EditProfile;