import { size } from "lodash";
import {ENV, authFetch} from "@/utils"

export class Cart {
    add(contenidoId) {
        localStorage.setItem(ENV.CART, JSON.stringify([contenidoId]))
    }
    getAll() {
        const response = localStorage.getItem(ENV.CART)

        if(!response) {
            return []
        } else {
            return JSON.parse(response)
        }

      
    }
}