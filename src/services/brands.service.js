import instance from "@/axios/axios";

class BrandsService {
    async getAll() {
        const res = await instance.get('/brands');
        return res.data;
    }
}

export default new BrandsService();