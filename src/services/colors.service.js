import instance from "@/axios/axios";

class ColorsService {
    async getAll() {
        const res = await instance.get('/colors');
        return res.data;
    }
}

export default new ColorsService();