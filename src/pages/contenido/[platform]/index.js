import {Platform, Contenido} from "@/api"



export { default } from "./platform";

export async function getServerSideProps(context){
  const {
    params:{ platform },
    query : {page = 1},
  } = context;

    const platformCtrl = new Platform();
    
    const responsePlatform = await platformCtrl.getBySlug(platform)

    const contenidoCtrl = new Contenido();
    const responseContenidos = await contenidoCtrl.getContenidosByPlatformSlug(platform, page)
    
    return {
        props: {
            platform: responsePlatform,
            contenidos: responseContenidos.data,
            pagination: responseContenidos.meta.pagination, 
        }
    }
}