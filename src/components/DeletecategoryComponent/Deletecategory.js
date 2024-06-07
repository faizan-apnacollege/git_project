import './Deletecategory.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../../Apiurls';
function Deletecategory() {

    const [catList, setCatList] = useState([]);
    const [output, setOutput] = useState();
    const [delt, setDelt] = useState();

    useEffect(() => {
        axios.get(_apiurlcategory + 'fetch').then((response) => {
            setCatList(response.data);
            // console.log(response.data);
        });
        // console.log(catList);
    }, [delt]);
    const Deletecategory = (_id) => {
        var deletecategory = { "data": { "_id": _id } }
        axios.delete(_apiurlcategory + 'delete', deletecategory).then((response) => {
            alert(response.data.status);
            setDelt("")
        })
    }

    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Delete Category </h2>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Category_Name</th>
                                    <th>Category Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {
                                catList.map((row) => (
                                    <tbody>
                                        <tr>

                                            <td> {row._id}</td>
                                            <td> {row.catname}</td>
                                            <img src={"/assets/uploads/categoryicon/" + (row.caticonname)} height={200} width={200} style={{ paddingTop: "2px" }} />

                                            <td>
                                                <i class="bi bi-trash" onClick={() => { Deletecategory(row._id) }} style={{ "color": "red" }}></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default Deletecategory;