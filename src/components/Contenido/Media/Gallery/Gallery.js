import { useState } from "react"
import{ Image } from "semantic-ui-react";
import { map } from "lodash";
import {FullModal} from "@/components/Shared"
import styles from "./Gallery.module.scss";

export  function Gallery(props) {
    const { screenshots } = props;

    const [show, setShow] = useState(false)

    const onOpenClose =() => setShow((prevState) => !prevState)

   const  screenshotsClone = [...screenshots];
   const principalImage = screenshotsClone.shift()

  
   
  return (
    <>
      <div className={styles.gallery}>
        <div className ={ styles.principal}>
        <Image src={principalImage.attributes.url} onClick={onOpenClose}/>
        </div>

        <div className ={styles.grid}>
            {map(screenshotsClone, (screenshot) => (
                <div key={screenshot.id}>
                    <Image src={screenshot.attributes.url} onClick={onOpenClose}/>
                </div>
            ))}
        </div>
      </div>
      <FullModal show={show} onClose={onOpenClose}>
        <h2>Slider de imagenes</h2>
      </FullModal>
    </>
  )
}
