import { useEffect, useState } from "react";
import { delete_Users, findAll_Users } from "src/api/Customers/route";
import User from "src/common/model/Users";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useQuery } from "src/util/CustomHook";
import UserDetail from "./UserDetail";
import UserTable from "./UserTable";

const Users = () => {
    const query = useQuery();
    const [users, setUsers] = useState<User[]>();
    const id = query.get("id");
    const handleClick = () => {
        const history = window.history;
        const state = {
            q: null,
        };
        const newUrl = `${window.location.origin}${window.location.pathname}`;

        history.pushState(state, "", newUrl);
        setShowPage("list");
    }
    useEffect(() => {
        findAll_Users().then(resp => {
            setUsers(resp)
        }).catch(error => console.log(error));
    }, []);
    const [showPage, setShowPage] = useState("list");
    return (
        <AdminLayout>
            {showPage === "list" &&
                <>
                    <UserTable handleChange={(() => { setShowPage("add") })} list={users} />
                    <button className="btn btn-outline-primary me-2" onClick={(() => { setShowPage("add") })}>Create</button>
                </>
            }
            {showPage === "add" &&
                <>
                    <UserDetail id={id} />
                    <p className="text-center">
                        {id != null && <button className="btn btn-success me-2" onClick={(() => { })}>Update</button>}
                        {id != null && <button className="btn btn-danger me-2" onClick={(() => { delete_Users(query.get("id")); alert("Delete success") })}>Delete</button>}
                        <button className="btn btn-outline-danger me-2" onClick={handleClick}>Close</button>
                    </p>
                </>
            }
        </AdminLayout>
    );
}
export default Users;