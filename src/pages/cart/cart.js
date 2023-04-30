 import { useState, useEffect} from "react";
 import { useRouter} from "next/router";
 import {Contenido} from "@/api"
 import {useCart} from "@/hooks";
 import {CartLayout} from "@/layouts";
 import {Cart} from "@/components/Cart"


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
    <CartLayout>
      {currentStep === 1 && <Cart.StepOne contenidos={contenidos}/>}
      {currentStep === 2 && <Cart.StepTwo contenidos={contenidos}/>}
      {currentStep === 3 && <p>Step THREE</p>}
    </CartLayout>
    </>
  )

}
