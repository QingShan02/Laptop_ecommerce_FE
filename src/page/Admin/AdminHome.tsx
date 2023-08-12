import { useEffect, useState } from "react";
import { delete_Brands, findAll_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import BrandDetail from "./brands/BrandDetail";
import Brands from "./brands/BrandTable";
const AdminHome = () => {
  // const [data, setData] = useState<Product[]>();
  // useEffect(() => {
  //   async function init() {
  //     const { data: result } = await useFetch.get("/api/products");
  //     setData(result);
  //   }
  //   init();
  // }, []);
  const query = useQuery();
  const [brands, setBrands] = useState<Brand[]>();
  const id = query.get("id");
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
          <p className="text-center">
            <button className="btn btn-success me-2" onClick={(() => { })}>Cập nhật</button>
            <button className="btn btn-danger me-2" onClick={(() => { delete_Brands(query.get("id")); alert("Delete success") })}>Xoá</button>
            <button className="btn btn-outline-danger me-2" onClick={(() => { setShowPage("list"); })}>Thoát</button>
          </p>
        </>
      }
    </AdminLayout>
  );
}
export default AdminHome;