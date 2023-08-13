import { useEffect } from "react";
import Navbar from "../Admin/Navbar";
import SideMenu from "../Admin/Sidebar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }: any) => {
    const [cookie, setCookie] = useCookies(['admin']);
    const router = useNavigate();
    useEffect(() => {
        if (!cookie.admin) {
            router("/admin/login")
        }
    }, []);
    return (
        <>
            {
                cookie.admin && <div className="container-fluid p-0" >
                    <Navbar />
                    <div className="row">
                        <SideMenu />
                        <div className="col">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default AdminLayout;