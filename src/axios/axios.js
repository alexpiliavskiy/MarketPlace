import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import authService from "@/services/auth.service";
import userService from "@/services/user.service";
import {addCurrentUser} from "@/store/actions";
import {store} from "@/store/store";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API + "/api",
});

const authInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API + "/api",
});

authInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
);

authInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) =>  {
       const originalRequest = error.config;
       // await authInstance.request(originalRequest);
        if (error.response.status === 401 && originalRequest && !originalRequest.isRetry) {
            originalRequest.isRetry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const tokens = await authService.refresh(refreshToken);
                localStorage.setItem('refreshToken', tokens.refreshToken);
                localStorage.setItem('accessToken', tokens.accessToken);
                const currentUser = await userService.getCurrentUser();
                store.dispatch(addCurrentUser(currentUser));
                if (originalRequest.url !== "/users/current-user") {
                    await authInstance.request(originalRequest)
                }
            } catch (e) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                console.log(e);
            }
        }
    }
)

export default instance;


export {
    authInstance,
    instance,
}
