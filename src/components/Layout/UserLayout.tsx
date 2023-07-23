import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Details from "../Details";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <Navbar />
            <Details />
            {children}
            <Footer />
        </div>
    );
}

export default UserLayout;