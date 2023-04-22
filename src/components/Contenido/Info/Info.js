import {Container} from "semantic-ui-react"
import styles from "./Info.module.scss"

export  function Info(props) {
    const {contenido} = props;
  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{contenido.summary}</p>
      </div>

   
    </Container>
  )
}
