import { useEffect, useState } from "react";
import { findAll_Brands } from "src/api/Brands/route";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import BrandDetail from "./BrandDetail";
import Brands from "./BrandTable";

const BrandPage = () => {
    const query = useQuery();
    const id = query.get("id");
    const [showPage, setShowPage] = useState("list");
    const [showEdit, setShowEdit] = useState("");
    const [page, setPage] = useState(0);
    const [data, setData] = useState<any>();
    useEffect(() => {
        findAll_Brands(page).then(resp => {
            setData(resp)
        }).catch(error => console.log(error));
    }, [page]);

    return (
        <AdminLayout>
            {showPage === "list" &&
                <>
                    <Brands handleChange={(() => { setShowPage("add"); setShowEdit("edit") })} list={data} />
                    <span className="container-fluid">
                        <button onClick={() => { setPage(0) }} className="btn me-3">First</button>
                        <button onClick={() => { if (page > 0) setPage(page - 1) }} className="btn me-3">Prev</button>
                        <button onClick={() => { if (page < data.totalPages - 1) setPage(page + 1) }} className="btn me-3">Next</button>
                        <button onClick={() => { setPage(data.totalPages - 1) }} className="btn">Last</button>
                    </span>
                    <button className="btn btn-outline-primary" onClick={(() => { setShowPage("add"); setShowEdit("create") })}>Tạo mới</button>
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