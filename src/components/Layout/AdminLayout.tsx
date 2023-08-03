import SlideMenu from "../../components/Admin/SlideMenu"

const AdminLayout = ({ children }: any) => {
    return (
        <div className="container-fluid p-0" >
            <SlideMenu/>
        </div>
    );
}

export default AdminLayout;