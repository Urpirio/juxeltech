export default function SubTitleServices({titlePart1,titlePart2,description}) {/*Este elemento en el componente todos los titles antes de hablar de algun tema*/
  return (
    <section className='flex flex-col justify-center items-center bg-gray-50 text-left sm:text-center sm:p-10'>
        <div className='w-[80%] min-w-90 pl-5 pr-5'>
            <h1 className='text-3xl font-semibold'>{titlePart1} <span className='text-blue-600'>{titlePart2}</span></h1>
        </div>
        <div className='w-[80%] min-w-90 pl-5 pr-5'>
            <p>{description}</p>
        </div>
    </section>
  )
}
