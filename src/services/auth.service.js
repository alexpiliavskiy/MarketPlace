"use client";

import {authInstance, instance} from "@/axios/axios";

class AuthService {
    async registration (data) {
        const res= await instance.post('/auth/registration', data)
        return res.data;
    }

    async login (data) {
        const res= await instance.post('/auth/login', data)
        return res.data;
    }

    async refresh (refreshToken) {
        const res= await instance.post('/auth/refresh', {refreshToken});
        return res.data;
    }

    async logout(refreshToken) {
        const res= await instance.delete('/auth/logout', {data: {refreshToken}});
        return res.data;
    }

    async confirmEmail(token) {
        const res= await instance.get('/auth/confirm-email', { params: {token} })
        return res.data;
    }
}

export default new AuthService();