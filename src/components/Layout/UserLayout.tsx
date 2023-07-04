import React from "react";
import Navbar from "../Navbar/index";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid">
            <Navbar />
            {children}
        </div>
    );
}

export default UserLayout;