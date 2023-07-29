import { useFetch } from "src/util/CustomHook";
const hostURL = "http://localhost:8080/api/";
export async function findBy_Brands_Products() {
    const brands = await useFetch.get(hostURL + "brands");
    const products = await useFetch.get(hostURL + "products");
    const combined = {
        brands: brands.data,
        products: products.data
    }
    return combined;
}