import {BasicLayout} from "@/layouts"
import { Contenido } from "@/components/Contenido"
import { Separator} from "@/components/Shared"

export default function ContenidoPage(props) {
  const { contenido } = props;
  const wallpaper = contenido.attributes.wallpaper;
    
  return (
    <>
      <BasicLayout>
      <Contenido.HeaderWallpaper
      image={wallpaper.data.attributes.url}/>
      <Contenido.Panel contenidoId={contenido.id} contenido={contenido.attributes}/>

      <Separator height={50}/>

    <Contenido.Info contenido={contenido.attributes}/>

    <Separator height={30}/>
    <Contenido.Media screenshots={contenido.attributes.screenshots.data}/>
    <Separator height={50}/>

      </BasicLayout>
    </>
  )
}
