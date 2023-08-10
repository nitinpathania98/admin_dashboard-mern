import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'
import ViewProduct from './ViewProducts'
import AddProduct from './AddProduct'
import { useContext } from 'react'
import { Authcontext } from '../context/Authcontext'
function Home() {
    const { AdminLogout } = useContext(Authcontext);
    return (
        <>

            <div className="container-scroller">
                {/* partial:partials/_navbar.html */}
                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex justify-content-center">
                        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                            <a className="navbar-brand brand-logo" href="index.html"><img src="/images/logo.svg" alt="logo" /></a>
                            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="/images/logo-mini.svg" alt="logo" /></a>
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                                <span className="typcn typcn-th-menu" />
                            </button>
                        </div>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item nav-profile dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                                    <img src="/images/faces/face5.jpg" alt="profile" />
                                    <span className="nav-profile-name">Nitin Singh</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a className="dropdown-item">
                                        <i className="typcn typcn-cog-outline text-primary" />
                                        Settings
                                    </a>
                                    <a className="dropdown-item">
                                        <i className="typcn typcn-eject text-primary" />
                                        Logout
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item nav-user-status dropdown">
                                <p className="mb-0">Last login was 23 hours ago.</p>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-date dropdown">
                                <a className="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
                                    <h6 className="date mb-0">Today : Mar 23</h6>
                                    <i className="typcn typcn-calendar" />
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                    <i className="typcn typcn-cog-outline mx-0" />
                                    <span className="count" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="/images/faces/face4.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                The meeting is cancelled
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="/images/faces/face2.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                New product launch
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="/images/faces/face3.jpg" alt="image" className="profile-pic" />
                                        </div>
                                        <div className="preview-item-content flex-grow">
                                            <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                                            </h6>
                                            <p className="font-weight-light small-text text-muted mb-0">
                                                Upcoming board meeting
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-0">
                                <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                                    <i className="typcn typcn-bell mx-0" />
                                    <span className="count" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-success">
                                                <i className="typcn typcn-info mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-warning">
                                                <i className="typcn typcn-cog-outline mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Settings</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="typcn typcn-user mx-0" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="typcn typcn-th-menu" />
                        </button>
                    </div>
                </nav>
                {/* partial */}
                <nav className="navbar-breadcrumb col-xl-12 col-12 d-flex flex-row p-0">
                    <div className="navbar-links-wrapper d-flex align-items-stretch">
                        <div className="nav-link">
                            <a href="javascript:;"><i className="typcn typcn-calendar-outline" /></a>
                        </div>
                        <div className="nav-link">
                            <a href="javascript:;"><i className="typcn typcn-mail" /></a>
                        </div>
                        <div className="nav-link">
                            <a href="javascript:;"><i className="typcn typcn-folder" /></a>
                        </div>
                        <div className="nav-link">
                            <a href="javascript:;"><i className="typcn typcn-document-text" /></a>
                        </div>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item ml-0">
                                <h4 className="mb-0">Dashboard</h4>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex align-items-baseline">
                                    <p className="mb-0">Home</p>
                                    <i className="typcn typcn-chevron-right" />
                                    <p className="mb-0">Main Dahboard</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item nav-search d-none d-md-block mr-0">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search..." aria-label="search" aria-describedby="search" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="search">
                                            <i className="typcn typcn-zoom" />
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_settings-panel.html */}
                    <div className="theme-setting-wrapper">
                        <div id="settings-trigger"><i className="typcn typcn-cog-outline" /></div>
                        <div id="theme-settings" className="settings-panel">
                            <i className="settings-close typcn typcn-times" />
                            <p className="settings-heading">SIDEBAR SKINS</p>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                            <p className="settings-heading mt-2">HEADER SKINS</p>
                            <div className="color-tiles mx-0 px-4">
                                <div className="tiles success" />
                                <div className="tiles warning" />
                                <div className="tiles danger" />
                                <div className="tiles info" />
                                <div className="tiles dark" />
                                <div className="tiles default" />
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close typcn typcn-times" />
                        <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="setting-content">
                            <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                                <div className="add-items d-flex px-3 mb-0">
                                    <form className="form w-100">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                                            <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-wrapper px-3">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Team review meeting at 3.00 PM
                                                </label>
                                            </div>
                                            <i className="remove typcn typcn-delete-outline" />
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Prepare for presentation
                                                </label>
                                            </div>
                                            <i className="remove typcn typcn-delete-outline" />
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Resolve all the low priority tickets due today
                                                </label>
                                            </div>
                                            <i className="remove typcn typcn-delete-outline" />
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" defaultChecked />
                                                    Schedule meeting for next week
                                                </label>
                                            </div>
                                            <i className="remove typcn typcn-delete-outline" />
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" defaultChecked />
                                                    Project review
                                                </label>
                                            </div>
                                            <i className="remove typcn typcn-delete-outline" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="events py-4 border-bottom px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="typcn typcn-media-record-outline text-primary mr-2" />
                                        <span>Feb 11 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                                    <p className="text-gray mb-0">build a js based app</p>
                                </div>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="typcn typcn-media-record-outline text-primary mr-2" />
                                        <span>Feb 7 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                                </div>
                            </div>
                            {/* To do section tab ends */}
                            <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                                </div>
                                <ul className="chat-list">
                                    <li className="list active">
                                        <div className="profile"><img src="/images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Thomas Douglas</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">19 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="/images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                                        <div className="info">
                                            <div className="wrapper d-flex">
                                                <p>Catherine</p>
                                            </div>
                                            <p>Away</p>
                                        </div>
                                        <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                        <small className="text-muted my-auto">23 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="/images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Daniel Russell</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">14 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="/images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                                        <div className="info">
                                            <p>James Richardson</p>
                                            <p>Away</p>
                                        </div>
                                        <small className="text-muted my-auto">2 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="/images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Madeline Kennedy</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">5 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="/images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                                        <div className="info">
                                            <p>Sarah Graves</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">47 min</small>
                                    </li>
                                </ul>
                            </div>
                            {/* chat tab ends */}
                        </div>
                    </div>
                    {/* partial */}
                    {/* partial:partials/_sidebar.html */}
                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <i className="typcn typcn-device-desktop menu-icon" />
                                    <span className="menu-title">Dashboard</span>
                                    <div className="badge badge-danger">new</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                    <i className="typcn typcn-document-text menu-icon" />
                                    <span className="menu-title">Product</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="ui-basic">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <Link className="nav-link" to="/ViewProducts">View Product</Link></li>
                                        <li className="nav-item"> <Link className="nav-link" to="/AddProduct">Add new Product</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                                    <i className="typcn typcn-film menu-icon" />
                                    <span className="menu-title">Form elements</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="form-elements">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                                    <i className="typcn typcn-chart-pie-outline menu-icon" />
                                    <span className="menu-title">Charts</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="charts">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                                    <i className="typcn typcn-th-small-outline menu-icon" />
                                    <span className="menu-title">Tables</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="tables">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                                    <i className="typcn typcn-compass menu-icon" />
                                    <span className="menu-title">Icons</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="icons">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                    <i className="typcn typcn-user-add-outline menu-icon" />
                                    <span className="menu-title">User Pages</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="auth">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                                        <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                                    <i className="typcn typcn-globe-outline menu-icon" />
                                    <span className="menu-title">Error pages</span>
                                    <i className="menu-arrow" />
                                </a>
                                <div className="collapse" id="error">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://bootstrapdash.com/demo/polluxui-free/docs/documentation.html">
                                    <i className="typcn typcn-mortar-board menu-icon" />
                                    <span className="menu-title">Documentation</span>
                                </a>
                            </li>
                            {/* {sessionStorage.getItem("admin_token") ?
                                <>
                                    <li className="nav-item">
                                        <Link onClick={AdminLogout} >
                                            <a className="nav-link" href="https://bootstrapdash.com/demo/polluxui-free/docs/documentation.html">
                                                <i className="typcn typcn-power-outline menu-icon" />
                                                <span className="menu-title">Logout</span>
                                            </a>
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                </>

                            } */}
                            <li>
                                <Link onClick={AdminLogout} >

                                    <span className="menu-title">Logout</span>

                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* partial */}
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {/* ......................router..........group......... */}

                            <Routes>
                                <Route path='/ViewProducts' element={<ViewProduct />}></Route>
                                <Route path='/AddProduct' element={<AddProduct />}></Route>
                            </Routes>

                            {/* ......................end rout */}
                        </div>
                    </div>
                    {/* main-panel ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>

        </>
    )
}

export default Home