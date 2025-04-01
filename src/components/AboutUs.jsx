
import AboutUsBtn from './btns/AboutUsBtn';
import Image from 'next/image';
import ImgAbout from '@/../public/AboutUs/image.png';

export default function AboutUs() {
  return (
    <section className='flex flex-wrap justify-around items-center p-5 sm:p-10 dark:bg-black'>
        <div className='w-[40%] min-w-80 lg:hidden flex'>
            <Image src={ImgAbout} alt='Imagen about Movil'/>
        </div>
        <div className='flex flex-col w-[80%] lg:w-[40%] min-w-80 gap-5'>
            <div className='font-bold text-3xl dark:text-white' >
                <h2>Our <span className='text-blue-600'>Agency</span></h2>
            </div>
            <div className='flex flex-col gap-2 text-xl text-gray-700'>
                {/* <p>We believe in the power of data. Our analytics-driven approach allows us to make informed</p> */}
                <p>
                At JuxelTech, we are passionate about crafting innovative digital solutions that
                help businesses thrive. With a team of experts in web development, design, and 
                marketing, we turn ideas into powerful online experiences.
                </p>
            </div>
            <div>
                <AboutUsBtn/>
            </div>
        </div>
        <div className='w-[40%] min-w-80 hidden lg:flex'>
            <Image src={ImgAbout} alt='Imagen about Desktop'/>
        </div>
    </section>
  )
}
