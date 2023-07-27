import { useEffect, useState } from "react";
import UserLayout from "../components/Layout/UserLayout";
import { useFetch } from "src/util/CustomHook";
import Card from "src/components/Card";
import Carousel from "src/components/Carousel";
const Home = () => {
  const [data, setData] = useState<Product[]>();
  useEffect(() => {
    async function init() {
      const { data: result } = await useFetch.get("/api/product");
      setData(result);
    }
    init();
  }, []);
  return (
    <UserLayout>
      <div className="card mb-3">
        <div className="card-body">
          <Carousel/>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-danger">Khuyến mãi HOT</h3>
          <div className="row w-100 m-0">
            {
              data?.map(s => {
                return (
                  <Card id={s.id} className="col-4" data={s} />
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