import { useEffect, useState } from "react";
import { Product } from "src/common/model/Product";
import Card from "src/components/Card";
import Carousel from "src/components/Carousel";
import Search from "src/components/Search";
import { useFetch } from "src/util/CustomHook";
import UserLayout from "../components/Layout/UserLayout";
const Home = () => {
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    async function init() {
      const { data: result } = await useFetch.get("/api/products");
      setData(result);
    }
    init();
  }, []);
  return (
    <UserLayout>
      <div className="card mb-3">
        <div className="card-body">
          <Carousel />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <Search />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-danger">Khuyến mãi HOT</h3>
          <div className="row w-100 m-0">
            {
              data?.map((s, key) => {
                return (
                  <Card id={s.id} key={key} className="col-4" data={s} />
                )
              })
            }
          </div>
        </div>
      </div>

    </UserLayout>
  );
}
export default Home;