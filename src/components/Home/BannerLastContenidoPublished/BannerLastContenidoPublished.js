import {useState, useEffect} from "react";
import {Contenido} from "@/api"
import style from "./BannerLastContenidoPublished.module.scss";

const contenidoCtrl = new Contenido()

export  function BannerLastContenidoPublished() {
    const [contenido, setContenido] = useState(null)

    useEffect(() => {
    (async () =>{
        try {
            const response = await contenidoCtrl.getLastPublished()
            setContenido(response.data[0])
        } catch (error) {
            console.error(error);
        }
    })()
    }, [])


  return (
    <div>
      <h2>BannerLastContenidoPublished</h2>
    </div>
  )
}
