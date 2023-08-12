import SlideMenu from "../../components/Admin/SlideMenu";
import Navbar from "../Navbar";

const AdminLayout = ({ children }: any) => {
    return (
        <div className="container-fluid p-0" >
            <Navbar />
            <div className="row">
                <SlideMenu />
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;