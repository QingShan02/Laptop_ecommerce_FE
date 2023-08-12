import Navbar from "../Admin/Navbar";
import SideMenu from "../Admin/Sidebar";

const AdminLayout = ({ children }: any) => {
    return (
        <div className="container-fluid p-0" >
            <Navbar />
            <div className="row">
                <SideMenu />
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;