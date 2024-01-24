import React from 'react'
import Img from '../../assets/pepsi-logo-94D7DEF922-seeklogo.com.png'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center py-5 px-10'>
        <img src={Img} alt="#" className='w w-16' />
        
        <ul className='flex gap-10'>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="tour">Our Tour</Link>
            </li>
            <li>
            <Link to="booking">Booking</Link>
            </li>
            <li>
            <Link to="/">FAQ</Link>
            </li>
        </ul>

    </nav>
  )
}
