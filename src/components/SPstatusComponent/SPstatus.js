 import './SPstatus.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { _apiurlcategory, _apiurlsubcategory, _apiurlproduct } from '../../Apiurls';
function SPstatus() {

    const params = useParams();
    const [pDetails, setPDetails] = useState([]);
    const [flag, setFlag] = useState()
    

    useEffect(() => {
        axios.get(_apiurlproduct + "fetch?_id="+params.id).then((response) => {
            // console.log(response.data);
            setPDetails(response.data)
            if((Date.now()-pDetails[0].info)<17280000)
            {
                setFlag(1);
            }
            else
                setFlag(0);
        }).catch((err) => {
            console.log("Record not found.....");
        })

    });
    
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Product Bidding Status</h2>
                        </div>
                        {
                            flag==1 &&
                            //   <h1>{pDetails}</h1>
                             <h1>Bid In Progress ?&nbsp;
                                <br/><span><img src={'/assets/uploads/producticons/'+(pDetails[0].piconname)} width={300} height={200}/><br/> heigest bid Price:{pDetails[0].pbaseprice}</span></h1>
                        }
                        {
                            flag==0 &&
                             <h1>Bid Is Completed</h1>
                        }
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
 }
export default SPstatus;