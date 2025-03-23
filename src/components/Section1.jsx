import React from 'react';
import ImgSectin1 from '../../public/section1/image.png';
import Image from 'next/image';

export default function Section1() {
  return (
    <section className='flex flex-wrap justify-center items-center p-5 '>
        <div className='flex flex-col gap-5 w-[40%] min-w-70'>
            <div className='text-4xl w-[80%]  font-bold'>
                <h2>
                We Create
                    <span className='text-blue-600'> solutions </span>
                for Your businness
                </h2>
            </div>
            <div className='text-[18px] text-gray-700'>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim qui eos ad? Qui consequatur aut dicta,
                 libero sunt aperiam possimus optio quisquam voluptas itaque quidem voluptates numquam ad cumque?
                </p>
            </div>
            <div>
                <button className=' w-40 p-2 border-1 rounded-2xl bg-blue-500 shadow-2xl text-white'>Get a Service</button>
            </div>
        </div>
        <div className=' flex justify-center items-center w-[40%]'>
            <Image className='w-[80%] min-w-60' src={ImgSectin1} alt='Imagen representativa'></Image>
        </div>
    </section>
  )
}
