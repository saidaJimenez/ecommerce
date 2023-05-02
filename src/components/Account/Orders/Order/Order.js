import {DateTime} from "luxon"
import { forEach } from "lodash"
import styles from "./Order.module.scss"

export function Order(props) {
    const { order } = props
    const createdAt = new Date(order.attributes.createdAt).toISOString()
    const products = order.attributes.products

    const getTotalProducts = () => {
        let total = 0;

        forEach(products,(product) => {
            total += product.quantity
        })
        return total;

    }
  return (
    <>
      <div className={styles.order}>
        <div>
            <span>{DateTime.fromISO(createdAt, {locale:"es"}).toFormat("dd/MM/yyyy")}</span>
            <p> {getTotalProducts()} productos</p>
        </div>
        <p>{order.attributes.totalPayment.toFixed(2)}€</p>
      </div>
    </>
  )
}
