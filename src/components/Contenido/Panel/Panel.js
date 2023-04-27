import {useState} from "react"
import {Button, Container,Icon, Image} from "semantic-ui-react";
import { fn} from "@/utils";
import {useCart} from "@/hooks"
import {WishlistIcon} from "@/components/Shared"
import styles from "./Panel.module.scss"

export  function Panel(props) {
    console.log(props)
    const {contenidoId, contenido} = props;
    const [loading, setLoading] = useState(false)
    const { addCart } = useCart();

    const platform = contenido.platform.data;

    const buyPrice = fn.calcDiscountedPrice(contenido.price, contenido.discount)

    const addCartWrapper = () => {
        setLoading(true)
        addCart(contenidoId)


        setTimeout(() => {
            setLoading(false)
        }, 500);
    }
  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={contenido.cover.data.attributes.url}/>
      </div>


    <div className={styles.actionsContainer}>
        <div>
            <h2>{contenido.title}</h2>
            <div className={styles.moreInfo}>
                <span>
                   <Image src={platform.attributes.icon.data.attributes.url}/>
                  {platform.attributes.title}
                </span>
                <span>
                    <Icon name="check"/>
                    En stock
                </span>
            </div>
            <div className={styles.price}>
                {contenido.discount > 0 && (
                    <>
                    <span className={styles.originalPrice}>
                        <Icon name="tag"/>
                        {contenido.price}€
                    </span>
                    <span className={styles.discount}>
                        -{contenido.discount}%
                    </span>
                    </>
                )  }

                <span className={styles.price}>
                    {buyPrice}€
                </span>
            </div>
            <div>
                <Button primary fluid onClick={addCartWrapper} loading={loading}>
                    Comprar ahora
                </Button>
                <WishlistIcon contenidoId={contenidoId} className={styles.heart}/>
            </div>
        </div>
    </div>
    </Container>
  )
}
