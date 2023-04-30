import {Separator} from "@/components/Shared";
import {Addresses} from "./Addresses"
import styles from "./StepTwo.module.scss"

export  function StepTwo(props) {
    const {contenidos} = props
  return (
    <div className={styles.stepTwo}>
      <div className={styles.center}>
    <p>ADDRESSES</p>
    <Separator heigth={50}/>
    <Addresses/>
      </div>
      <div className={styles.rigth}>
        <p>Resume</p>
      </div>
    </div>
  )
}
