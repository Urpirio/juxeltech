'use client';
import DataBestServices from "@/Data/DataBestServices";
import { GeneralLink } from "@/func/GeneralLink/GeneralLink";

export default function SubBestServices() {


  const list = DataBestServices.map( props => {
    return(
      <article key={props.keyId} className='flex flex-col border-1 border-gray-200  shadow-xl rounded-2xl w-80'>
      <div className='flex justify-start'>
        <div className={`flex justify-center items-center rounded-tl-2xl rounded-br-2xl ${props.bg}   h-[50px] w-[20%]`}>
          <i className={`${props.Icon} text-4xl text-white `}></i>
        </div>
      </div>
      <div className='p-5 pb-2'>
        <h2 className='font-bold text-xl '>{props.Service}</h2>
        <p className='text-gray-800'>{props.Description}</p>
      </div>
      <div className='pl-5 pb-5'>
        <button onClick={()=>{GeneralLink(props.link)}} className='text-blue-500 cursor-pointer transition-all duration-200 hover:border-b-1 '>Read more</button>
      </div>
    </article>
    )
  })



  return (list)
};
