import { PathAboutUs, PathHome, PathServices,PathProyects } from '@/Data/DataLocation';
import HoverAbout from '@/func/Hovers/HoverAbout';
import HoverProyects from '@/func/Hovers/HoverProyects';
import HoverHome from '@/func/Hovers/HoverHome';
import HoverServices from '@/func/Hovers/HoverServices';
import LinkAboutUs from '@/func/Links/LinkAboutus';
import LinkProyects from '@/func/Links/LinkProyects';
import LinkHome from '@/func/Links/LinkHome';
import LinkServices from '@/func/Links/LinkServices';
import { usePathname } from 'next/navigation';

export default function Header() {
    

  return (
    <header className='flex items-center justify-around h-15 border-1 sticky top-[0%] bg-white border-gray-200 shadow-xs z-50 p-5'>
        <div className='text-2xl flex flex-grow basis-0'>
            <h1>
                <span className='font-bold text-blue-700'>JX</span>
                <span className='font-light'>Tech</span>
            </h1>
        </div>
        <nav className=' hidden sm:flex items-center gap-5'>

            <div onClick={LinkHome} onMouseEnter={HoverHome} onMouseLeave={HoverHome} 
                className={`flex-col cursor-pointer transition-all duration-200 hover:text-blue-500 
                ${ PathHome === usePathname() ? 'text-blue-500' : ''}`}>

                <span>Home</span>
                <div className='h-1 rounded-2xl bg-blue-500 w-0' id='LineHome'></div>

            </div>

            <div onClick={LinkAboutUs} onMouseEnter={HoverAbout} onMouseLeave={HoverAbout} 
                className={`flex-col cursor-pointer transition-all duration-200 hover:text-blue-500 
                ${PathAboutUs === usePathname() ? 'text-blue-500' : ''}`}>
            
                <span>About us</span>
                <div className='h-1 rounded-2xl bg-blue-500 w-0 ' id='LineAbout'></div>

            </div>

            <div onClick={LinkServices} onMouseEnter={HoverServices} onMouseLeave={HoverServices} 
                className={`flex-col cursor-pointer transition-all duration-200 hover:text-blue-500 
                ${PathServices === usePathname() ? 'text-blue-500' : '' }`}>

                <span>Services</span>
                <div className='h-1 rounded-2xl bg-blue-500 w-0 ' id='LineServices'></div>

            </div>

            <div onClick={LinkProyects} onMouseEnter={HoverProyects} onMouseLeave={HoverProyects} 
                className={`flex-col cursor-pointer transition-all duration-200 hover:text-blue-500 
                ${PathProyects === usePathname() ? 'text-blue-500' : '' }`}>

                <span>Proyects</span>
                <div className='h-1 rounded-2xl bg-blue-500 w-0 ' id='LineContact'></div>

            </div>

        </nav>
        <div className='flex justify-end flex-grow basis-0'>
            <button className='border-1 rounded-2xl bg-blue-500 shadow-xs p-2 w-30 text-white font-semibold transition-all duration-200 cursor-pointer hover:opacity-75'>Contact</button>
        </div>
    </header>
  )
}
