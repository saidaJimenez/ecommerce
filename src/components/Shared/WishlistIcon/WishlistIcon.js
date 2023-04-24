import { useState, useEffect } from "react";
import {Icon} from "semantic-ui-react";
import classNames from "classnames";
import {Wishlist} from "@/api";
import { useAuth } from "@/hooks";
import styles from "./WishlistIcon.module.scss"


const wishlistCtrl = new Wishlist();


export  function WishlistIcon(props) {
    const {contenidoId, className} = props

    const [hasWishlist, setHasWishlist] = useState(null);

    const { user } = useAuth()


    useEffect(() => {
      (async () => {
        try {
          const response = await wishlistCtrl.check(user.id, contenidoId)

          setHasWishlist(response)
        } catch (error) {
          setHasWishlist(false)
          console.error(error)
        }
      })()
    }, [contenidoId]);


    const addWishlist = async () => {
      const response = await wishlistCtrl.add(user.id,contenidoId);
      setHasWishlist(response)
      
    }


    const deleteWishlist = () => {
      console.log("deleteWishlist")
    }

    if(hasWishlist === null) return null;
  return (
    <div>
     <Icon
       name={hasWishlist ? "heart" : "heart outline"}
       onClick={hasWishlist ? deleteWishlist : addWishlist}
     className={classNames(styles.wishlistIcon, {
        [className]:className,
     })}/>
    </div>
  )
}
