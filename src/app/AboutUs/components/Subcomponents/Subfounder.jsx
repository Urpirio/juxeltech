import React from 'react';
import Image from 'next/image';

export default function Subfounder(props) {
  return (
    <article className='flex flex-wrap justify-center items-center w-80  shadow-xl rounded-b-2xl rounded-t-2xl'>
                <div className='w-80 rounded-2xl  shadow-2xs'>
                    <Image className='rounded-t-2xl' src={props.Img} alt={props.name}/>
                </div>
                <div className='flex flex-col gap-1 w-[50%] min-w-80 p-5 rounded-2xl '>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-blue-600 text-2xl font-bold'>{props.name}</h3>
                        <span className='text-gray-600 text-[14px] font-semibold'>{props.work}</span>
                    </div>
                    <div className='text-gray-900'>
                        <p>{props.About}</p>
                    </div>
                    <div className='flex gap-2'>

                        <button className='flex justify-center items-center h-8 w-8 rounded-md shadow-xl bg-blue-600 cursor-pointer transition-all duration-200 hover:opacity-75' >
                            <i className='bx bxl-github text-2xl text-white'></i>
                        </button>

                        <button className='flex justify-center items-center h-8 w-8 rounded-md shadow-xl bg-blue-600 cursor-pointer transition-all duration-200 hover:opacity-75'>
                            <i className='bx bxl-instagram-alt text-2xl text-white' ></i>
                        </button>

                        <button className='flex justify-center items-center h-8 w-8 rounded-md shadow-xl bg-blue-600 cursor-pointer transition-all duration-200 hover:opacity-75'>
                            <i className='bx bxl-linkedin-square text-2xl text-white' ></i>
                        </button>
                    </div>
                </div>
                
            </article>
  )
}
