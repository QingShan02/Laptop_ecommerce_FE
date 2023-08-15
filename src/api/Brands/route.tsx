import { Brand } from "src/common/model/Brand";
import { useFetch } from "src/util/CustomHook";
const hostURL = "/api/brand/";
export async function findAll_Brands(page: number) {
    const brands = await useFetch.get(hostURL + "?p=" + page);
    return brands.data;
}
export async function findById_Brands(id: string | null) {
    const brands = await useFetch.get(hostURL + id);
    return brands.data;
}
export async function save_Brands(data: Brand) {
    const brands = await useFetch.post(hostURL + "save", data);
    return brands.status;
}
export async function delete_Brands(id: string | null) {
    const brands = await useFetch.delete(hostURL + id);
    return brands.status;
}
export async function update_Brands(id: string | null | number | undefined, data: Brand) {
    const brands = await useFetch.put(hostURL + id, data);
    return brands.status;
}