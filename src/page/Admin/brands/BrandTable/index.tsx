import { Link } from "react-router-dom";

type Props = {
    list: any;
    handleChange: () => void;
}

const BrandsTable = ({ ...props }: Props) => {
    const { list } = props;
    return (
        <div className="row mt-3">
            <div className="table-responsive-md">
                <h3 className="font-monospace"><b>Danh sách thương hiệu</b></h3>
                <table className="table">
                    <tbody><tr className="table-primary">
                        <th>Id</th>
                        <th>Tên thương hiệu</th>
                        <th>Logo</th> 
                        <th>Preview</th>
                        <th></th>
                    </tr>
                    </tbody><tbody className="table-group-divider">
                        {list?.content?.map((value: any, key: any) => {
                            return (
                                <tr className="table-default" key={key}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.logo}</td>
                                    <td><img src={value.logo} alt="..." style={{ width: "149px", height: "40px" }} /></td>
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

export default BrandsTable;