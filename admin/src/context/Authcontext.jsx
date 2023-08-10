import React from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Authcontext = createContext();
function AuthProvider(props) {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState();

    //....Login
    const Login = (formdata) => {
        axios({
            method: 'post',
            url: "http://localhost:5001/userlogin",
            data: formdata
        }).then((res) => {
            if (res.data.status = "success") {
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem("useremail", res.data.useremail);
                sessionStorage.setItem("userid", res.data.userdata._id);
                navigate("/")
            }
            // console.log(res.data)
        })
    }

    //................Logout
    const Logout = () => {
        try {
            setUserToken(null)
            sessionStorage.removeItem('useremail');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userid');
            navigate("/login")
        }
        catch (err) {
            console.log(err)
        }
    }

    //....AdminLogin
    const AdminPanel = (formdata) => {
        axios({
            method: 'post',
            url: "http://localhost:5001/adminlogin",
            data: formdata
        }).then((res) => {
            if (res.data.status = "success") {
                sessionStorage.setItem('admin_token', res.data.token);
                sessionStorage.setItem("admin_useremail", res.data.useremail);
                sessionStorage.setItem("admin_userid", res.data.userdata._id);
                // navigate("Home")
                console.log("Working")
                window.location.href = 'http://localhost:3000/AdminPanel';
            }
            // console.log(res.data)
        })
    }

    //................AdminLogout
    const AdminLogout = () => {
        try {
            setUserToken(null)
            sessionStorage.removeItem('admin_useremail');
            sessionStorage.removeItem('admin_token');
            sessionStorage.removeItem('admin_userid');
            // navigate("/AdminPanel")
            window.location.href = 'http://localhost:3000/';

        }
        catch (err) {
            console.log(err)
        }
    }

    //.....Register
    const AdminRegistration = (formdata) => {
        axios({
            method: 'post',
            url: "http://localhost:5001/adminreg",
            data: formdata,
        }).then((res) => {
            console.log(res.data)
        })
    }

    //.......addPRoduct
    const AddProduct = (formdata) => {
        axios({
            method: 'post',
            url: "http://localhost:5001/addproduct",
            data: formdata
        }).then((res) => {
            console.log(res.data)
        })
    }

    //.....Register
    const register = (formdata) => {
        axios({
            method: 'post',
            url: "http://localhost:5001/regdata",
            data: formdata,
        }).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <Authcontext.Provider value={{ AddProduct, register, Login, Logout, AdminPanel, AdminLogout, AdminRegistration }}>
            {props.children}
        </Authcontext.Provider>
    )
}

export default AuthProvider