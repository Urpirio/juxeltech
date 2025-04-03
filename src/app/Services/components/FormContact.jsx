'use client';

import { CheackValue } from "../func/CheckValue/CheckValue";
import { SendCode } from "../func/SendEmail/SendCode";

export default function FormContact() {
  return (
    <section className="flex justify-center flex-row-reverse p-5">
       
            <section className=" flex flex-col items-center border-2  border-blue-600 rounded-2xl shadow-2xl p-5 gap-2 w-[60%] min-w-80 " id="FormServices">
                
                <div className="flex  flex-wrap sm:justify-around gap-2  justify-center w-[100%]" id="ContainerForm1">

                    <div className="flex justify-center  lg:w-[48%] sm:w-[100%] sm:min-w-60 min-w-75  ">
                        <input onInput={CheackValue} className="border-1 w-[100%] border-gray-300 rounded-md outline-blue-700  p-2  InputServices1" type="text" placeholder="Full name" id="FullNameS" maxLength={'80'} required/>
                    </div>

                    <div className="flex justify-center lg:w-[48%] sm:w-[100%] sm:min-w-60 min-w-75 ">
                        <input onInput={CheackValue} className="border-1 w-[100%] border-gray-300 rounded-md outline-blue-700  p-2 InputServices2" type="text" placeholder="Company" id="CompanyS" maxLength={'50'} required/>
                    </div>

                </div>
                
                <div className="flex  flex-wrap sm:justify-around  justify-center gap-2  w-[100%]" id="ContainerForm2">

                    <div className="flex justify-center  lg:w-[48%] sm:w-[100%] sm:min-w-60 min-w-75  ">
                        <input onInput={CheackValue} className="border-1 w-[100%] border-gray-300  rounded-md outline-blue-700  p-2 InputServices3" type="email" placeholder="Email" id="EmailS" required/>
                    </div>

                    <div className="flex justify-center  lg:w-[48%] sm:w-[100%] sm:min-w-60 min-w-75">
                        <input onInput={CheackValue} className="border-1 w-[100%] border-gray-300 rounded-md outline-blue-700  p-2 appearance-none InputServices4" type="number" placeholder="Phone number" id="PhoneNumber"  required/>
                    </div>

                </div>
                
                <div className="flex flex-col justify-center items-center w-[100%]" id="ContainerForm3">

                    <textarea onInput={CheackValue} className="h-20 border-1 lg:w-[98%] sm:w-[100%] w-[108%] border-gray-300 rounded-md outline-blue-700 resize-none p-2 InputServices5"  placeholder="About proyect" minLength={'100'} id="AboutProyetS" required></textarea>
                    <span className="hidden text-red-600 text-[12px]" id="ErrorForm">Please enter all the requested information.</span>
                </div>
                
                <div className="flex justify-center items-center w-[100%] transition-all duration-300"  id="ContainerForm4">

                    <button onClick={()=>{SendCode()}} className="border-1 rounded-xl bg-blue-600 text-white p-2 w-[50%] text-xl transition-opacity duration-200 cursor-pointer hover:opacity-80">Send</button>

                </div>

            </section>
    </section>
  )
}
