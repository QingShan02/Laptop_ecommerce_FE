import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import "./index.css"
const SideMenu = () => {
    return (
        <nav id="sidebar">
            <div className="custom-menu">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fa fa-bars" />
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>
            <h1><a href="index.html" className="logo">Admin</a></h1>
            <ul className="list-unstyled components mb-5">
                <li className="active">
                    <a href="#"><span className="fa fa-home mr-3" /> Quản lý thương hiệu</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-user mr-3" /> Quản lý sản phẩm</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-sticky-note mr-3" /> Quản lý đơn hàng</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-sticky-note mr-3" /> Quản lý người dùng</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-paper-plane mr-3" /> Thống kê</a>
                </li>
            </ul>
        </nav>
    )
};

export default SideMenu;
