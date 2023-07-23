import Footer from "../Footer";
import Login from "../Login";
import Navbar from "../Navbar";

function UserLayout({ children }: any) {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <Navbar />
            {children}

            <Login />

            <Footer />
        </div>
    );
}

export default UserLayout;