import React from 'react'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
  return (
    <div className='p-2 shadow-md rounded-md'>
        <img src={productImage} alt="" className='h-60' />
        <div className="desc">
            <h1 className='text-center text-sm font-semibold'>{productName}</h1>
            <h2>${price}</h2>
        </div>
    </div>
  )
}
