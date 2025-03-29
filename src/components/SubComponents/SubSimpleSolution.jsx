import DataSimpleSolution from "@/Data/DataSimpleSolution";

export default function SubSimpleSolution() {
  const list = DataSimpleSolution.map( props => {
    return(
      <article key={props.keyid} className='flex items-center  justify-left gap-5'>
        <div className='h-10 w-10 flex justify-center items-center bg-blue-500 rounded-[100%] text-white text-xl'>
            <span>{props.number}</span>
        </div>
                            
        <div className='flex flex-col justify-baseline w-[70%]'>
            <h3 className='text-[18px] font-semibold'>{props.title}</h3>
            <p className='font-normal text-gray-600' >{props.description}</p>
        </div>
    </article>
    )
  })
  return (list)
}
