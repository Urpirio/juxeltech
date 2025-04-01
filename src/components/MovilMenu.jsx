import { GeneralLink } from "@/func/GeneralLink/GeneralLink"

export default function MovilMenu() { 

  

  return (
    <dialog id="MovilMenu" className="hidde  ">
        <nav className="w-[100%] fixed border-b-1  border-gray-300 shadow-2xl bg-white dark:bg-black dark:text-white  rounded-b-2xl p-5">
            <ul className="flex justify-around">
                <li onClick={()=>{GeneralLink('/')}}>Home</li>
                <li onClick={()=>{GeneralLink('/AboutUs')}}>About Us</li>
                <li onClick={()=>{GeneralLink('/Services')}}>Services</li>
                <li onClick={()=>{GeneralLink('/Proyects')}}>Proyects</li>
            </ul>
        </nav>
    </dialog>
  )
}
