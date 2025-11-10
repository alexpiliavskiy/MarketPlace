import {authInstance} from "@/axios/axios";

class BasketService {
    async getItems() {
        const res = await authInstance.get('/baskets');
        return res.data;
    }

    async addItem(productId, count, size, color) {
        const res = await authInstance.post('/baskets', { productId, count, size, color });
        return res.data;
    }

    async removeItem(productId) {
        const res = await authInstance.delete('/baskets', { data: { id: productId } });
        return res.data;
    }
}

export default new BasketService();