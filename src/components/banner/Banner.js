import React from 'react'
import BannerImg from "../../assets/wallpaperflare.com_wallpaper.jpg"
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className='p-5 relative text-slate-200'>
        <img src={BannerImg} alt="#" className='rounded-xl h-[500px] w-full brightness-50' />
        <div className='absolute grid gap-6 top-40 px-10'>
            <h1 className='text-3xl md:text-5xl font-bold w-[300px] md:w-[450px] text-start'>Explore the sights of the World</h1>
            <p className='text-start mb-5'>A Place where nature and adventure</p>
            <Link to="booking" className='w-40 h-10 bg-slate-300 rounded-full text-slate-900 font-semibold flex justify-center items-center'>Explore</Link>
            
        </div>
    </div>
  )
}
