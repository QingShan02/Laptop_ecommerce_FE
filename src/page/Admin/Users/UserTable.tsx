import { Link } from "react-router-dom";
import Users from "src/common/model/Users";

type Props = {
    list: Users[] | undefined;
    handleChange: () => void;
}

const UserTable = (props: Props) => {
    const { list } = props;
    return (
        <div className="row mt-3">
            <div className="table-responsive-md">
                <h3>List Users</h3>
                <table className="table table-hover">
                    <tbody><tr className="table-primary">
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                    </tbody><tbody className="table-group-divider">
                        {list?.map((value, key) => {
                            return (
                                <tr className="table-default" key={key}>
                                    <td>{value.id}</td>
                                    <td>{value.fullname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.admin ? "Admin" : "Customer"}</td>
                                    <td><Link to={"/admin/users?id=" + value.id} onClick={props.handleChange} className="text-decoration-none">Edit</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserTable;