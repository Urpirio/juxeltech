import Subfounder from './Subcomponents/Subfounder';

export default function Founder() {


  return (
    <section className='flex flex-col items-center p-10'>
        <div className='text-center'>
            <h2 className='text-3xl'>Our <span className='text-blue-600'>Founder</span></h2>
            <p className='text-[18px]'>Our team  consists only of the best talents</p>
        </div>
        <div className='flex flex-wrap gap-5 justify-center items-center w-[100%] min-w-80 p-8'>
           <Subfounder/>
        </div>
    </section>
  )
}
