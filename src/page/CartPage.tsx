import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import UserLayout from "src/components/Layout/UserLayout";
import { FaMinus, FaPlus, FaTrash, FaHeart } from "react-icons/fa"
import { useFetch } from "src/util/CustomHook";
import { formatter } from "src/util/formatCurrency";

const CartItem = ({ object, handleChangeUp, handleDeleteItem, enableButton }: { object: any, handleChangeUp: (value: any) => void, handleDeleteItem: (id: any) => void,enableButton?:boolean }) => {
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


const CartPage = () => {
  const [cookie, setCookie] = useCookies(['user']);
  const [data, setData] = useState<any>();
  const init = async () => {
    const { data: result } = await useFetch.get("/api/cart", { params: { userId: cookie.user.id } });
    setData(result);
  }
  useEffect(() => {

    init();
  }, []);

  const handleDeleteItem = async (id: any) => {
    const { data: result } = await useFetch.get("/api/cart/" + id);
    if (result == 1) {
      init();
    }
  }
  const sum = (a: any, b: any) => {
    return a + b;
  }
  const saveOrder = async (e: any) => {
    e.preventDefault();
    console.log(data);
    const param = {
      customerId: cookie.user.id,
      place: "",
      order_details: [
        ...data
      ]
    }
    const { data: result } = await useFetch.post("/api/order/save", param);
    if (result == 1) {
      window.location.href = "/my-account";
    }
  }
  console.log(data);
  const total = data?.length == 0 ? 0 : data?.map((s: any) => s.quantity * s.product.price).reduce(sum);
  return (
    <UserLayout>
      <div className="container">
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Giỏ hàng - {data?.length} sản phẩm</h5>
                  </div>
                  <div className="card-body">
                    {
                      data?.map((s: any) => {
                        const handleChangeUp = (value: any) => {
                          // data.filter((y:any)=>y.id == s.id)[0];
                          setData((e: any) => [...e, { ...s, quantity: value++ }])
                        }
                        return <CartItem enableButton={false} handleChangeUp={handleChangeUp} object={s} handleDeleteItem={handleDeleteItem} />
                      })
                    }
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p><strong>Chúng tôi chấp nhận</strong></p>
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                    <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp" alt="PayPal acceptance mark" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Hóa đơn</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {
                        data?.map((s: any) => {
                          return <>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Sản phẩm
                              <span>{s.product.name}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Giá
                              <span>{formatter.format(s.product.price)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Số lượng
                              <span>{s.quantity}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                              Thành tiền
                              <span>{formatter.format(s.quantity*s.product.price)}</span>
                            </li>
                          </>
                        })
                      }
                      {/* <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Sản phẩm
                        <span>{formatter.format(total || 0)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Giao hàng
                        <span>Gratis</span>
                      </li> */}
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Tổng đơn hàng</strong>
                          <strong>
                            <p className="mb-0">(Bao gồm VAT)</p>
                          </strong>
                        </div>
                        <span><strong>{formatter.format(total || 0)}</strong></span>
                      </li>
                    </ul>
                    <button type="button" onClick={saveOrder} className="btn btn-primary btn-lg btn-block">
                      Đi tới thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </UserLayout>
  )
}
export default CartPage;