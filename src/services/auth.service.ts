import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(email: string, password: string) {
        return axios.post(API_URL + "login?email=" + email + "&password=" + password)
            .then(response => {
                return response.data;
            });
    }
}

export default new AuthService();