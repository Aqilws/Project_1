import React from 'react'
import ImgFooter from "../../assets/pepsi-logo-94D7DEF922-seeklogo.com.png"

export const Footer = () => {
  return (
    <div className='h-[300px] bg-slate-900 p-5' >
        <div className='text-start text-slate-200'>
          <img src={ImgFooter} alt="#"  className='w-12 mb-5'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam.</p>
          <h1 className='mt-5 font-semibold'>Contact</h1>
          <h3></h3>
        </div>
    </div>
  )
}
