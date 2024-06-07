import './SearchProduct.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { _apiurlcategory, _apiurlsubcategory } from '../../Apiurls';
function SearchProduct() {

    const [catList, setCatList] = useState([]);


    useEffect(() => {
        axios.get(_apiurlcategory + "/fetch").then((response) => {
            // console.log(response.data);
            setCatList(response.data);
        })
    })
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Category List</h2>
                            <h1 class="display-5 mb-0"> List of category</h1>
                        </div>
                        <center>
                            <div id='catmain'>
                                {
                                    catList.map((row) => (
                                        <Link to={"/ssubcategory/" + (row.catname)}>
                                            <div class='catpart'>
                                                <img src={'/assets/uploads/categoryicon/' + (row.caticonname)} height={170} width={250} />
                                                <br />
                                                <b>{row.catname}</b>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </center>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default SearchProduct;