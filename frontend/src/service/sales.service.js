import axios from "axios";

const API_URL = "http://localhost:8080"; 

class SalesService {

    saveSales(sales) {
        return axios.post(API_URL + "/saveSales", sales);
    }

    getAllSales() {
        return axios.get(API_URL + "/getAllSales");
    }

    getSalesById(id) {
        return axios.get(API_URL + "/getSalesById" + id);
    }

    deleteSales(id) {
        return axios.get(API_URL + "/deleteSales/" + id);
    }

    editSales(sales) {
        return axios.post(API_URL + "/editSales/" + sales.id, sales);
    }

}

export default new SalesService;