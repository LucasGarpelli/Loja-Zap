'use client'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { RocketIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { useCartStore } from '@/stores/cart-store'
import CartItem from './item'
import CheckoutDialog from '../checkout/dialog'


const CartSidebar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { cart } = useCartStore(state => state);

    let subTotal = 0;
    for (let item of cart) {
        subTotal += item.quantity * item.product.price;
    }


    return (

        <Sheet>
            <SheetTrigger asChild>
                <Button className='relative'>
                    <RocketIcon className='mr-2 ' />
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className='absolute size-3 bg-red-600 rounded-full -right-1 -top-1'></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                    <SheetDescription className='space-y-4'>
                        <div className='flex flex-col gap-5 my-3  '>
                            {cart.map(item => (
                                <CartItem key={item.product.id} item={item}/>
                            ))}
                        </div>

                        <Separator />

                        <div className='flex justify-between items-center text-sm'>
                            <div>SubTotal:</div>
                            <div>{subTotal.toFixed(2)}</div>
                        </div>
                        <Separator />
                        <div className='text-center'>
                            <Button 
                            onClick={() => setCheckoutOpen(true)}
                            disabled={cart.length === 0  }
                            >Finalisar Compra</Button>
                        </div>
                    </SheetDescription>
                </SheetHeader>
                <CheckoutDialog
                open ={checkoutOpen}
                onOpenChange={setCheckoutOpen}
                />
            </SheetContent>
        </Sheet>
    )
}

export default CartSidebar