import {BasicLayout} from "@/layouts";
import {Home} from "@/components/Home";
import { Separator } from "@/components/Shared"

export default function HomePage() {
  return (
    <>
    <BasicLayout >
      <Home.BannerLastContenidoPublished/>

    <Separator height={100}/>
    </BasicLayout>
    </>
  )
}
