// import React, { useState } from "react"; 

export const Product = ({items = []}) => {
  return (
    <div className="products md:p-10 p-3 grid md:grid-cols-4 grid-cols-1 gap-10">
      {items.map((items) => {
        console.log(items, "items");
        const {id, title, price, description, category, image} = items
        return (
          <div className="product rounded-md shadow-md p-2">
            <img src={image} alt={title} className="h-60 mx-auto"/>
            <h2 className="capitalize text-gray-500 fonts-semibold">{category}</h2>
            <h3 className="text-sm font-bodl">{title}</h3>
            <p>$ {price}</p>
            <button className="border p-2 rounded-sm">Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};
