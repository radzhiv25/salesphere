import {createContext, useState} from 'react'
import { PRODUCTS } from '../product'


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length; i++){
        cart[i] = 0
    }
    return cart
}
export const ShopContextProvider = (props) => {
    const [cartProduct, setCartProduct] = useState(getDefaultCart());

    const getTotalCartCost = () => {
        let totalCost = 0;
        for (const product in cartProduct){
            if(cartProduct[product] > 0){
                let productInfo = PRODUCTS.find((product) => product.id === Number(product))
                totalCost += cartProduct[product] * productInfo;
            }
        }
        return totalCost
    }

    const addToCart = (itemId) => {
        setCartProduct((prev) => ({...prev, [itemId]: prev[itemId]+ 1}))
    }

    const removeFromCart = (itemId) => {
        setCartProduct((prev) => ({...prev, [itemId]: prev[itemId]- 1}))
    }
    const updateCartProductCount = (newAmount, itemId) => {
        setCartProduct((prev) => ({ ...prev, [itemId]: newAmount}))
    }
    const contextValue = {cartProduct, addToCart, removeFromCart, updateCartProductCount, getTotalCartCost}
    console.log(cartProduct)
  return (
    <ShopContext.Provider value={contextValue}>
        {
            props.children
        }
    </ShopContext.Provider>
  )
}
