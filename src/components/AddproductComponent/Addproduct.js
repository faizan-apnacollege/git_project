import './Addproduct.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiurlcategory, _apiurlsubcategory, _apiurlproduct } from '../../Apiurls';
function AddProduct() {

    const [catList, setCatList] = useState([]);
    const [subcatList, setsubCatList] = useState([]);
    const [catName, setCatName] = useState();
    const [PTitle, setPTitle] = useState();
    const [PDescription, setpDescription] = useState();
    const [file, setFile] = useState();


    const [subCatName, setSubCatName] = useState();
    const [BPrice, setBPrice] = useState();
    const [output, setOutput] = useState();

    useEffect(() => {
        axios.get(_apiurlcategory + "fetch").then((response) => {
            // console.log(response.data);
            setCatList(response.data)
        }).catch((err) => {
            console.log("Record not found.....");
        })

        axios.get(_apiurlsubcategory + "fetch?catname=" + catName).then((response) => {
            // console.log(response.data);
            setsubCatList(response.data)
        }).catch((err) => {
            console.log("Record not found.....");
        })
    });

    const handelChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('ptitle', PTitle);
        formData.append('catname', catName);
        formData.append('subcatname', subCatName);
        formData.append('pdescription', PDescription);
        formData.append('pbaseprice', BPrice);
        formData.append('picon', file);

        const config = {
            'content-type': 'multipart/form-data'
        };
        console.log(formData);
        axios.post(_apiurlproduct + 'save', formData, config).then((response) => {
            setPTitle("");
            setBPrice("");
            setCatName("");
            setSubCatName("");
            setpDescription("")
            setOutput("Product Added succesfully....");
        });
    }
    return (
        <>
            {/* About Start */}
            <div class="container-fluid py-5 wow fadeInOut" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="mb-4 wow fadeInDown">
                            <h2 class="text-primary text-uppercase" style={{ "letterSpacing": "5px;" }}>AddProduct </h2>

                        </div>
                        <form>
                            <h4 class="display-5 mb-0">{output}</h4>
                            <div class="form-group row">
                                <label for="pDescription" class="col-sm-2 col-form-label">Product Title: </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName" placeholder="Enter Product Title" value={PTitle} onChange={e => setPTitle(e.target.value)} />
                                </div>
                            </div>
                            <br />
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
                                <label for="scatnm" class="col-sm-2 col-form-label">Sub Category Name</label>
                                <div class="col-sm-10">
                                    <select type="text" class="form-control" id="inputName" placeholder="SubCatName" value={subCatName} onChange={e => setSubCatName(e.target.value)} >
                                        <option>Select Sub Category</option>
                                        {
                                            subcatList.map((row) => (
                                                <option>{row.subcatname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="file" class="col-sm-2 col-form-label">Product Icon</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="inputFile" onChange={handelChange} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="pDescription" class="col-sm-2 col-form-label">Product Description: </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName" placeholder="Enter Description" value={PDescription} onChange={e => setpDescription(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <label for="BPrice" class="col-sm-2 col-form-label">Base Price: </label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputName" placeholder="Base Price" value={BPrice} onChange={e => setBPrice(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <button style={{ "margin": "0px 0px 0px 190px" }} type="button" onClick={handleSubmit} class="btn btn-success">Add
                                        Product</button>
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
export default AddProduct;


