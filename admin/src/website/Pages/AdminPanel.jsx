import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

function AdminPanel() {
    const { AdminPanel } = useContext(Authcontext);

    // ...............................
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    })
    // ................................
    const OnchangeData = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    // ...................................

    const Onhandleform = (e) => {
        e.preventDefault();
        AdminPanel(formdata)
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
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">Login Now</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary" aria-current="page">Login Now</li>
                        </ol>
                    </nav>
                </div>
            </div>


            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px;" }}>
                        <p className="fs-5 fw-medium text-primary">Contact Us</p>
                        <h1 className="display-5 mb-5">If You Have Any Query, Please Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4">Need a functional contact form?</h3>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form onSubmit={Onhandleform} method="post">
                                <div className="row g-3">
                                    {/* <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" 
                                    name="username"
                                    value={formdata.username}
                                    onChange={OnchangeData}/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div> */}
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                                name="email"
                                                value={formdata.email}
                                                onChange={OnchangeData} />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="password" placeholder="password"
                                                name='password'
                                                value={formdata.password}
                                                onChange={OnchangeData} />
                                            <label for="password">password</label>
                                        </div>
                                    </div>

                                    {/* <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" 
                                    name='subject'
                                    value={formdata.subject}
                                    onChange={OnchangeData}/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div> */}
                                    {/* <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "200px;"}}
                                    name="message"
                                    value={formdata.message}
                                    onChange={OnchangeData}
                                    ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div> */}
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Login Now</button>
                                    </div>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                            Don't have an account? <a href="/AdminRegistration" className="text-primary">Create</a>
                                        </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h3 className="mb-4">Contact Details</h3>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Our Office</h6>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Call Us</h6>
                                    <span>+012 345 67890</span>
                                </div>
                            </div>
                            <div className="d-flex border-bottom-0 pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Mail Us</h6>
                                    <span>info@example.com</span>
                                </div>
                            </div>

                            <iframe className="w-100 rounded"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{ minHeight: "300px;" }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>

    )
}

export default AdminPanel