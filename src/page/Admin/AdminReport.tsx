import AdminLayout from "src/components/Layout/AdminLayout";
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductReport } from "src/common/model/ProductReport";
import Users from "src/common/model/Customer";
import { useFetch } from "src/util/CustomHook";
import axios from "axios";
import { Product } from "src/common/model/Product";

const AdminHome = () => {
  const [data, setData] = useState<ProductReport[]>();
  const [customersBuyMostInMonth, setCustomersBuyMostInMonth] = useState<Users[]>();
  const [productsBuyMostInMonth, setProductsBuyMostInMonth] = useState<Product[]>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const init = async () => {
      fetchData(startDate, endDate);
      fetchCustomersBuyMostInMonth();
      fetchProductsBuyMostInMonth();
    }

    init();
  }, [startDate, endDate]);

  const fetchData = async (startDate: any, endDate: any) => {
    const url = `/api/order-detail/products-sold?startDate=${startDate}&endDate=${endDate}`;
    try {
      const response = await useFetch.get(url);
      const result = response.data;
      setData(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCustomersBuyMostInMonth = async () => {
    const url = `/api/users/customers-buy-most-in-month`;
    try {
      const response = await useFetch.get(url);
      const result = response.data;
      setCustomersBuyMostInMonth(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchProductsBuyMostInMonth = async () => {
    const url = `/api/products-buy-most-in-month`;
    try {
      const response = await useFetch.get(url);
      const result = response.data;
      setProductsBuyMostInMonth(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row m-auto">
        <div className="col p-2">
          <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
              <h5 className="card-title">Sản phẩm được đặt mua nhiều nhất trong tháng</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Số sản phẩm {productsBuyMostInMonth?.length}</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Hình</th>
                    <th scope="col">Id</th>
                    <th scope="col">Tên</th>
                  </tr>
                </thead>
                <tbody>
                  {productsBuyMostInMonth?.map((pro, index) => {
                    return <tr key={index}>
                      <th scope="row"><img src={`${pro.logo}`} alt={`${pro.name}`} style={{ width: "70px" }} /></th>
                      <td>{pro.id}</td>
                      <td>{pro.name}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col p-2">
          <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
              <h5 className="card-title">Khách hàng đặt mua nhiều nhất trong tháng</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Số khách hàng {customersBuyMostInMonth?.length}</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {customersBuyMostInMonth?.map((cus, index) => {
                    return <tr key={index}>
                      <th scope="row">{cus.id}</th>
                      <td>{cus.fullname}</td>
                      <td>{cus.phone}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <form className="row g-3">
          <h3 className="col-md-6">Tổng số sản phẩm đã bán từ ngày: </h3>
          <div className="form-floating col-md mx-3">
            <input
              className="form-control"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="floatingSelect">Từ ngày</label>
          </div>

          <div className="form-floating col-md">
            <input
              className="form-control"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label htmlFor="floatingSelect">Đến ngày</label>
          </div>
        </form>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Ảnh</th>
            <th scope="col">Id</th>
            <th scope="col">Tên</th>
            <th scope="col">Tổng số lượng</th>
            <th scope="col">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr>
                <th scope="row"><img src={`${item.productLogo}`} alt={item.productName} style={{ width: "70px" }} /></th>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.totalQuantity}</td>
                <td>{item.totalPrice} VND</td>
              </tr>
            );
          })}

          {data && data.length > 0 ?
            <tr>
              <td colSpan={4} className="h5 py-3 ps-5">Tổng tiền</td>
              <td>{data?.reduce((total, item) => total + item.totalPrice, 0)} VND</td>
            </tr>
            : null}

        </tbody>
      </table>
    </div>
  );
}

export default AdminHome;
