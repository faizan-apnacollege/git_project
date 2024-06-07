import './Manageusers.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { _apiurluser } from '../../Apiurls';

function Manageusers() {
    const [userDetails, setUserDetails] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        fetchData()
    }, []);
    function fetchData() {
        axios.get(_apiurluser + "fetch?role=user").then((response) => {
            // console.log(response.data);
            setUserDetails(response.data)
        }).catch((err) => {
            console.log("Record not found.....");
        })
    }

    var manageUserStatus = (_id, status) => {
        if (status == "active") {
            let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
            axios.patch(_apiurluser + "/update", updateDetails).then((response) => {
                // navigate("/manageusers");
                fetchData();
            });

        }
        else if (status == "inactive") {
            let updateDetails = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
            axios.patch(_apiurluser + "/update", updateDetails).then((response) => {
                // navigate("/manageusers");
                fetchData();
            })

        }
        else {
            let deleteDetails = { "data": { "_id": _id } };
            axios.delete(_apiurluser + "/delete", deleteDetails).then((response) => {
                // navigate("/manageusers");
                fetchData();
            })

        }
    }

    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">


                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px" }}>USERS DETAILS</h2>
                            <h1 class="display-5 mb-0">View & Manage Users Details Here!!!</h1>

                        </div>


                    </div>

                </div>
            </div>
            {/* About End */}
            <div className='container'>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Info</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        userDetails.map((row) => (
                            <tbody>
                                <tr key={row._id}>
                                    <td>{row._id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.address}</td>
                                    <td>{row.city}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.info}</td>
                                    <td>
                                        {

                                            row.status == 1 &&
                                            <p style={{ "color": "green;" }}>Active</p>
                                        }
                                        {
                                            row.status == 0 &&
                                            <p style={{ "color": "" }}>InActive</p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            // <i class="bi bi-toggle-on"></i>

                                            row.status == 1 &&
                                            <i class="bi bi-toggle-on" onClick={() => { manageUserStatus(row._id, "inactive") }} style={{ "color": "green" }}></i>

                                        }
                                        {
                                            row.status == 0 &&
                                            <i class="bi bi-toggle-off" onClick={() => { manageUserStatus(row._id, "active") }} style={{ "color": "" }}></i>
                                        }
                                        <br />

                                        <i class="bi bi-trash" onClick={() => { manageUserStatus(row._id, "delete") }} style={{ "color": "red" }}></i>
                                    </td>

                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </>
    )
}
export default Manageusers;