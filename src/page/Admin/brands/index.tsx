import { useEffect, useState } from "react";
import { delete_Brands, findAll_Brands, update_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import Brands from "./BrandTable";
import BrandDetail from "./BrandDetail";

const BrandPage = () => {
    const query = useQuery();
    const [brands, setBrands] = useState<Brand[]>();
    const id = query.get("id");
    const handleClick = () => {
        const history = window.history;
        const state = {
            q: null,
        };
        const newUrl = `${window.location.origin}${window.location.pathname}`;

        history.pushState(state, "", newUrl);
        setShowPage("list");
    }
    useEffect(() => {
        findAll_Brands().then(resp => {
            setBrands(resp)
        }).catch(error => console.log(error));
    }, []);
    const [showPage, setShowPage] = useState("list");
    return (
        <AdminLayout>
            {showPage === "list" &&
                <>
                    <Brands handleChange={(() => { setShowPage("add") })} list={brands} />
                    <button className="btn btn-outline-primary me-2" onClick={(() => { setShowPage("add") })}>Tạo mới</button>
                </>
            }
            {showPage === "add" &&
                <>
                    <BrandDetail id={id} />
                    <div className="text-center">
                        <button className="btn btn-success me-2" onClick={(() => { })}>Cập nhật</button>
                        <button className="btn btn-danger me-2" onClick={(() => {
                            delete_Brands(query.get("id")).then(resp => {
                                resp === 200 ? (
                                    window.location.href = "/admin/brands"
                                )
                                    :
                                    alert("Lỗi xoá thành công !")
                            })
                        })}>Xoá</button>
                        <button className="btn btn-outline-danger me-2" onClick={handleClick}>Thoát</button>
                    </div>
                </>
            }
        </AdminLayout >
    );
}
export default BrandPage;