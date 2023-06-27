import {Link,} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="p-5 flex justify-between items-center border sticky">
            <h1 className='text-3xl font-bold font-mono'>Salesphere</h1>
            <ul className='md:flex space-x-5 font-semibold md:visible hidden'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Product'>Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li></li>
            </ul>
        </nav>
    )
}