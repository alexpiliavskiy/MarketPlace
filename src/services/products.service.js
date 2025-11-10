import {authInstance, instance} from "@/axios/axios";

class ProductsService {
    async getAll (params) {
        const res= await instance.get('/products', { params });
        return res.data;
    }

    async getMinMaxPrice() {
        const res = await instance.get('/products/min-max-price');
        return res.data;
    }

    async getOneProduct(id) {
        const res = await instance.get(`/products/${id}`);
        return res.data;
    }

    async getAllByVendor() {
        const res = await authInstance.get('/products/vendor');
        return res.data;
    }

    async getOneByVendor(productId) {
        const res = await authInstance.get(`/products/vendor/products/${productId}`);
        return res.data;
    }

    async create(data){
        const res = await authInstance.post('/products', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    }

    async update(id, data){
        data.append("id", id)
        const res = await authInstance.put('/products', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    }

    async delete (productId) {
        const res= await authInstance.delete(`/products/vendor/products/${productId}`);
        return res.data;
    }

    async addComment (data) {
        const res = await authInstance.post('/products/comments', data);
        return res.data;
    };

}

export default new ProductsService();