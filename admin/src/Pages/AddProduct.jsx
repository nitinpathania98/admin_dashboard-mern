import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';
export default function AddProduct() {
    const { AddProduct } = useContext(Authcontext);
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        productname: "",
        description: "",
        price: "",
        discount: "",
    });
    console.log(formdata)
    //.........
    const onChangeData = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    //.......
    const onHandle = (e) => {
        e.preventDefault();
        // console.log(formdata);
        AddProduct(formdata);
        //     axios({
        //     method:"post",
        //     url:"https://jsonplaceholder.typicode.com/comments",
        //     data: formdata
        //   }).then((res)=>{
        //     alert(res.data)
        //   })
    }

    return (
        <>
            {/* <div className="row ">
                <div className="col-lg-6  grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">PRODUCT DETAILS</h4>

                            <form onSubmit={onHandle} method='post' className="forms-sample">
                                <div className="form-group row">
                                    <label htmlFor="exampleInputUsername" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputUsername" placeholder="Username"
                                            name='name'
                                            onChange={onChangeData}
                                            value={formdata.name}
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="exampleInputProductName" className="col-sm-3 col-form-label">Product Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputProductName" placeholder="Product Name"
                                            name='productname'
                                            onChange={onChangeData}
                                            value={formdata.productname}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Despriction</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputDescription" placeholder="Description"
                                            name='description'
                                            onChange={onChangeData}
                                            value={formdata.description}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="exampleInputPrice" className="col-sm-3 col-form-label">Price</label>
                                    <div className="col-sm-9">
                                        <input type="number" className="form-control" id="exampleInputPrice" placeholder="in Rupees"
                                            name='price'
                                            onChange={onChangeData}
                                            value={formdata.price}
                                        />
                                    </div>
                                </div>
                                <div className="form-check form-check-flat form-check-primary">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        Details Checked
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                <button className="btn btn-light">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">PRODUCT DETAILS</h4>
                            <form onSubmit={onHandle} method='post' className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Full Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control"
                                                    id='name'
                                                    placeholder="Enter Your Name"
                                                    name='name'
                                                    onChange={onChangeData}
                                                    value={formdata.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Email</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control"
                                                    id="email" placeholder="...@....com"
                                                    name='email'
                                                    onChange={onChangeData}
                                                    value={formdata.email} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Product Name</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="productname" placeholder="Product Name"
                                                    name='productname'
                                                    onChange={onChangeData}
                                                    value={formdata.productname}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Description</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="description" placeholder="Description"
                                                    name='description'
                                                    onChange={onChangeData}
                                                    value={formdata.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Category</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>Mobiles</option>
                                                    <option>Laptops</option>
                                                    <option>Cars</option>
                                                    <option>Bikes</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Price</label>
                                            <div className="col-sm-9">
                                                <input type="number" className="form-control" id="price" placeholder="in Rupees"
                                                    name='price'
                                                    onChange={onChangeData}
                                                    value={formdata.price}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Discount</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" id="discount" placeholder="Discount on Product"
                                                    name='discount'
                                                    onChange={onChangeData}
                                                    value={formdata.discount}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">File upload</label>
                                            <div className="col-sm-3">
                                                <input type="file"
                                                    className="file-upload-default" id='img'
                                                    name="img[]"
                                                    onChange={onChangeData}
                                                    value={formdata.img}
                                                />
                                            </div>
                                            <div className="input-group col-xs-12">
                                                <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
                                                <span className="input-group-append">
                                                    <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">

                                        </div>
                                    </div>
                                </div>
                                <div className="form-check form-check-flat form-check-primary">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        Details Checked
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                <button className="btn btn-light">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
