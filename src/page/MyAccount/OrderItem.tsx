import { useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { formatter } from "src/util/formatCurrency";

const ProductItem = ({ object, quantity }: any) => {
    return (
        <>
            <div className="card-body row" >
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    {/* Image */}
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={object.logo} className="w-100" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                        </a>
                    </div>
                    {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    {/* Data */}
                    <p><strong>{object.name}</strong></p>
                    <p>Màu sắc: {object.color.name}</p>
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
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
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form1">Số lượng: {quantity}</label>
                        </div>
                    </div>
                    {/* Quantity */}
                    {/* Price */}
                    <p className="text-start text-md-center">
                        <strong>{formatter.format(object.price * quantity)}</strong>
                    </p>
                    {/* Price */}
                </div>
            </div>
            <hr className="my-4 mx-4" />
        </>
    )
}


const OrderItem = ({ object }: any) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="card mb-3" >
                <div className="card-header d-flex justify-content-between align-items-center">
                    <section>ID: {object.id} - Ngày Mua: {object.buyDate}</section>
                    <button onClick={() => setShow(!show)} className="btn btn-default">Xem chi tiết</button>
                </div>
                {
                    show && object.order_details.map((s: any) => <ProductItem key={s.orderid} object={s.product} quantity={s.quantity} />)
                }
                <div className="card-footer">
                    Địa chỉ: {object.place}
                </div>
            </div>

        </>
    );
}
export default OrderItem;