import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Home } from './Home'

export const Cart = () => {
    const navigate = useNavigate()
  return (
    <div>
        Cart
        <br />
        <button onClick={() => navigate(-1)}>Checkout</button>
    </div>
  )
}
