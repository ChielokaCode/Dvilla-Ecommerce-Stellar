import Cart from '@/components/cart/Cart'
import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const cart = () => {

  return (
    <div>
      <NavBar/>
      <div className='h-screen'>
      <Cart/>
      </div>
      <div className='mt-auto fixed'>
      <Footer/>
      </div>
    </div>
  )
}

export default cart