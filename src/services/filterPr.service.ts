import axios from "axios";

const API_URL = "http://localhost:8080/api/product/filter";

interface ProductFilter {
    ram: string,
    rom: string,
    brandid: string,
    os: string,
    display: string
}
class filterService {
    filter(inputs: ProductFilter) {
        return axios.post(API_URL, inputs)
            .then(response => {
                return response.data;
            });
    }
}

export default new filterService();