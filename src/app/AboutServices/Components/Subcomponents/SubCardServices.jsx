export default function SubCardServices(props) {/*Este elemento en el componente WebDevelopment*/
  return (
    <article className='flex flex-col gap-2 '>
            <header className='text-2xl text-blue-500 font-semibold'>
                <h2>{props.Titles}</h2>
            </header>
            <div className=' flex flex-col gap-2 sm:w-80'>
                {props.list}
            </div>
   </article>
  )
};
