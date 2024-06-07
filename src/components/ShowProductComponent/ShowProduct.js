import './ShowProduct.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { _apiurlcategory, _apiurlproduct, _apiurlsubcategory } from '../../Apiurls';
function ShowProduct() {

    const [pList, setProductList] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(_apiurlproduct + "fetch?subcatname=" + params.subcatname).then((response) => {
            //  console.log(response.data);
            setProductList(response.data);
        }).catch(() => {
            console.log("Record not found...");
        })
    })
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5 text-justify">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Product</h2>
                            <h1 class="display-5 mb-0"> List of {params.subcatname}</h1>
                        </div>
                        <center >
                            {
                                pList.map((row) => (
                                    <>
                                        <table className='mb-1' border={3} id="table">
                                            <tr >
                                                <td><b>Product Title:</b>{row.ptitle}</td>
                                            </tr>
                                            <tr >
                                                <td><b>Product Price:</b>{row.pbaseprice}</td>
                                            </tr>
                                            <tr >
                                                <td><b>Product Description:</b>{row.pdescription}</td>
                                            </tr>
                                            <tr>
                                                <center>
                                                    <td ><img src={'/assets/uploads/producticons/' + (row.piconname)} height="150" width="400" /></td>
                                                </center>
                                            </tr>
                                            <tr>
                                                {Date.now() - row.info < 172800000 && <a><Link style={{ "color": "orange" }} to={"/bidproduct/" + (row._id)} >Bid Running</Link></a>}
                                                {Date.now() - row.info > 172800000 && <a><Link style={{ "color": "green" }} to={"/showbid/" + (row._id)} >Bid Completed</Link></a>}
                                            </tr>
                                        </table>
                                    </>
                                ))
                            }
                        </center>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default ShowProduct;