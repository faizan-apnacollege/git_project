import './Addsubcategory.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory } from '../../Apiurls';
function Addsubcategory() {

    const [file, setFile] = useState();
    const [catList, setCatList] = useState([]);
    const [catName, setCatName] = useState();
    const [subCatName, setSubCatName] = useState();
    const [output, setOutput] = useState();

    // useEffect(() => {
    //     axios.get(_apiurlcategory + "fetch").then((response) => {
    //         // console.log(response.data);
    //         setCatList(response.data)
    //     }).catch((err) => {
    //         console.log("Record not found.....");
    //     })
    // });
    useEffect(() => {
        getCategory();
    }, []);
    function getCategory() {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            // console.log(response.data);
            setCatList(response.data)
        }).catch((err) => {
            console.log("Record not found.....");
        })
    }

    const handelChange = (event) => {
        event.preventDefault();
        setFile(event.target.files[0]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('catname', catName);
        formData.append('subcatname', subCatName);
        formData.append('subcaticon', file);

        const config = {
            'content-type': 'multipart/form-data'
        };
        // console.log(formData);
        axios.post(_apiurlsubcategory + 'save', formData, config).then((response) => {
            setCatName("");
            setSubCatName("");
            setOutput("subcategory added successfully..");

        });
    }
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>AddSubcategory </h2>
                        </div>
                        <form>
                            {/* <h4 class="display-5 mb-0">{output}</h4> */}
                            <h4 class="text-success">{output}</h4>
                            <div class="form-group row">
                                <label for="catnm" class="col-sm-2 col-form-label">Category Name</label>
                                <div class="col-sm-10">
                                    <select type="text" class="form-control" id="inputName" placeholder="Name" value={catName} onChange={e => setCatName(e.target.value)} >
                                        <option>Select Category</option>
                                        {
                                            catList.map((row) => (
                                                <option>{row.catname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="subcatnm" class="col-sm-2 col-form-label">Sub Category Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName" placeholder="subcategoryName" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="file" class="col-sm-2 col-form-label">Sub Category Icon</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="inputFile" onChange={handelChange} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <button style={{ "margin": "0px 0px 0px 190px" }} type="button" onClick={handleSubmit} class="btn btn-success">Add
                                        Sub Category</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            {/* About End */}
        </>
    )
}
export default Addsubcategory;