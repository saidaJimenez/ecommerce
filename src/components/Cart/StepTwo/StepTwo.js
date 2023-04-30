import {useState} from "react"
import {Separator} from "@/components/Shared";
import {Addresses} from "./Addresses"
import styles from "./StepTwo.module.scss"

export  function StepTwo(props) {
    const {contenidos} = props;
    const [addressSelected, setAddressSelected] = useState(null)
    
  return (
    <div className={styles.stepTwo}>
      <div className={styles.center}>
      <Addresses  addressSelected={addressSelected} setAddressSelected={setAddressSelected}/>
    <Separator heigth={50}/>
    {addressSelected &&  <p>PAYMEN</p> }
    
      </div>
      <div className={styles.rigth}>
        <p>Resume</p>
      </div>
    </div>
  )
}
