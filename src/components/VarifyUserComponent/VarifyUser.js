import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { _apiurluser } from "../../Apiurls";
function VarifyUser() {

    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        axios.get(_apiurluser + "fetch?email=" + params.email).then((response) => {
            if (response.data[0].__v == 0) {
                var updateDetails = { "condition_obj": { "email": params.email }, "content_obj": { "status": 1, "__v": 1 } }
                axios.patch(_apiurluser + "update", updateDetails).then(() => {
                    console.log("User verified.....");
                })
            }
        })
    })
    return (
        <>
            <Navigate to="/login" />
        </>
    )
}

export default VarifyUser;