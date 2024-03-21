import axios from "axios";

const API_URL = "http://localhost:8080"; 

class CustomerService {

    getAllProducts() {
        return axios.get(API_URL + "/customers");
    }

}

export default new CustomerService;