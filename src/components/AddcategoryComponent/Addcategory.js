import './Addcategory.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../../Apiurls';
function Addcategory() {

    const [file, setFile] = useState();
    const [catName, setCatName] = useState();
    const [output, setOutput] = useState();


    const handelChange = (event) => {
        setFile(event.target.files[0]);
        // console.log(file);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('catname', catName);
        formData.append('caticon', file);

        const config = {
            'content-type': 'multipart/form-data'
        };

        axios.post(_apiurlcategory + 'save', formData, config).then((response) => {
            setCatName("");
            setOutput("category Added succesfully....");
        });
    }
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>Addcategory </h2>
                        </div>
                        <form>
                            <h4 class="display-5 mb-0">{output}</h4>
                            <div class="form-group row">
                                <label for="inputName" class="col-sm-2 col-form-label">Category Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName" placeholder="Name" value={catName} onChange={e => setCatName(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="file" class="col-sm-2 col-form-label">Category Icon</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="inputFile" onChange={handelChange} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <button style={{ "margin": "0px 0px 0px 190px" }} type="button" onClick={handleSubmit} class="btn btn-success">Add
                                        Category</button>
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
export default Addcategory;