import { useEffect, useState } from "react";
import { Product } from "src/common/model/Product";
import Card from "src/components/Card";
import Carousel from "src/components/Carousel";
import { useFetch } from "src/util/CustomHook";
import AdminLayout from "src/components/Layout/AdminLayout";
const AdminHome = () => {
  // const [data, setData] = useState<Product[]>();
  // useEffect(() => {
  //   async function init() {
  //     const { data: result } = await useFetch.get("/api/products");
  //     setData(result);
  //   }
  //   init();
  // }, []);
  return (
    <AdminLayout>
      <Carousel></Carousel>
    </AdminLayout>
  );
}
export default AdminHome;