import{ Image } from "semantic-ui-react";
import { map } from "lodash";
import styles from "./Gallery.module.scss";

export  function Gallery(props) {
    const { screenshots } = props;

    const onOpenClose =() => {
        console.log("ABRIR GALLERY")
       }

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
    </>
  )
}
