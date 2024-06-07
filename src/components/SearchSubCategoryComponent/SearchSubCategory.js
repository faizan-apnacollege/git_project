import './SearchSubCategory.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { _apiurlcategory, _apiurlsubcategory } from '../../Apiurls';
function SearchSubCategory() {

    const [subcatList, setSubCatList] = useState([]);
    const params = useParams();

    var isButton = true;
    const handleGoBack = () => {
        window.history.back();
    };

    useEffect(() => {
        axios.get(_apiurlsubcategory + "fetch?catname=" + params.catname).then((response) => {
            // console.log(response.data);
            setSubCatList(response.data);
        }).catch(() => {
            // isButton = true;
            alert("Record not found...");
        })
    })

    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Search SubCategory</h2>
                            <h1 class="display-5 mb-0"> List of {params.catname}</h1>
                        </div>
                        <center>
                            <div id='catmain'>
                                {
                                    subcatList.length > 0 ?
                                        (
                                            <div>{
                                                subcatList.map((row) => (
                                                    <Link to={"/showproductlist/" + (row.subcatname)}>
                                                        <div class='catpart'>
                                                            <img src={'/assets/uploads/subcategoryicons/' + (row.subcaticonname)} height={170} width={250} />
                                                            <br />
                                                            <b>{row.subcatname}</b>
                                                        </div>
                                                    </Link>
                                                ))
                                            }</div>
                                        ) : <>
                                            <p class="mb-4">no such data found</p>
                                            <button className='btn btn-primary' onClick={handleGoBack}>Back</button>
                                            {/* <div>
                                                {
                                                    isButton && (
                                                        <button className='btn btn-primary' onClick={handleGoBack}>Back</button>

                                                    )
                                                }</div> */}
                                        </>
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
export default SearchSubCategory;