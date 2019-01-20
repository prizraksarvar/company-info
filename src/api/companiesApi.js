import axios from 'axios';
import './companiesMocking';

class CompaniesApi {
  static async fetchAllAsync() {
    return await axios.get('/api/v1/companies').then(response => response.data);
  }
}

export default CompaniesApi;
