import {Basket} from "./Basket"
import {Resume} from "./Resume"
import styles from "./StepOne.module.scss"

export  function StepOne(props) {

    const { contenidos } = props
  return (
    <div className={styles.stepOne}>
       <div className={styles.center}>
        <Basket contenidos={contenidos}/>
       </div>
       <div className={styles.right}>
        <Resume contenidos={contenidos}/>
       </div>
    </div>
  )
}
