import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

class Client {
    category = {
        all: (params?: any) => HttpClient.get<any>(API_ENDPOINTS.CATEGORY, params),
    }
}

const apiClient = new Client();
export default apiClient;