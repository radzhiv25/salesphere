import { useNavigate } from 'react-router-dom'
// import HeroImg from './images/img-1.avif'
import { Testimonials } from './testimonials'

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="p-5">
      <div className="hero md:p-10 flex md:flex-row flex-col md:my-0 my-8">
      <div className="left-cont p-5 md:w-1/2 w-auto bg-blue-200 md:rounded-l-md xs:rounded-t-md">
        <h1 className='text-3xl font-semibold'>Welcome to Salesphere</h1>
        <img src="/images/img-1.avif" alt="" className='mt-5 shadow-lg rounded-md'/>
      </div>
      <div className="right-cont p-5 bg-blue-300 md:w-1/2 w-auto font-medium lg:py-24 md:rounded-r-md rounded-b">
        <p className='md:text-xl'>
        Your ultimate ecommerce destination. Discover a vast selection of products, unbeatable deals, and seamless shopping experiences. With secure transactions, personalized recommendations, and top-notch customer support, Salesphere delivers convenience and satisfaction. Explore the world of online shopping with Salesphere and elevate your retail experience to new heights.
        </p>
        <button className=' mt-5 p-2 rounded-md bg-indigo-500 text-white hover:shadow-md' onClick={() => navigate(<product />)}>
          View Products
        </button>
      </div>
      </div>
      <div className="about md:my-20 my-14  flex flex-col md:w-2/3 justify-center mx-auto">
        <h1 className='mt-5 font-bold text-3xl text-center'>About Us</h1>
        <p className='mt-5 md:text-xl font-medium text-justify'>
        Welcome to Salesphere, the premier destination for all your online shopping needs. At Salesphere, we believe that shopping should be an effortless and enjoyable experience, which is why we've curated a wide range of products from top brands across various categories. Our user-friendly platform offers secure transactions, fast shipping, and exceptional customer support to ensure your satisfaction every step of the way. Whether you're searching for the latest fashion trends, cutting-edge gadgets, or home essentials, Salesphere has you covered. Join our vibrant community of shoppers and let Salesphere be your trusted companion on your journey to discovering the perfect products at the best prices.
        </p>
      </div>
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
