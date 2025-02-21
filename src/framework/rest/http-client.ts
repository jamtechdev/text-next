import Cookies from "js-cookie";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";  // Import AxiosRequestConfig for correct typings
import { USER_ID, AUTH_TOKEN_KEY } from "@/lib/constant";
import CryptoJS from "crypto-js";  // Import CryptoJS properly

// Your base64url function and clientToken function remain unchanged
function base64url(source: any) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
}
function clientToken() {
    //TODO Get from env CLIENT_TOKEN_KEY
    // var data = [{id: 1}, {id: 2}];
    // let token= CryptoJS.AES.encrypt(JSON.stringify(data), "RIGMEDS_WEBSITE").toString();

    let header = {
        "alg": "HS256",
        "typ": "JWT"
    };

    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = base64url(stringifiedHeader);
    const userid = Cookies.get(USER_ID);
    let data = {
        "source": 'rigmeds.shop.prod',
        "iat": new Date().getTime(),
        "exp": new Date(+new Date() + 30000).getTime(),
        "sub": userid ? parseInt(userid) : 0
    };

    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    let encodedData = base64url(stringifiedData);

    let token = encodedHeader + "." + encodedData;
    let signature = CryptoJS.HmacSHA256(token, "RIGMEDS_WEBSITE");
    // signature = base64url(signature);

    let signedToken = token + "." + signature;
    Cookies.set('clientjwt', signedToken, { sameSite: 'strict' });
    return signedToken;
}

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 5000 * 10,
    headers: {
        "Content-Type": "application/json",
    },
});

Axios.interceptors.request.use(
    (config: any) => {
        const token = Cookies.get(AUTH_TOKEN_KEY);
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token ? token : ''}`,
            "clientjwt": clientToken(),
        };
        config.withCredentials = true;  // Set withCredentials outside of headers
        return config;
    },
);

// Change response data/error here
Axios.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: AxiosError<any>) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response &&
                error.response.data.message === 'NOT_AUTHORIZED')
        ) {
            Cookies.remove(AUTH_TOKEN_KEY);
            Cookies.remove(USER_ID);
            // Router.reload();
        }
        return Promise.reject(error);
    },
);

export default Axios;

export class HttpClient {
    static async get<T>(url: string, params?: unknown) {
        const response = await Axios.get<T>(url, { params });
        return response.data;
    }

    static async post<T>(url: string, data: unknown, options?: any) {
        const response = await Axios.post<T>(url, data, options);
        return response.data;
    }

    static async put<T>(url: string, data: unknown) {
        const response = await Axios.put<T>(url, data);
        return response.data;
    }

    static async delete<T>(url: string) {
        const response = await Axios.delete<T>(url);
        return response.data;
    }


}