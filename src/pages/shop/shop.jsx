import React from 'react'
import { PRODUCTS } from '../../product'
import { Product } from './product'

export const Shop = () => {
  return (
    <div className='p-10'>
        <div className="">
            <h1>
            Salesphere Product
            </h1>
        </div>
        <div className="products grid grid-cols-4 gap-10">
            {
                PRODUCTS.map((product) => 
                <Product data={product}/>)
            }
        </div>
    </div>
  )
}
