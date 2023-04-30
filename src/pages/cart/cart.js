 import { useRouter} from "next/router"
 import {CartLayout} from "@/layouts"

export default function CartPage() {

  const { query: { step = 1 }, } = useRouter()
  const currentStep = Number(step);

 
  return (
    <>
    <CartLayout>
      {currentStep === 1 && <p>Step ONE</p>}
      {currentStep === 2 && <p>Step TWO</p>}
      {currentStep === 3 && <p>Step THREE</p>}
    </CartLayout>
    </>
  )

}
