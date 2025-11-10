import {authInstance} from "@/axios/axios";

class WishlistService {
    async getItems() {
        const res = await authInstance.get('/wishlists');
        return res.data;
    }

    async addItem(productId) {
        const res = await authInstance.post('/wishlists', { productId });
        return res.data;
    }

    async removeItem(productId) {
        const res = await authInstance.delete('/wishlists', { data: { productId } });
        return res.data;
    }
}

export default new WishlistService();