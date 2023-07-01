import { Link, } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="p-5 flex justify-between items-center  sticky shadow-md">
            <h1 className='text-3xl font-bold'>
                <Link to="/">
                    Salesphere
                </Link>
            </h1>
            <ul className='md:flex gap-10 items-center text-md font-sembibold md:visible hidden'>
                <li>
                    <Link to='product'>Products</Link>
                </li>
                <li>
                    <Link to="/cart">
                        <button className='px-2 py-1 border bg-blue-400 rounded-md text-white'>
                            Go to Cart
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}