import {Contenido} from "@/api"

export { default } from "./contenido";

export async function getServerSideProps(context){
    const { params : {contenido} } = context
    
    const contenidoCtrl = new Contenido();
    const response = await contenidoCtrl.getBySlug(contenido)

    



    return {
        props:{
            contenido: response,
        }
    }
} 