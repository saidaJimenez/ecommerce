import { Container } from "semantic-ui-react"
import {BasicLayout} from "@/layouts";
import {Home} from "@/components/Home";
import { Separator ,BarTrust } from "@/components/Shared"

export default function HomePage() {
  return (
    <>
    <BasicLayout >
      <Home.BannerLastContenidoPublished/>

    <Separator height={100}/>

    <Container>
    <Home.LatestContenidos title="Ultimos lanzamientos"/>
    </Container>

   
   <Separator height={100}/>

    <BarTrust/>
   <Separator height={100}/>

    </BasicLayout>
    </>
  )
}
