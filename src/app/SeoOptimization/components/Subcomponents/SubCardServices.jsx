import React from 'react'

export default function SubCardServices(props) {/*Este elemento en el componente WebDevelopment*/
  return (
    <article className='flex flex-col gap-2 '>
            <header className='text-2xl text-blue-500 font-semibold'>
                <h2>{props.Titles}</h2>
            </header>
            <div className=' flex flex-col gap-2 w-90'>
                {props.list}
            </div>
   </article>
  )
};
