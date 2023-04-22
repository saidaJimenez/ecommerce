import {useEffect} from "react";
import { BasicLayout } from "@/layouts";

export default function SearchPage() {

    useEffect(() => {
    document.getElementById("search-contenido").focus()
    }, [])
  return (
    <>
    <BasicLayout relative isOpenSearch>
        <h2>Estamos en la busqueda </h2>
    </BasicLayout>
    </>
  )
}
