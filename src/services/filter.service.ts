import axios from "axios";
import { ProductFilter } from "src/common/types/ProductFilterProps";

const API_URL = "http://localhost:8080/api/product/filter";

class filterService {
    filter(inputs: ProductFilter) {
        return axios.post(API_URL, inputs)
            .then(response => {
                return response.data;
            });
    }
}

export default new filterService();