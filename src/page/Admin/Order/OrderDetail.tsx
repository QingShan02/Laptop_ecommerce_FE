import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AdminLayout from "src/components/Layout/AdminLayout";
import Switcher from "src/components/Switch";
import { useFetch } from "src/util/CustomHook";
import { formatter } from "src/util/formatCurrency";

const CartItem = ({ object, handleChangeUp, handleDeleteItem, enableButton }: { object: any, handleChangeUp: (value: any) => void, handleDeleteItem: (id: any) => void, enableButton?: boolean }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    {/* Image */}
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={object.product.logo} className="w-100" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                        </a>
                    </div>
                    {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    {/* Data */}
                    <p><strong>{object.product.name}</strong></p>
                    <p>Màu sắc: {object.product.color.name}</p>
                    <button type="button" onClick={() => { handleDeleteItem(object.cartId); }} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                        <FaTrash />
                    </button>
                    <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                        <FaHeart />
                    </button>
                    {/* Data */}
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    {/* Quantity */}
                    <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        <button className="btn btn-primary px-3 me-2 h-50" disabled>
                            <FaMinus />
                        </button>
                        <div className="form-outline">
                            <input id="form1" min={0} name="quantity" value={object.quantity} type="number" className="form-control" disabled />
                            <label className="form-label" htmlFor="form1">Số lượng</label>
                        </div>
                        <button onClick={() => { handleChangeUp(object.quantity) }} className="btn btn-primary px-3 ms-2 h-50" disabled >
                            <FaPlus />
                        </button>
                    </div>
                    {/* Quantity */}
                    {/* Price */}
                    <p className="text-start text-md-center">
                        <strong>{formatter.format(object.product.price)}</strong>
                    </p>
                    {/* Price */}
                </div>
            </div>
            <hr className="my-4" />
        </>
    )
}


const OrderDetal = () => {
    const [search] = useSearchParams();
    const [data, setData] = useState<any>();
    useEffect(() => {
        const init = async () => {
            const { data: result } = await useFetch.get("/api/order/" + search.get("ordId"));
            setData(result);
        }
        if (!data) {
            init();
        }
    });
    console.log(data);


    const handleSwitcherToggle = async (checked: boolean) => {
        // Gọi API khi trạng thái thay đổi thành true
        if (checked) {
            // Thực hiện cuộc gọi API ở đây
            console.log(checked);

            try {
                const response = await useFetch.put("/api/order/update", {
                    id: data?.id,
                    buy_date: data?.buyDate,
                    place: data?.place,
                    user: data?.user,
                    status: 1
                });
                console.log('API response:', response);
            } catch (error) {
                console.error('API error:', error);
            }
        }
    };

    return (
        <AdminLayout>
            <h4 className="mt-5">Chi tiết đơn hàng</h4>
            <h6>Id: {data?.id}</h6>
            <p>Trạng thái: {data?.status == 0 ? "Đang xử lí" : "Đang giao"}</p>
            <p>Đang giao hàng : <Switcher check={data?.status === 1} onToggle={handleSwitcherToggle} /></p>
            <div className="container">
                {
                    data?.order_details.map((s: any) => {
                        return <CartItem key={s.id} object={s} handleChangeUp={function (value: any): void {
                            throw new Error("Function not implemented.");
                        }} handleDeleteItem={function (id: any): void {
                            throw new Error("Function not implemented.");
                        }} />
                    })
                }
            </div>
        </AdminLayout>
    );
}
export default OrderDetal;