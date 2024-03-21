import React from 'react'
import Logo from '@/components/logo'
import { ThemeToggle } from './theme-toggle'
import CartSidebar from './cart/sidebar'

const Header = () => {
  return (
    <header className='flex justify-between items-center my-5 mx-3'>
      <div className='flex items-center gap-3'>
        <Logo />
        <ThemeToggle />
      </div>
      <div className='flex items-center gap-3'>
        <CartSidebar/>
      </div>
    </header>
  )
}

export default Header