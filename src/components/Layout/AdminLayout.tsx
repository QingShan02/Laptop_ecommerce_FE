import SlideMenu from "../../components/Admin/SlideMenu"
import Login from "../Login";

const AdminLayout = ({ children }: any) => {
    return (
        <div className="container-fluid p-0" >
            <div className="wrapper d-flex align-items-stretch bg-dark text-bg-dark">
                <SlideMenu />
                {/* Page Content  */}
                <div id="content" className="p-4 p-md-5 pt-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;