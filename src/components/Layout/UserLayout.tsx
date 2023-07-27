import Footer from "../Footer";
import Navbar from "../Navbar";
import Search from "../Search";


function UserLayout({ children }: any) {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <Navbar />
            {children}
            <Search />

            <Footer />
        </div>
    );
}

export default UserLayout;