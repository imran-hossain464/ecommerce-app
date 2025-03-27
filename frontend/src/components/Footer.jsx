import React from 'react';
import { assets } from "../assets/assets";


const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

<div>
    <img src={assets.logo} className='mb-5 w-32' alt='logo' />
    <p className='w-full md:w-2/3 text-gray-600'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, expedita. Reiciendis earum suscipit veritatis, aperiam optio molestiae eum iste nostrum laborum quo repellat vero? Culpa aliquid nobis obcaecati iusto quas?</p>
</div>
<div>
    <p className='text-xl font-medium mb-5'>Company</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div>
  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>+880-1623297921</li>
    <li>contact@gmail.com</li>

  </ul>
</div>
</div>
<div>
  <hr/>
  <p className='py-5 text-sm text-center'>
 Copyright 2025@ domain.com - All Rights Reserved.</p>
  </div>
    </div>
  )
}

export default Footer