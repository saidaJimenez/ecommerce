import {useState, useEffect} from "react"
import { size } from "lodash"
import {Wishlist as WishlistCtrl} from "@/api"
import { useAuth  } from "@/hooks";
import { NoResult} from "@/components/Shared"
import {GridContenidos} from "./GridContenidos"

const wishlistCtrl = new WishlistCtrl();

export function Wishlist () {

    const [wishlist, setWishlist] = useState(null);
    const {user } = useAuth();

    useEffect(() => {
    (async () => {
        try {
            const response = await wishlistCtrl.getAll(user.id)

            setWishlist(response)
        } catch (error) {
            console.error(error)
        }
    })()
    }, [])
    

    return size(wishlist) === 0 ? (
        <NoResult text="No tienes nigun producto en la lista de deseos"/>
    ) : (
        <GridContenidos wishlist={wishlist} />
    )
}