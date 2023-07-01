import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shopcontext'
import { CartItem } from '../../components/cartitem'

export const Cart = () => {
    const { cartProduct, getTotalCartCost } = useContext(ShopContext)
    const totalCost = getTotalCartCost()
    const navigate = useNavigate()
  return (
    <div className='p-10'>
        <div>
            <h1 className='text-5xl font-bold mb-20'>Cart Items</h1>
        </div>
        <div className="cartProduct">
            {PRODUCTS.map((product) => {
                if (cartProduct[product.id] !== 0){
                    return <CartItem data={product}/>
                }
            })}
        </div>
        <div className="checkout space-y-2">
            <h1>Total: ${totalCost}</h1>
            <div className="flex justify-between">
            <button className='p-2 border' onClick={() => navigate(-1)}>
                Continue Shopping
            </button>
            <button className='ml-5 p-2 border' onClick={() => alert("Are you confirm to Checkout")}>
                Checkout
            </button>
            </div>
        </div>
    </div>
  )
}
