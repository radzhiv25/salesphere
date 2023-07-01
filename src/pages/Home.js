import React from "react";
import { Product } from "./Product";
import { useState, useEffect } from "react";


export const Home = () => {

  const [items, setItems] = useState([])
  useEffect(()=>{
    const fetchItems = async() => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setItems(data)
    }
    fetchItems()
  })

  return (
    <div className="p-10">
      <div className="hero flex md:flex-row gap-5 flex-col">
        <div className="left-cont my-auto md:w-1/2 space-y-3">
          <h1 className="text-2xl font-semibold">Here at Salesphere</h1>
          <p>
            Salesphere is a leading e-commerce company that specializes in
            providing comprehensive solutions for businesses looking to
            establish and optimize their online presence. Founded in 2023,
            Salesphere has quickly emerged as a trusted partner for companies
            across various industries, offering a wide range of services and
            cutting-edge technologies to enhance their digital sales strategies.
          </p>
            <div className="hero-btn  flex gap-5">
              <button className="p-2 bg-gray-400 text-white">
                Products
              </button>
              <button className="p-2 text-white bg-blue-400">
                Go to Cart
              </button>
            </div>
        </div>
        <div className="right-cont md:w-1/2">
          <img src="/images/hero-img.jpg" alt="" className="rounded-sm"/>
        </div>
      </div>
      <div className="my-20 text-center">
        Our products
      </div>

      {
        items.length > 0 ? 
        <Product items={items} /> :
        <div className="">
          Loading..
        </div>
      }
      <Product />
    </div>
  );
};
