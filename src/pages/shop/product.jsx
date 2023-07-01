import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopcontext'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const { addToCart, cartProduct} = useContext(ShopContext)
    const cartProductAmount = cartProduct[id]
  return (
    <div className='p-2 shadow-md rounded-md flex flex-col'>
        <img src={productImage} alt="" className='md:h-60 border' />
        <div className="desc space-y-2">
            <h1 className='text-left text-sm font-semibold'>{productName}</h1>
            <h2>${price}</h2>
        </div>
        <button className='mt-2 p-2 border' onClick={()=>addToCart(id)}>
            Add to Cart {cartProductAmount > 0 && <>({cartProductAmount})</>}
        </button>
    </div>
  )
}
