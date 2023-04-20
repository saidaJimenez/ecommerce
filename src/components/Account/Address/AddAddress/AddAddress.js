import {useState } from "react"
import {Button} from "semantic-ui-react"
import {BasicModal} from "@/components/Shared"
import styles from "./AddAddress.module.scss"

export  function AddAddress() {
    const [show, setShow]= useState(false)
    
    const onOpenClose = () => setShow((prevState) => !prevState);

   

  return (
    <>
      <Button 
      primary 
      className={styles.addBtn}
       onClick={onOpenClose}>
        Crear
      </Button>
      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <h2>Contenido del basic modal</h2>
      </BasicModal>
    </>
  )
}
