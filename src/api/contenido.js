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
    async getLatestPublished ({limit = 9, platformId = null}){
        try {
            const filterPlatform = platformId && `filters[platform][id][$eq]=${platformId}`;
            const paginationLimit = `pagination[limit]=${limit}`;
            const sort = `sort[0]=publishedAt:desc`;
            const populate =`populate=*`;
    
            const urlParams =`${sort}&${paginationLimit}&${filterPlatform}&${populate}`;  
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONTENIDO}?${urlParams}`;
    
            const response = await fetch(url);
            const result = await response.json();
    
            if ( response.status !==200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
       }
       async getContenidosByPlatformSlug(slug, page) {
        try {
            const filters = `filters[platform][slug][$eq]=${slug}`;
            const pagination = `pagination[page]&pagination[pageSize]=30`;
            const populate = "populate=*";
            const urlParams =`${filters}&${pagination}&${populate}`

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONTENIDO}?${urlParams}`

            const response = await fetch(url);
            const result = await response.json();

            if(response.status !==200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
       }
       async searchContenidos(text, page){
        try {
          const filters =`filters[title][$contains]=${text}` ;
          const pagination =`pagination[page]=${page}&pagination[pageSize]=30`;
          const populate ="populate=*"

          const urlParams = `${filters}&${pagination}&${populate}`;

          const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONTENIDO}?${urlParams}`;

          const response = await fetch(url);
          const result = await response.json();

          if(response.status !== 200) throw result;
          return result;
        } catch (error) {
            throw error;
        }
       }
     }
        
