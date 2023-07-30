import { CartTotalProps } from "src/common/types/CartTotalProps";

const CartTotal = ({ ...props }: CartTotalProps) => {
    return (
        <>
            <div className="cart-grid-right col-xs-12 col-lg-4">
                <div className="card cart-summary border-0 mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col"><span className="card-text">{props.totalItems} sản phẩm</span></div>
                            <div className="col"><span className="card-text fw-bold float-end">$29.05</span></div>
                        </div>
                        <div className="row">
                            <div className="col"><span className="card-text">Chi phí vận chuyển</span></div>
                            <div className="col"><span className="card-text fw-bold float-end">${props.shippingPrice}</span></div>
                        </div>
                        <div className="row ms-1 mt-2">
                            <div className="col-auto"><span className="card-text">Giá chưa bao gồm thuế</span></div>
                            <div className="col"><span className="card-text fw-bold float-end">${props.priceExcludeTax}</span></div>
                        </div>

                        <hr />

                        <div className="row ms-1">
                            <div className="col-auto"><span className="card-text">Giá đã bao gồm thuế</span></div>
                            <div className="col"><span className="card-text fw-bold float-end">${props.priceIncludeTax}</span></div>
                        </div>

                        <hr />

                        <div className="row ms-1">
                            <div className="col"><span className="card-text">Tổng cộng</span></div>
                            <div className="col"><span className="card-text fw-bold">${props.totalPrice}</span></div>
                        </div>
                    </div>
                    <div className="cart-footer mt-4 d-grid col-12 mx-auto">
                        <button type="button" className="btn btn-dark btn-lg">Thanh toán</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CartTotal;