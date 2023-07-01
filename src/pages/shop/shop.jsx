import React from 'react'
import { PRODUCTS } from '../../product'
import { Product } from './product'
import { Footer } from '../../components/footer'

export const Shop = () => {
  return (
    <div className='p-10'>
        <div className="">
            <h1>
            Salesphere Product
            </h1>
        </div>
        <div className="products grid md:grid-cols-4 grid-cols-1 gap-10">
            {
                PRODUCTS.map((product) => 
                <Product data={product}/>)
            }
        </div>
        <Footer />
    </div>
  )
}
