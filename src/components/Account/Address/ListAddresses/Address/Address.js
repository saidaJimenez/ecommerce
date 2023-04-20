import { useState} from "react";
import {Button, Icon} from "semantic-ui-react"
import {BasicModal} from "@/components/Shared"
import { AddressForm } from "../../AddressForm"
import styles from "./Address.module.scss";



export  function Address(props) {
    const { addressId, address, onReload} = props; 
    const [showEdit, setShowEdit] = useState(false)

    const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  return (
    <>
      <div className={styles.address}>
        <div>
        <p className={styles.title}>{address.title}:</p>
        <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{" "}
            {address.postal_code}
        </p>
        </div>
   
    <div className={styles.actions} onClick={openCloseEdit}>
        <Button primary icon>
            <Icon name="pencil"/>
        </Button>
        <Button primary icon>
            <Icon name="delete"/>
        </Button>
    </div>
      </div>

      <BasicModal 
      show={showEdit} 
      onClose ={openCloseEdit} 
      title="Editar dirección">
        <AddressForm 
        onClose={openCloseEdit} 
        onReload={onReload}
        addressId={addressId}
        address={address}/>
      </BasicModal>
    </>
  )
}
