import { forEach } from "lodash";
import {ENV, authFetch} from "@/utils"

export class Cart {
    add(contenidoId) {
        const contenidos = this.getAll();

        const objIndex = contenidos.findIndex((contenido) => contenido.id === contenidoId)

        if(objIndex < 0) {
            contenidos.push(
                {
                    id: contenidoId,
                    quantity:1
                }
            )
        } else {
            const contenido = contenidos[objIndex]
           contenidos [objIndex].quantity = contenido.quantity + 1
        }


        localStorage.setItem(ENV.CART, JSON.stringify(contenidos))
    }
    getAll() {
        const response = localStorage.getItem(ENV.CART)

        if(!response) {
            return []
        } else {
            return JSON.parse(response)
        }

      
    }
    count(){
        const response = this.getAll();
        let count = 0

        forEach(response, (item) => {
            count += item.quantity
        } )
        return count
    }
    changeQuantity(contenidoId, quantity){
        const contenidos = this.getAll();
        const objIndex = contenidos.findIndex((contenido) => contenido.id === contenidoId)

        contenidos[objIndex].quantity = quantity;

        localStorage.setItem(ENV.CART, JSON.stringify(contenidos))
    }
    delete(contenidoId){
        const contenidos = this.getAll();

        const updateContenidos = contenidos.filter((contenido) => contenido.id !== contenidoId)

        localStorage.setItem(ENV.CART, JSON.stringify(updateContenidos))
    }

    deleteAll(){
        localStorage.removeItem(ENV.CART)
    }

    async paymentCart(token, products, idUser, address){
        try {
      

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`

            const params ={
                method:"POST",
                headers : {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    products,
                    idUser,
                    addressShipping : address
                })
            };
            const response = await authFetch( url, params);

            return response;
        } catch (error) {
            throw error;
        }
    }
}