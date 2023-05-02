import { useState, useEffect} from "react";
import { Order } from "@/api";
import {useAuth} from "@/hooks"
import {NoResult} from "@/components/Shared"

const orderCtrl = new Order()

export  function Orders() {
const [orders, setOrders] = useState(null);
const { user } = useAuth()



useEffect(() => {
 (async () => {
  try {
    const response =  await orderCtrl.getAll(user.id)
    setOrders(response.data)
  } catch (error) {
    console.error(error)
  }
 })()
}, [])


if (!orders) return <NoResult text="No tienes ningun producto comprado"/>

  return (
    <div>
      <h2>Orders</h2>
    </div>
  )
}
