import { useEffect, useState } from "react";
import { AiFillFastBackward, AiFillFastForward, AiFillForward, AiOutlineBackward } from "react-icons/ai";
import { findAll_Brands } from "src/api/Brands/route";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import BrandDetail from "./BrandDetail";
import BrandsTable from "./BrandTable";
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
                    <BrandsTable handleChange={(() => { setShowPage("add"); setShowEdit("edit") })} list={data} />
                    <button className="btn btn-outline-primary border-0" onClick={(() => { setShowPage("add"); setShowEdit("create") })}>Tạo mới</button>
                    <div className="row mt-1">
                        <span className="text-center">
                            <button style={{ fontSize: "30px" }} onClick={() => { setPage(0) }} className="btn border-0 me-3"><AiFillFastBackward /></button>
                            <button style={{ fontSize: "30px" }} onClick={() => { if (page > 0) setPage(page - 1) }} className="btn border-0 me-3"><AiOutlineBackward /></button>
                            <button style={{ fontSize: "30px" }} onClick={() => { if (page < data.totalPages - 1) setPage(page + 1) }} className="btn border-0 me-3"><AiFillForward /></button>
                            <button style={{ fontSize: "30px" }} onClick={() => { setPage(data.totalPages - 1) }} className="btn border-0"><AiFillFastForward /></button>
                        </span>
                    </div>
                </>
            }
            {
                showPage === "add" &&
                <>
                    <BrandDetail id={id} showEdit={showEdit} />
                </>
            }
        </AdminLayout >
    );
}
export default BrandPage;