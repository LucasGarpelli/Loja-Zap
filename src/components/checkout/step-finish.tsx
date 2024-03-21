import { useCheckoutStore } from '@/stores/checkout-store'
import { CheckoutSteps } from '@/types/checkout-steps'
import React, { Dispatch } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { GenerateMessage } from '@/lib/generate-message'

type Props = {
  setSteps: Dispatch<React.SetStateAction<CheckoutSteps>>,
}


const StepFinish = () => {
  const { name } = useCheckoutStore(state => state)

  const message = GenerateMessage();
  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

  return (
    <div className='flex flex-col text-center gap-4 mt-3'>
      <p>Perfeito <strong>{name}</strong>!</p>
      <p>Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
      <Button>
        <Link target='_blank' href={linkZap}>Enviar para WhatsApp</Link>
      </Button>
    </div>
  )
}

export default StepFinish