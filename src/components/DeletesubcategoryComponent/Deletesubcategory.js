import './Deletesubcategory.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiurlsubcategory } from '../../Apiurls';
function Deleteubcategory() {

    const [subcatList, setSubCatList] = useState([]);
    const [output, setOutput] = useState();
    const [delt, setDelt] = useState();

    useEffect(() => {
        axios.get(_apiurlsubcategory + 'fetch').then((response) => {
            setSubCatList(response.data);
            // console.log(response.data);
        });
        // console.log(catList);
    }, [delt]);
    const DeleteSubcategory = (_id) => {
        var deletesubcategory = { "data": { "_id": _id } }
        axios.delete(_apiurlsubcategory + 'delete', deletesubcategory).then((response) => {
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
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Delete SubCategory </h2>
                        </div>
                        <table class="table table-bordered">
                            <tr>
                                <th>#</th>
                                <th>Category_Name</th>
                                <th>SubCategory_Name</th>
                                <th>SubCategory Image</th>
                                <th>Delete</th>
                            </tr>
                            {
                                subcatList.map((row) => (
                                    <tr>

                                        <td> {row._id}</td>
                                        <td> {row.catname}</td>
                                        <td> {row.subcatname}</td>
                                        <img src={"/assets/uploads/subcategoryicons/" + (row.subcaticonname)} height={200} width={200} style={{ paddingTop: "2px" }} />

                                        <td>
                                            <i class="bi bi-trash" onClick={() => { DeleteSubcategory(row._id) }} style={{ "color": "red" }}></i>
                                        </td>
                                    </tr>
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
export default Deleteubcategory;