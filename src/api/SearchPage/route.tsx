import { useFetch } from "src/util/CustomHook";
const hostURL = "http://localhost:8080/api/";
export async function findBy_Brands_Products(page: number) {
    const brands = await useFetch.get(hostURL + "brand");
    const products = await useFetch.get(hostURL + "products?p=" + page);
    const combined = {
        brands: brands.data,
        products: products.data
    }
    return combined;
}