import UserLayout from "src/components/Layout/UserLayout";
import "./index.css"
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import OrderItem from "./OrderItem";
import { useFetch } from "src/util/CustomHook";
import { on } from "stream";

const MyAccount = () => {
    const [cookie] = useCookies(['user']);
    const [data, setData] = useState<any>();
    const [user, setUser] = useState<any>();
    const [dataStatus0, setDataStatus0] = useState<any>();
    const [dataStatus1, setDataStatus1] = useState<any>();
    const init = async () => {
        const { data: result } = await useFetch.get("/api/order", { params: { userId: cookie.user.id } });
        setData(result);
    }

    const dataStatusDxl = async () => {
        const { data: result2 } = await useFetch.get("/api/order/fillOrdersByStatus", { params: { userId: cookie.user.id, status: 0 } });
        setDataStatus0(result2);
    }

    const dataStatusDg = async () => {
        const { data: result } = await useFetch.get("/api/order/fillOrdersByStatus", { params: { userId: cookie.user.id, status: 1 } });
        setDataStatus1(result);
    }

    useEffect(() => {
        if (cookie.user == null || cookie.user == undefined) {
            window.location.href = "/login";
            return;
        } else {
            setUser(cookie.user);
        }
        init();
        dataStatusDxl();
        dataStatusDg();
    }, []);



    // console.log(data);

    return (
        <UserLayout>
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: 200 }}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: 150 }}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{ width: 150, zIndex: 1 }} />
                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                                            Chỉnh sửa thông tin
                                        </button>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: 130 }}>
                                        <h5>{user?.fullname}</h5>
                                        <p>{user?.phone}</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p className="mb-1 h5">{data?.length || 0}</p>
                                            <p className="small text-muted mb-0">Số đơn hàng đã mua</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">Đơn hàng</p>
                                        {/* <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            <p className="font-italic mb-1">Web Developer</p>
                                            <p className="font-italic mb-1">Lives in New York</p>
                                            <p className="font-italic mb-0">Photographer</p>
                                        </div> */}
                                        <Tabs className={"py-4"}>
                                            <TabList>
                                                <Tab>Đang xử lí ({dataStatus0?.length})</Tab>
                                                <Tab>Đang giao ({dataStatus1?.length})</Tab>
                                                <Tab>Đã giao</Tab>
                                            </TabList>

                                            <TabPanel >
                                                {dataStatus0?.length == 0 ? <><div className="justify-content-center d-flex mt-4 text-primary">Không có đơn hàng nào đang xử lý</div></> :
                                                    dataStatus0?.map((s: any) => <OrderItem key={s.id} object={s} />)

                                                }
                                            </TabPanel>
                                            <TabPanel >
                                                {dataStatus1?.length == 0 ? <><div className="justify-content-center d-flex mt-4">Không có đơn hàng nào đang giao</div></> :
                                                    dataStatus1?.map((s: any) => <OrderItem key={s.id} object={s} />)
                                                }
                                            </TabPanel>
                                            <TabPanel>
                                                <h2>Any content 2</h2>
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}
export default MyAccount;