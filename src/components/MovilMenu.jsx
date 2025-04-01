import { GeneralLink } from "@/func/GeneralLink/GeneralLink"

export default function MovilMenu() { 

  return (
    <dialog id="MovilMenu" className="hidde">
        <nav className="w-[100%] border-1 border-gray-400 fixed bg-white  rounded-b-2xl p-5">
            <ul className="flex justify-around font-semibold">
                <li onClick={()=>{GeneralLink('/')}}>Home</li>
                <li onClick={()=>{GeneralLink('/AboutUs')}}>About Us</li>
                <li onClick={()=>{GeneralLink('/Services')}}>Services</li>
                <li onClick={()=>{GeneralLink('/Proyects')}}>Proyects</li>
            </ul>
        </nav>
    </dialog>
  )
}
