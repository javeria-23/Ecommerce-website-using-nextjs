import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>

      <footer className='flex flex-col space-y-10 justify-center m-10 mb-0'>
        <nav className=' flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700'>

         <a className='hover:text-cyan-500 text-amber-500' href='#'>Home</a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'>About</a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'>Delivery</a>
         <a className='hover:text-cyan-500 text-amber-500' href='#'>Content</a>
         
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
          <a href='https://facebook.com' target='blank' rel='nofollow noopener'>
          <FaFacebook 
          className='text-blue-700   hover:text-amber-400 w-6 h-6'/> 
          </a>

          <a href='https://linkedin.com' target='blank' rel='nofollow noopener'>
          <FaLinkedin 
          className='text-gray-300 bg-blue-700  hover:text-amber-400 w-6 h-6'/> 
          </a>

          <a href='https://instagram.com' target='blank' rel='nofollow noopener'>
          <FaInstagram 

          className='bg-gradient-to-r from-pink-500 to-purple-500  hover:text-amber-400 w-6 h-6'/> 
          </a>

          <a href='https://twitter.com' target='blank' rel='nofollow noopener'>
          <FaTwitter 
          className='text-blue-500 hover:text-amber-400 w-6 h-6'/> 
          </a>
          </div>
          <p className='text-center hover:text-cyan-500 text-amber-400 font-bold text-xl mb-8'> 2025 Javeria Tariq. All Rights Reserved!.</p>
           
           <br />
           <br />
      </footer>
      
    </div>
  )
}