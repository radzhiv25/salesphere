import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data
    const { cartProduct, addToCart, removeFromCart, updateCartProductCount } = useContext(ShopContext)

    return (
        <div className='p-2 mx-auto md:w-1/2 flex shadow-md border space-x-2 my-2 md:flex-row flex-col'>
            <img src={productImage} alt="" className='m-2 rounded-md border h-60' />
            <div className="desc m-1">
                <h1 className='font-semibold mb-2'>{productName}</h1>
                <h2>${price}</h2>
                <div className="count mt-2 space-x-1">
                    <button className='font-bold border py-1 px-3 rounded-md hover:border-gray-400' onClick={() => addToCart(id)}> + </button>
                    <input value={cartProduct[id]} className='p-1 border text-center w-20 rounded-sm' onChange={(e) => updateCartProductCount(Number(e.target.value),id)} />
                    <button className='font-bold border py-1 px-3 rounded-md hover:border-gray-400'
                        onClick={() => removeFromCart(id)}> - </button>
                </div>
            </div>
        </div>

    )
}
