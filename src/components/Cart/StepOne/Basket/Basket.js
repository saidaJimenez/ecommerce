import { Icon, Image, Dropdown} from "semantic-ui-react";
import { map} from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks"
import styles from "./Basket.module.scss"

export  function Basket(props) {
    const { contenidos } = props;
    const {changeQuantityItem} = useCart()


    const options = Array.from({length : 5}, (_,index) => {
        const number = index + 1 ;
        return { key: number, text: String(number), value: number}
    })

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

      <div className={styles.block}>
        {map(contenidos, (contenido) => (
            <div key={contenido.id} className={styles.products}>
                <Image src={contenido.attributes.cover.data.attributes.url}/>
                <div>
                    <div className={styles.info}>
                        <div>
                            <p>{contenido.attributes.title}</p>
                            <p>{contenido.attributes.platform.data.attributes.title}</p>
                        </div>
                        <Icon name="trash alternate online" link/>
                    </div>
                    <div className={styles.quantity}>
                        <Dropdown
                        className="number"
                        options={options}
                        selection
                        value={contenido.quantity}
                        compact
                        onChange={(_,data) => changeQuantityItem(contenido.id, data.value)}
                        />
                        <span>
                            {fn.calcDiscountedPrice(
                                contenido.attributes.price,
                                contenido.attributes.discount
                            )}€ 
                        </span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
