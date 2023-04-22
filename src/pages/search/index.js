import {Contenido} from "@/api";


export { default } from "./search";


export async function getServerSideProps(context){
    const {
        query: {s, page = 1}} = context
        
     const contenidoCtrl = new Contenido();
     const response = await contenidoCtrl.searchContenidos(s, page)

    return {
        props: {
            contenidos:response.data,
            pagination:response.meta.pagination,
            searchText: s,
        },
    };
}