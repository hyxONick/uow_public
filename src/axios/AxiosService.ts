import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import StorageService from "../utils/StorageService";

class AxiosService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, token?: string) {
        const headers: Record<string, string> = {};
        if (token) {
            headers['token'] = token;
        }

        this.axiosInstance = axios.create({
            baseURL,
            timeout: 5000, // Set timeout to 5 seconds
            headers,
        });

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                // Assuming the token is returned in the response data
                const token = response.data.token;
                if (token) {
                    StorageService.setLocalStorageItem('token', token);
                }
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    // Make a GET request
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    // Make a POST request
    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    // Make a PUT request
    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    // Make a DELETE request
    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }
}

export default AxiosService;
