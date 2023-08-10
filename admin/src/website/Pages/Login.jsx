import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

export default function Login() {
    const { mytext, Login } = useContext(Authcontext);
    //.........setting login data 
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    })

    //........onchange for data entry on update 
    const onChangeData = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    ///......formsubmit onhandle
    const onLogin = (e) => {
        e.preventDefault()
        Login(formdata)
        // axios({
        //     method: "post",
        //     url: "https://jsonplaceholder.typicode.com/comments",
        //     data: formdata
        // }).then((res) => {
        //     alert(res.data)
        // })
    }

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                                    <h4>Hello! let's get started</h4>
                                    <h6 className="font-weight-light">Sign in to continue.</h6>
                                    <form onSubmit={onLogin} method='post' className="pt-3">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"
                                                name='email'
                                                value={formdata.email}
                                                onChange={onChangeData} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                                                name='password'
                                                value={formdata.password}
                                                onChange={onChangeData} />
                                        </div>
                                        <div className="mt-3">
                                            
                                            <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type=''>SIGN IN</button>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                            <div className="form-check">
                                                <label className="form-check-label text-muted">
                                                    <input type="checkbox" className="form-check-input" />
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <a href="#" className="auth-link text-black">Forgot password?</a>
                                        </div>
                                        <div className="mb-2">

                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            Don't have an account? <a href="/Register" className="text-primary">Create</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* content-wrapper ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>
        </>
    )
}
