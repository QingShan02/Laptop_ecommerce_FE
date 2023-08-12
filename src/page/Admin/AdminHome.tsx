import Carousel from "src/components/Carousel";
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
      <Carousel />
      <div className="row mt-3">
        <Carousel />
      </div>
    </AdminLayout>
  );
}
export default AdminHome;