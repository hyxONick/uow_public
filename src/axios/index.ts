import AxiosService from './AxiosService';
import StorageService from "../utils/StorageService";

// Instantiate AxiosService with baseURL and token (optional)
const baseURL = 'https://api.example.com';
const token = StorageService.getLocalStorageItem<string>('token') || ''; // get in localStorage || ''
const axiosService = new AxiosService(baseURL, token);

// Export AxiosService instance
export default axiosService;