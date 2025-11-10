import {authInstance} from "@/axios/axios";

class novaPoshtaService {
    async getSities (data) {
        const res= await authInstance.get('/novaposhta/cities',{params: { query: data }});
        return res.data;
    }

    async getDepartments (data) {
        const res= await authInstance.get('/novaposhta/departments',{params: { cityName: data }});
        return res.data;
    }
}

export default new novaPoshtaService();