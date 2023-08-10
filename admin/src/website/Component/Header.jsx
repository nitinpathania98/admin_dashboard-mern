import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'
function Header() {
    const { Logout } = useContext(Authcontext);
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark text-light px-0 py-2">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2" />
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2" />
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-link text-light" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-link text-light" href><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-link text-light" href><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Gardener</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/About" className="nav-item nav-link">About</Link>
                        <Link to="/Services" className="nav-item nav-link">Services</Link>
                        <Link to="/Project" className="nav-item nav-link">Projects</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to="/Feature" className="dropdown-item">Features</Link>
                                <Link to="/Quote" className="dropdown-item">Free Quote</Link>
                                <Link to="/Team" className="dropdown-item">Our Team</Link>
                                <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/Error" className="dropdown-item">404 Page</Link>
                                <Link to="/AdminPanel" className="dropdown-item">Admin Login</Link>
                            </div>
                        </div>
                        <Link to="/Contact" className="nav-item nav-link">Contact</Link>

                        {sessionStorage.getItem("token") ?
                            <>
                                <li> <Link onClick={Logout} className="nav-item nav-link">Logout</Link></li>
                            </>
                            :
                            <>
                                <Link to="/Login" className="nav-item nav-link">Login</Link>
                                <Link to="/Register" className="nav-item nav-link">Register</Link>
                            </>

                        }

                    </div>
                    <a href className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3" /></a>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}

export default Header