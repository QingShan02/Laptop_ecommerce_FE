import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid p-0" style={{height:"100vh",backgroundColor:"#c7c7c787"}} >
            <Navbar />
            <div className="content">{children}</div>
            <Footer/>
        </div>
    );
}

export default UserLayout;