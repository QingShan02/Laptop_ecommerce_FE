import { useEffect, useState } from "react";
import { Product } from "src/common/model/Product";
import Card from "src/components/Card";
import Carousel from "src/components/Carousel";
import { useFetch } from "src/util/CustomHook";
import UserLayout from "../components/Layout/UserLayout";
import { Link } from "react-router-dom";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs"
const Home = () => {
  const [data, setData] = useState<any>();
  const [page,setPage] = useState(0);
  useEffect(() => {
    async function init() {
      const { data: result } = await useFetch.get("/api/products?p="+page);
      setData(result);
    }
    init();
  }, [page]);
  return (
    <UserLayout>
      <div className="card mb-3">
        <div className="card-body">
          <Carousel />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-danger">Khuyến mãi HOT</h3>
          <div className="row w-100 m-auto p-3">
            {
              data?.content?.map((s:any, key:any) => {
                return (
                  <div key={key} className="col-4">
                    <Card id={s.id} className="mt-3" data={s} />
                  </div>
                )
              })
            }
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <Link to={""} onClick={()=>setPage((e)=>e==0? data?.totalPages:e-1)} className="btn me-3"><BsArrowLeftCircle/></Link>
            <Link to={""} onClick={()=>setPage((e)=>e==data?.totalPages? 0:e+1)} className="btn"><BsArrowRightCircle/></Link>
          </div>
        </div>
      </div>
    </UserLayout>
    
  );
}
export default Home;