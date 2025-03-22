import React from 'react';

export default function Header() {
  return (
    <header className='flex items-center justify-around h-15 border-1 sticky top-[0%] bg-white border-gray-200 shadow-xs'>
        <div className='text-2xl'>
            <h1>
                <span className='font-bold text-blue-700'>JX</span>
                <span className='font-light'>Tech</span>
            </h1>
        </div>
        <nav className=' hidden sm:flex items-center gap-5'>
            <div className='flex-col cursor-pointer transition-all duration-200 hover:text-blue-500'>
                <span>Home</span>
                <div></div>
            </div>
            <div className='flex-col cursor-pointer transition-all duration-200 hover:text-blue-500'>
                <span>About us</span>
                <div></div>
            </div>
            <div className=' flex-col cursor-pointer transition-all duration-200 hover:text-blue-500'>
                <span>Services</span>
                <div></div>
            </div>
            <div className='flex-col cursor-pointer transition-all duration-200 hover:text-blue-500'>
                <span>Contact us</span>
                <div></div>
            </div>
        </nav>
        <div>
            <button className='border-1 rounded-2xl bg-blue-500 shadow-xs p-2 w-30 text-white font-semibold transition-all duration-200 cursor-pointer hover:opacity-75'>Contact</button>
        </div>
    </header>
  )
}
