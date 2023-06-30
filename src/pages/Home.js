import { useState, useEffect} from 'react'
import { Product } from './Product'
import { Testimonials } from '../components/testimonials'

export const Home = () => {
  const [Items, setItems] = useState([])

  useEffect(() => {

    const fetchItems = async() =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)
      setItems(data)
    }
    fetchItems()
  } , [])
  return (
    <div className="p-5">
      <div className="hero my-10">
        <img src="../images/Hero-img.jpg" alt="" className='rounded-md mx-auto w-3/4'/>
      </div>
      <div className='p-5'>
      {
        Items.length > 0 ?
        <Product products={Items} /> : 
        <div className="">
          Loading
        </div>
      }
    </div>
    <Product />
      <div className="testimonials p-10 bg-green-300 rounded-md grid md:grid-cols-4 md:h-auto h-40 grid-cols-1 gap-5   overflow-auto">
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"
        className="lg:col-span-3"/>
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"/>
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"/>
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"/>
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"/>
        <Testimonials 
        user=""
        name="John Doe"
        desc="The products are wonderful"/>
      </div>
    </div>
  )
}
