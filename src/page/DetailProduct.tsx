import { useEffect, useState } from "react";
import Carousel from "src/components/Carousel";
import UserLayout from "src/components/Layout/UserLayout";
import { useFetch, useQuery } from "src/util/CustomHook";
import { formatter } from "src/util/formatCurrency";

const DetailProduct = () =>{
    const query = useQuery();
    const [data,setData] = useState<Product>();
    useEffect(()=>{
        const init = async() =>{
            console.log(query.get("id"))
            const {data:result} = await useFetch.get(`/api/product/${query.get("id")}`,);
            setData(result);
        }
        init();
    },[]);

    return (
        <UserLayout>
            <div className="container card p-5" style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-6">
                        <Carousel/> 
                    </div>
                    <div className="col-6 text-dark">
                        <h3>{data?.name}</h3>
                        <p>Giá: {formatter.format(data?.price || 0)}</p>
                        <form className="d-flex justify-content-between">
                            <input type="hidden" name="product_id" value={data?.id} />
                            <button className="btn btn-danger" style={{width:"45%"}}>Thêm vào giỏ hàng</button>
                            <button className="btn btn-success" style={{width:"45%"}}>Trả góp</button>
                        </form>
                    </div>
                </div>
                <div className="container-fluid">
                    <h3>Thông tin sản phẩm</h3>
                    <table className="w-50">
                        <tbody>
                            <tr>
                                <td>Hệ điều hành:</td>
                                <td>{data?.os}</td>
                            </tr>
                            <tr>
                                <td>Màn hình:</td>
                                <td>{data?.screen}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </UserLayout>
    )
}
export default DetailProduct;