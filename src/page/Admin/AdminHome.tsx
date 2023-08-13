import AdminLayout from "src/components/Layout/AdminLayout";
import AdminReport from "../Admin/AdminReport";
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
      <AdminReport />
    </AdminLayout>
  );
}
export default AdminHome;