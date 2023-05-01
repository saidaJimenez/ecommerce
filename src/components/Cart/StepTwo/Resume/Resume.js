import {useState, useEffect} from "react";
import { Button } from "semantic-ui-react";
import {forEach, map} from "lodash";
import {Cart } from "@/api";
import { useAuth, useCart} from "@/hooks";
import { fn } from "@/utils";
import styles from "./Resume.module.scss"

export  function Resume(props) {
    const {contenidos, addressSelected} = props;

    const [total, setTotal] = useState(null)
    console.log(total)


    useEffect(() => {
    let totalTemp = 0;

    forEach(contenidos, (contenido) => {
        const price = fn.calcDiscountedPrice(
            contenido.attributes.price,
            contenido.attributes.discount
        )
            totalTemp += price * contenido.quantity
    })
    setTotal(totalTemp.toFixed(2))
    }, [contenidos])
  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.products}>
            {map(contenidos, (contenido) =>(
                <div key= {contenido.id} className={styles.product}>
                    <div>
                        <p>{contenido.attributes.title}</p>
                        <span>{contenido.attributes.platform.data.attributes.title}</span>
                    </div>
                    <span>
                        {contenido.quantity > 0 && `${contenido.quantity}x`}
                        {fn.calcDiscountedPrice(
                            contenido.attributes.price,
                            contenido.attributes.discount
                        )}€
                    </span>
                </div>
            ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
            <span>
                Total:
            </span>
            <span>{total}€</span>
        </div>
        <Button primary fluid disabled={!addressSelected}>
            Pagar
        </Button>
      </div>
    </div>
  )
}
