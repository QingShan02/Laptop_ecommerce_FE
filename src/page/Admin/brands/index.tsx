import { useEffect, useState } from "react";
import { findAll_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import BrandDetail from "./BrandDetail";
import Brands from "./BrandTable";

const BrandPage = () => {
    const query = useQuery();
    const [brands, setBrands] = useState<Brand[]>();
    const id = query.get("id");
    const [showPage, setShowPage] = useState("list");
    const [showEdit, setShowEdit] = useState("");

    useEffect(() => {
        findAll_Brands().then(resp => {
            setBrands(resp)
        }).catch(error => console.log(error));
    }, []);

    return (
        <AdminLayout>
            {showPage === "list" &&
                <>
                    <Brands handleChange={(() => { setShowPage("add"); setShowEdit("edit") })} list={brands} />
                    <button className="btn btn-outline-primary me-2" onClick={(() => { setShowPage("add"); setShowEdit("create") })}>Tạo mới</button>
                </>
            }
            {showPage === "add" &&
                <>
                    <BrandDetail id={id} showEdit={showEdit} />
                </>
            }
        </AdminLayout >
    );
}
export default BrandPage;