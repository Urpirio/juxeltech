import React from 'react';

export default function SubTitleServices(props) {/*Este elemento en el componente todos los titles antes de hablar de algun tema*/
  return (
    <section className='flex flex-col justify-center items-center bg-gray-50 text-left sm:text-center p-5 sm:p-10'>
        <div className='w-[80%] min-w-90'>
            <h1 className='text-3xl font-semibold'>{props.titlePart1} <span className='text-blue-600'>{props.titlePart2}</span></h1>
        </div>
        <div className='w-[80%] min-w-90'>
            <p>{props.description}</p>
        </div>
    </section>
  )
}
