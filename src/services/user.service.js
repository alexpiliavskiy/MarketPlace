import {authInstance} from "@/axios/axios";

class UserService {
    async getCurrentUser () {
        const res= await authInstance.get('/users/current-user')
        return res.data;
    }

    async update (data) {
        const res= await authInstance.put('/users', data)
        return res.data;
    }

    async getAllVendors () {
        const res= await authInstance.get('/users/vendors');
        return res.data;
    }

    async getOneVendor (vendorId) {
        const res= await authInstance.get(`/users/vendors/${vendorId}`);
        return res.data;
    }

    async createVendor(data){
        const res = await authInstance.post('/users', {...data})
        return res.data;
    }

    async updateVendor(id, data) {
        const res = await authInstance.put('/users/update-vendor', {...data, id})
        return res.data;
    }

    async deleteVendor (vendorId) {
        const res= await authInstance.delete(`/users/vendors/${vendorId}`);
        return res.data;
    }
}

export default new UserService();