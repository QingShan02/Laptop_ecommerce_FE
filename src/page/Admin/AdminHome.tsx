import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { delete_Brands, findAll_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import AdminLayout from "src/components/Layout/AdminLayout";
import BrandDetail from "./BrandDetail";
import Brands from "./Brands";
import { useQuery } from "src/util/CustomHook";
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
          <button className="btn btn-outline-primary me-2" onClick={(() => { setShowPage("add") })}>Create</button>
        </>
      }
      {showPage === "add" &&
        <>
          <BrandDetail id={id} />
          <p className="text-center">
            <button className="btn btn-success me-2" onClick={(() => { })}>Update</button>
            <button className="btn btn-danger me-2" onClick={(() => { delete_Brands(query.get("id")); alert("Delete success") })}>Delete</button>
            <button className="btn btn-outline-danger me-2" onClick={(() => { setShowPage("list"); })}>Close</button>
          </p>
        </>
      }
    </AdminLayout>
  );
}
export default AdminHome;