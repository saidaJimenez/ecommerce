import { Container } from "semantic-ui-react";
import { size } from "lodash";
import {BasicLayout} from "@/layouts";
import {GridContenidos, Separator, NoResult} from "@/components/Shared"

export default function PlatformsPage(props) {

  const {contenidos, platform, pagination } = props;

  const hasProducts = size(contenidos) > 0;


    console.log(props)
  return (
    <>
      <BasicLayout relative >
        <Container>
          <Separator height={50}/>
          <h2>{platform.attributes.title}</h2>

          {hasProducts ?(
            <>
            <GridContenidos contenidos={contenidos}/>
            </>
          ) : (
            <NoResult text= {`La categoría ${platform.attributes.title} aun no tiene productos`}/>
          )}
          
          <Separator height={100}/>
        </Container>
      </BasicLayout>
    </>
  )
}
 