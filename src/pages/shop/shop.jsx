import React from 'react'
import { PRODUCTS } from '../../product'
import { Product } from './product'
import { Footer } from '../../components/footer'

export const Shop = () => {
  return (
    <div className='p-10'>
        <div className="hero flex flex-col mx-auto">
            <h1 className='text-center text-5xl font-bold mb-20 '>
            Salesphere
            </h1>
            <div className="hero-img flex md:flex-row flex-col gap-10">
            <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="" className='mx-auto md:w-1/2 rounded-md'/>
            <p className='md:w-1/2 text-lg my-auto'>
            Salesphere Bio is a pioneering biotechnology company that specializes in developing and commercializing advanced therapeutics. With a focus on innovation and scientific excellence, Salesphere Bio aims to transform patient care by creating groundbreaking treatments that address unmet medical needs.
            </p>
            </div>
        </div>
            <h1 className='text-center text-3xl font-bold my-20'>
                Featured Products
            </h1>
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
