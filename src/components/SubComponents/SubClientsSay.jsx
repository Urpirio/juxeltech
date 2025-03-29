
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import ClientsSayStar from '@/func/ClientSayStar';

export default function SubClientsSay(props) {
    //   const ActualPath = usePathname();
    
  return (
    <article className='h-50 w-90 gap-2 flex flex-col justify-center items-center border-1 border-gray-300 rounded-3xl shadow-xl  '>
        <div className='flex justify-baseline items-center gap-2 w-[90%]'>
            <div>
                <Image className='h-15 w-15 rounded-[100%]' src={props.Image} alt={props.Name} />
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-blue-600 font-semibold text-[18px]'>{props.Name}</h3>
                <span className='text-[14px] text-gray-600'>{props.ProfesionalArea}</span>
            </div>
        </div>
        <div className='w-[90%] text-gray-800'>
            <p>{props.Comment}</p>
        </div>
        <div className='w-[90%]' id={props.Idstar}>
            <i className={`${props.star1} text-yellow-500 `}></i>
            <i className={`${props.star2} text-yellow-500 `}></i>
            <i className={`${props.star3} text-yellow-500 `}></i>
            <i className={`${props.star4} text-yellow-500 `}></i>
            <i className={`${props.star5} text-yellow-500 `}></i>
        </div>
    </article>
  )
}
