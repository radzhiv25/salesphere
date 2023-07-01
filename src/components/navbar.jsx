import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='p-5 border-b flex justify-around items-center'>
            <Link to="/">
                <h1 className='text-2xl'>
                    Salesphere</h1>
            </Link>
            <Link to="/cart">
                <button className='p-2 bg-blue-400 text-white rounded-md'>
                    Go to Cart
                </button>
            </Link>
        </div>
    )
}
