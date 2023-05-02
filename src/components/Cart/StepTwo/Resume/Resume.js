import {useState, useEffect} from "react";
import { Button } from "semantic-ui-react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { useRouter } from "next/router"
import {forEach, map} from "lodash";
import {Cart } from "@/api";
import { useAuth, useCart} from "@/hooks";
import { fn } from "@/utils";
import styles from "./Resume.module.scss"

const cartCtrl = new Cart()

export  function Resume(props) {
    const {contenidos, addressSelected} = props;

    const [total, setTotal] = useState(null)
    const [loading, setLoading] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const { deleteAllItems } = useCart()
    const router = useRouter();


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

    const onPay = async() => {
        setLoading(true);
       
        if(!stripe || !elements){
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement)
        const result = await stripe.createToken(cardElement)
        

        if (result.error) {
            console.error(result.error.message)
        } else {
            const response = await cartCtrl.paymentCart(
            result.token,
            contenidos, 
            user.id, 
            addressSelected
            );
            if( response.status === 200) {
                deleteAllItems()
                goToStepEnd()
            } else {
                console.error ("Error al realizar el pedido")
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }

    const goToStepEnd = () => {
        router.replace({ query: {...router.query, step:3}})
    }

    if(!total) return null;
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
        <Button 
        primary 
        fluid 
        disabled={!addressSelected}
        onClick={onPay}
        loading={loading}>
            Pagar
        </Button>
      </div>
    </div>
  )
}
