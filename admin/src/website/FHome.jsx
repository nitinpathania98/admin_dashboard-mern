import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Team from './Pages/Team'
import Testimonial from './Pages/Testimonial'
import Error from './Pages/Error'
import Feature from './Pages/Feature'
import Quote from './Pages/Quote'
import Login from './Pages/Login'
import Register from './Pages/Register'
import AdminPanel from './Pages/AdminPanel'
import AdminRegistration from './Pages/AdminRegistration'
export default function FHome() {
    return (
        <>

            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Services' element={<Services />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/Project' element={<Project />}></Route>
                <Route path='/Team' element={<Team />}></Route>
                <Route path='/Testimonial' element={<Testimonial />}></Route>
                <Route path='/Error' element={<Error />}></Route>
                <Route path='/Feature' element={<Feature />}></Route>
                <Route path='/Quote' element={<Quote />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Register' element={<Register />}></Route>
                <Route path='/AdminPanel' element={<AdminPanel />}></Route>
                <Route path='/AdminRegistration' element={<AdminRegistration />}></Route>
            </Routes>
            <Footer />

        </>
    )
}
