
export default function Footer() {
  return (
   <footer className="flex flex-col gap-5 items-center  border-t-1 border-gray-200 bg-gray-100">
    <header className='flex justify-center text-3xl w-[100%] pt-5'>
        <h1 className="font-bold text-blue-700">Juxel<span className="text-black font-light">Tech</span></h1>
    </header>
    <footer className="flex justify-center items-center w-[100%] text-center text-[18px] font-bold text-gray-900 border-t-1 border-gray-200 p-1">
        <span>Copyright © 2025 
            <span className="text-blue-700 font-semibold"> Juxel
                <span className="font-light">Tech</span>
            </span>. 
            Todos los derechos reservados.
        </span>
    </footer>
    {/* <div>
        <i></i>
        <i></i>
        <i></i>
    </div>
    <nav className="flex border-1">
        <span>Home</span>
        <span>About Us</span>
        <span>Services</span>
        <span>Contact Us</span>
    </nav> */}
   </footer>
  )
};
