import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "src/components/Card";
import Carousel from "src/components/Carousel";
import { useFetch } from "src/util/CustomHook";
import UserLayout from "../components/Layout/UserLayout";
import { AiFillFastBackward, AiFillFastForward, AiFillForward, AiOutlineBackward } from "react-icons/ai";
const Home = () => {
  const [data, setData] = useState<any>();
  const [page, setPage] = useState(0);
  useEffect(() => {
    async function init() {
      const { data: result } = await useFetch.get("/api/products?p=" + page);
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
          <div className="row w-100 m-auto p-3">
            <h4 className="card-title text-danger font-monospace"><b>Khuyến Mãi Hot 💥</b></h4>
            {
              data?.content?.map((s: any, key: any) => {
                return (
                  <div key={key} className="col-4">
                    <Card id={s.id} className="mt-3" data={s} />
                  </div>
                )
              })
            }
          </div>
          <div className="row mt-1">
            <span className="text-center">
              <button style={{ fontSize: "30px" }} onClick={() => { setPage(0) }} className="btn border-0 me-3"><AiFillFastBackward /></button>
              <button style={{ fontSize: "30px" }} onClick={() => { if (page > 0) setPage(page - 1) }} className="btn border-0 me-3"><AiOutlineBackward /></button>
              <button style={{ fontSize: "30px" }} onClick={() => { if (page < data.totalPages - 1) setPage(page + 1) }} className="btn border-0 me-3"><AiFillForward /></button>
              <button style={{ fontSize: "30px" }} onClick={() => { setPage(data.totalPages - 1) }} className="btn border-0"><AiFillFastForward /></button>
            </span>
          </div>
        </div>
      </div>
    </UserLayout>

  );
}
export default Home;