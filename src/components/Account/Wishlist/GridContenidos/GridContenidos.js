import Link from "next/link";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./GridContenidos.module.scss"

export function GridContenidos(props) {
     const { wishlist } = props 

     
return (
    <div className = {styles.gridContenidos}>
     {map(wishlist, (item) => {
        const contenido = item.attributes.contenido.data
     

        return (
    <div key={item.id} className={styles.contenido}>
        <Link href ={`/${contenido.attributes.slug}`}>
            <div>
            <img src ={contenido.attributes.cover.data.attributes.url}/>
            {contenido.attributes.discount > 0 && (
                <Label.Discount className={styles.discount}>
                    {`-${contenido.attributes.discount}%`}
                </Label.Discount>
            )}
            </div>
            <div>
                <span>{contenido.attributes.title}</span>
                <span className={styles.price}>
                    {fn.calcDiscountedPrice(
                        contenido.attributes.price, 
                        contenido.attributes.discount)}€
                </span>
            </div>
        </Link>
        
    </div>
)
    })}
</div>
)
}