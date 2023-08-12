import { Link } from "react-router-dom";
import { Brand } from "src/common/model/Brand";

type Props = {
    list: Brand[] | undefined;
    handleChange: () => void;
}

const Brands = ({ ...props }: Props) => {
    const { list } = props;
    return (
        <div className="row mt-3">
            <div className="table-responsive-md">
                <h3>Danh sách thương hiệu</h3>
                <table className="table table-hover">
                    <tbody><tr className="table-primary">
                        <th>Id</th>
                        <th>Tên thương hiệu</th>
                        <th>Logo</th>
                        <th></th>
                    </tr>
                    </tbody><tbody className="table-group-divider">
                        {list?.map((value, key) => {
                            return (
                                <tr className="table-default" key={key}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.logo}</td>
                                    <td><Link to={"/admin/brands?id=" + value.id} onClick={props.handleChange} className="text-decoration-none">Sửa</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Brands;