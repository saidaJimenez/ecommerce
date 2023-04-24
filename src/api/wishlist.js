import { ENV, authFetch } from "@/utils";



export class Wishlist {
    async check(userId, contenidoId) {
        try {
            const filterUser = `filters[user][id][$eq][0]=${userId}`;
            const filterContenido= `filters[contenido][id][$eq][1]=${contenidoId}`;
            const urlParams = `${filterUser}&${filterContenido}`;

            const url =`${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

            const response = await authFetch(url);
            const result = await response.json();
            
        
        if(response.status !== 200) throw result;

        if (result.data.length === 0) {
            return false;
        }
        
        return result.data[0]
        } catch (error) {
            throw error;
        }
    }
}