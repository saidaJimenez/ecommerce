import {BasicLayout} from "@/layouts"
import { Contenido } from "@/components/Contenido"

export default function ContenidoPage(props) {
  const { contenido } = props;
  const wallpaper = contenido.attributes.wallpaper;
    
  return (
    <>
      <BasicLayout>
      <Contenido.HeaderWallpaper
      image={wallpaper.data.attributes.url}/>
      </BasicLayout>
    </>
  )
}
