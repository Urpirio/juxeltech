import React from 'react';

export default function SubCardServices(props) {
  return (
    <article className='w-70 flex flex-col  border-1 border-gray-300 rounded-2xl shadow-xl  '>
        <header className='flex items-center rounded-t-2xl'>
            <div  className={`flex justify-center items-center w-[30%] h-16 rounded-tl-2xl rounded-br-2xl p-3    ${props.BgHeader}`}>
                <i className={`${props.classIcon} text-3xl text-white`}></i>
            </div>
            <div className='flex flex-grow basis-0 items-center rounded-tr-2xl h-[100%] p-2 '>
                <h2 className='text-[18px]'>{props.NameService}</h2>
            </div>
        </header>
        <section className='flex flex-col gap-5  p-5 flex-grow'>
            <div>
                <h2>US$ {props.PriceService}</h2>
            </div>
            <div>
                <p>
                    {props.DescriptionService}
                </p>
            </div>
            <div className='flex flex-col'>
                {props.listdescription}
            </div>
        </section>
        <footer className='h-15 flex justify-center items-center rounded-b-2xl px-2'>
            <button className={`border-1 text-white shadow-2xs rounded-2xl p-2 w-[100%] cursor-pointer transition-opacity duration-200 hover:opacity-80 ${props.BgFooterBtn}`}>Get Service</button>
        </footer>
    </article>
  )
}
