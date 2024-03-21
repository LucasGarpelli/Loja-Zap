import { useCartStore } from '@/stores/cart-store'
import { Cart } from '@/types/cart'
import React from 'react'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

type Props = {
    cartItem: Cart

}

const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state)


    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1)
    }

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1)

    }
    return (
        <div className='flex items-center gap-2 '>
            <Button
                onClick={handlePlusButton}
                variant='outline'
                size='icon'
                className='size-6'>
                <PlusIcon className='size-3' />
            </Button>
            <div className='text-sm'>{cartItem.quantity}</div>
            <Button
                onClick={handleMinusButton}

                variant='outline'
                size='icon'
                className='size-6'>
                <MinusIcon className='size-3' />
            </Button>
        </div>
    )
}

export default CartItemQuantity