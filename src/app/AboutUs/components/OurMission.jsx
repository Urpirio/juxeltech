
import Image from 'next/image';
import React from 'react';

export default function OurMission(props) {
  return (
    <section className={`flex flex-wrap ${props.classOrder} ${props.padding} justify-center  gap-5 `}>
      
      <div className={`flex flex-wrap sm:flex-row  justify-start lg:h-30   w-[90%] gap-5 sm:gap-2 lg:w-[40%] min-w-90`}>

          <div className='text-4xl font-semibold'>
            <h2> Our <span className='text-blue-600 '>{props.title}</span></h2>
          </div>
          <div className='w-[100%] min-w-50 lg:hidden flex'>
            <Image className='rounded-4xl w-60' src={props.Image} alt={props.title}/>
        </div>

        <div className='flex flex-col lg:w-[100%]  gap-3 text-[18px] text-gray-600'>
          <p>{props.Text1}</p>
          <p>{props.Text2}</p>
        </div>
      </div>
      <div className='justify-center  w-[40%] min-w-80 hidden lg:flex'>
       <Image className='rounded-4xl h-90 w-90' src={props.Image} alt={props.title}/>
      </div>
    </section>
  )
}
