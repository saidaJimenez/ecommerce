 import { useState, useEffect} from "react";
 import { useRouter} from "next/router";
 import {Contenido} from "@/api"
 import {useCart} from "@/hooks";
 import {CartLayout} from "@/layouts";
 import {Cart} from "@/components/Cart";
 import { Seo } from "@/components/Shared"


 const contenidoCtrl = new Contenido ()

export default function CartPage() {

  const { query: { step = 1 }, } = useRouter()
  const currentStep = Number(step);
  const [contenidos, setContenidos] = useState(null)
  const { cart } = useCart()

  useEffect(() => {
  (async () =>{
    try {
      const data = [];
      for await (const item of cart) {
        const response = await contenidoCtrl.getContenidoById(item.id)
       data.push({...response.data, quantity: item.quantity})
      }
      setContenidos(data)
    } catch (error) {
      console.error(error)
    }
  })()
  }, [cart])



 
  return (
    <>
    <Seo title="Carrito"/>
    <CartLayout>
      {currentStep === 1 && <Cart.StepOne contenidos={contenidos}/>}
      {currentStep === 2 && <Cart.StepTwo contenidos={contenidos}/>}
      {currentStep === 3 && <Cart.StepThree/>}
    </CartLayout>
    </>
  )

}
