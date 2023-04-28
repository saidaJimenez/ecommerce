import { Container } from "semantic-ui-react"
import {Footer} from "@/components/Layout"
import {Separator } from "@/components/Shared"

export  function CartLayout(props) {
    const {children} = props;
  return (
    <>
      <p>HeaderCart</p>
      <Separator height={150}/>
      <Container>
        {children}
      </Container>
      <Separator heigth={70}/>
      <Footer/>
    </>
  )
}
