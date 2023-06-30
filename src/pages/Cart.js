import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const navigate = useNavigate()
  return (
    <div className='p-5'>
        Cart
        <br />
        <button className='mt-5 p-2 bg-orange-400 text-white rounded-md' onClick={() => navigate(-2)}>Checkout</button>
    </div>
  )
}
