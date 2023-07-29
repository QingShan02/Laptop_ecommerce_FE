import { LoginProps } from './../common/types/LoginProps';
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(inputs: LoginProps) {
        return axios.post(API_URL + "login", inputs)
            .then(response => {
                return response.data;
            });
    }
}

export default new AuthService();