import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'
function Register() {
  //.//..adding page to authcontext
  const { register } = useContext(Authcontext);
  //.........setting login data 
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    country: "",
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
  const onRegister = (e) => {
    e.preventDefault();
    register(formdata)
    // axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/comments",
    //   data: formdata
    // }).then((res) => {
    //   alert(res.data)
    // })
    // console.log(formdata)
  }
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                  <h4>New here?</h4>
                  <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                  <form on onSubmit={onRegister} method='post' className="pt-3">
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username"
                        name='name'
                        value={formdata.name}
                        onChange={onChangeData}
                      />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"
                        name='email'
                        value={formdata.email}
                        onChange={onChangeData}
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control form-control-lg" id="exampleFormControlSelect2"
                        name='country'
                        value={formdata.country}
                        onChange={onChangeData}>
                        <option>Country</option>
                        <option>United States of America</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>Germany</option>
                        <option>Argentina</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                        name='password'
                        value={formdata.password}
                        onChange={onChangeData}
                      />
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          I agree to all Terms &amp; Conditions
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Register</button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account? <a href="/Login" className="text-primary">Login</a>
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

export default Register