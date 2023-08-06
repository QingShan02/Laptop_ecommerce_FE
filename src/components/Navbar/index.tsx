import React, { useEffect } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie"
const Navbar = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        if (window.location.pathname.includes("cart")) {
            checkLogin();
        }
    }, [cookie]);

    const checkLogin = () => {
        if (cookie.user == null || cookie.user == undefined) {
            window.location.href = "/login";
        }
    }
    const logout = () => {
        removeCookie("user");
    }
    return (
        <div className='navAll'>
            {/* header */}
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-caption">
                                <h1 className="page-title">ZU HOT</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar */}
            <div className="superNav navbar navbar-expand-lg sticky-top navbar-light p-1 shadow-sm" >
                <div className="container text-light">
                    <div className="me-xl-8" style={{ marginRight: "30px" }}>
                        <i className="bi bi-truck" /> <span className="heading-xxxs">Free shipping worldwide</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                            <span className=" me-3"><i className=' bi-envelope me-2'></i><strong>Zuhot@gmail.com</strong></span>
                            <span className="me-3"><i className="bi-phone me-1" /> <strong>1-800-123-1234</strong></span>
                        </div>
                        <ul className="nav nav-divided navbar-nav me-auto ">
                            <li className="nav-item dropdown hovered">
                                <a className="nav-link dropdown-toggle fw-bolder text-light" data-bs-toggle="dropdown" href="#" aria-expanded="false"><i className='bi bi-currency-dollar me-1'></i>USD</a>
                                <div className="dropdown-menu min-w-0">
                                    <a className="dropdown-item" href="#!">USD</a>
                                    <a className="dropdown-item" href="#!">EUR</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown hovered">
                                <a className="nav-link dropdown-toggle fw-bolder text-light" data-bs-toggle="dropdown" href="#" aria-expanded="false"><i className='bi bi-translate me-1'></i>English</a>
                                <div className="dropdown-menu min-w-0">
                                    <a className="dropdown-item" href="#">English</a>
                                    <a className="dropdown-item" href="#">French</a>
                                    <a className="dropdown-item" href="#">German</a>
                                </div>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav " style={{ marginRight: "50px" }}>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder text-light" href=""><i className='bi bi-truck me-1'></i>Shipping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder text-light" href=""><i className='bi bi-question me-1'></i>FAQ</a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav flex-row ">
                            <li className='nav-item'><a className=" nav-link" href="#"><i className='bi bi-facebook text-light'></i></a></li>
                            <li className='nav-item'><a className=" nav-link" href="#"><i className='bi bi-twitter text-light'></i></a></li>
                            <li className='nav-item'><a className=" nav-link" href="#"><i className='bi bi-instagram text-light'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-section px-5">
                <div className="container-fluid">
                    <div className="card-block bg-white">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                {/* section-title */}
                                <div className="section-title mb-0">
                                    <div className='nav1'>
                                        <nav className="navbar navbar-expand-lg bg-white  navbar-light p-3 shadow">
                                            <div className="container">
                                                <Link className="navbar-brand" to="/"><i className="fa-solid fa-shop me-2" /> <strong>Zu Hot</strong></Link>
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon" />
                                                </button>
                                                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                                                    <div className="ms-auto d-none d-lg-block search">
                                                        <div className="input-group">
                                                            <span className="border-secondary input-group-text bg-dark text-white"><i className="fa-solid fa-magnifying-glass" /></span>
                                                            <input type="text" className="form-control border-dark" style={{ color: '#7a7a7a' }} />
                                                            <button className="btn btn-dark text-white">Search</button>
                                                        </div>
                                                    </div>
                                                    <ul className="navbar-nav ms-auto ">
                                                        <li className="nav-item">
                                                            <a className="nav-link mx-2 text-uppercase fw-bolder" aria-current="page" href="#">Offers</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link mx-2 text-uppercase fw-bolder" href="/search">Products</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link mx-2 text-uppercase fw-bolder" href="#">About</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav ms-auto ">
                                                        <li className="nav-item">
                                                            <Link className="nav-link mx-2 text-uppercase fw-bolder" onClick={checkLogin} to="/cart"><i className="fa-solid fa-cart-shopping me-1" /><i className='bi bi-cart me-1'></i>Giỏ hàng</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="nav-link mx-2 text-uppercase fw-bolder" to={cookie.user == null || cookie.user == undefined ? "/login" : "/my-account"}><i className="fa-solid fa-circle-user me-1" /><i className='bi bi-person me-1'></i> {cookie.user?.fullname || 'Đăng nhập'}</Link>
                                                        </li>
                                                        <li className={`nav-item ${cookie.user == null || cookie.user == undefined ? 'd-none' : 'd-block'}`}>
                                                            <button onClick={logout} className='nav-link mx-2 text-uppercase fw-bolder'>Đăng xuất</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                {/* /.section-title */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;