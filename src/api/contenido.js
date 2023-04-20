import {ENV} from "@/utils";

export class Contenido {

    async getLastPublished(){
        try {
            const sort = "sort=publishedAt:desc";
            const pagination = "pagination[limit]=1";
            const populate = "populate=*";
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONTENIDO}?${sort}&${pagination}&${populate}`;

            const response = await fetch(url);
            const result = await response.json();

            if(response.status !==200) throw result;

            return result;

        } catch (error) {
            throw error;
        }
    }
}