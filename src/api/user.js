import { ENV } from "@/utils";

export class User {
    async getMe(){
     try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`

        const params = {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxODE5NjQ1LCJleHAiOjE2ODQ0MTE2NDV9.QtwthEyFKzj2u6x_H0LB8TfTTk4pqEUZ6Urs0gGdtyQ' 
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();

        if(response.status !==200) throw result;

        return result;
     } catch (error) {
        throw error
     }
    }
}