import React from 'react'
import {useNavigate} from 'react-router-dom'
export const Cart = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1);
  return (
    <div className='p-10'>
      <h1>Cart</h1>
      <button className='my-5 p-2 font-semibold text-white bg-orange-400 rounded-md' onClick={handleClick}>
        Checkout Cart
      </button>
    </div>
  )
}
