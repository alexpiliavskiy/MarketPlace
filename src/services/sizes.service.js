import instance from "@/axios/axios";

class SizesService {
    async getAll() {
        const res = await instance.get('/sizes');
        return res.data;
    }
}

export default new SizesService();