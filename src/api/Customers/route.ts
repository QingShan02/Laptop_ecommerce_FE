
import Users from "src/common/model/Customer";
import { useFetch } from "src/util/CustomHook";
const hostURL = "/users/";
export async function findAll_Users() {
    const Users = await useFetch.get(hostURL);
    return Users.data;
}
export async function findById_Users(id: string | null) {
    const Users = await useFetch.get(hostURL + id);
    return Users.data;
}
export async function save_Users(data: Users) {
    const Users = await useFetch.post(hostURL + "save", data);
    return Users.data;
}
export async function delete_Users(id: string | null) {
    const Users = await useFetch.delete(hostURL + id);
    return Users.data;
}
export async function update_Users(id: string | null, data: Users) {
    const Users = await useFetch.put(hostURL + id, data);
    return Users.data;
}