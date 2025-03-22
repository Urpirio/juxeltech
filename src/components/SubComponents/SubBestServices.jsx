import React from 'react'

export default function SubBestServices(props) {
  return (
    <article className='flex flex-col border-1 border-gray-200 shadow-xl rounded-2xl w-80'>
      <div className='flex justify-start'>
        <div className={`flex justify-center items-center rounded-tl-2xl rounded-br-2xl ${props.bg}   h-[50px] w-[20%]`}>
          <i className={`${props.Icon} text-4xl text-white `}></i>
        </div>
      </div>
      <div className='p-5 pb-2'>
        <h2 className='font-bold text-xl'>{props.Service}</h2>
        <p className='text-gray-800'>{props.Description}</p>
      </div>
      <div className='pl-5 pb-5'>
        <span>read more</span>
      </div>
    </article>
  )
}
