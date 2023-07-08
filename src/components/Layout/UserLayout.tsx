import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid" style={{height:"100vh"}}>
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
}

export default UserLayout;