import {Platform, Contenido} from "@/api"
export { default } from "./platform";

export async function getServerSideProps(context){
    const { query, params} = context;
    const { page = 1 } = query;
    const { platform } = params;

    const platformCtrl = new Platform();
    
    const responsePlatform = await platformCtrl.getBySlug(platform)

    const contenidoCtrl = new Contenido();
    const responseContenido = await contenidoCtrl.getContenidosByPlatformSlug(platform, page)
    
    return {
        props: {
            platform: responsePlatform,
            contenidos: responseContenido.data,
            pagination: responseContenido.meta.pagination, 
        }
    }
}