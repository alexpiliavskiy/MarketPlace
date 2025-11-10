import instance from "@/axios/axios";

class CategoriesService {
    async getAll() {
        const res = await instance.get('/categories');
        return res.data;
    }
}

export default new CategoriesService();