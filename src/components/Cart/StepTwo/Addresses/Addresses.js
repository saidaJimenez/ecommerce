import {useState, useEffect} from "react"
import {Address} from "@/api";
import { useAuth } from "@/hooks"
import styles from "./Addresses.module.scss"

const addressCtrl = new Address()

export  function Addresses() {
    const [addresses, setAddresses] = useState(null);
    const {user} = useAuth()
    console.log(addresses)

    useEffect(() => {
    (async () => {
        try {
            const response = await addressCtrl.getAll(user.id);
            setAddresses(response)
        } catch (error) {
            console.error(error)
        }
    })()
    }, [])
  return (
    <div>
      <h2>Addresses</h2>
    </div>
  )
}
