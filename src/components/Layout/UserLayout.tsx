import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid" style={{height:"100vh"}}>
            <Navbar />
            {children}
            <Card id={1} name="Tee Lab" price={500.01} img="https://bizweb.dktcdn.net/100/415/697/products/1-af0c84b6-d733-4bef-8dcf-d8a7d6bc30b8.jpg?v=1656673697867"/>
            <Footer/>
        </div>
    );
}

export default UserLayout;