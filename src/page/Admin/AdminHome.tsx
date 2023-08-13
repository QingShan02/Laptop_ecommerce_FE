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
      <div className="report">
        REPORT
      </div>
    </AdminLayout>
  );
}
export default AdminHome;