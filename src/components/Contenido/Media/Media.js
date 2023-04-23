import { Container } from "semantic-ui-react";
import { Gallery } from "./Gallery"
import {Separator} from "@/components/Shared"
export function Media(props) {
    const {screenshots}=props;
      return (
    <Container>
      <h2>Galeria de fotos </h2>
      <Separator height={30}/>
      <Gallery screenshots={screenshots}/>
    </Container>
  )
}
