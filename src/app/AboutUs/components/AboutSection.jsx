import Image from 'next/image';
import DataAboutSection from '../Data/DataAboutSections';


export default function AboutSection() {


  const list = DataAboutSection.map( props => {
    return(
      <section key={props.keyid} className={`flex flex-wrap ${props.classOrder} ${props.padding} ${props.classAlign} justify-center  gap-5 `}>
      
      <div className={`flex flex-wrap sm:flex-row  justify-center lg:justify-start lg:text-left text-center    w-[90%] gap-5 sm:gap-2 lg:w-[40%] min-w-90`}>

          <div className='text-4xl font-semibold'>
            <h2> Our <span className='text-blue-600 '>{props.title}</span></h2>
          </div>
          <div className='w-[100%] min-w-50 lg:hidden flex justify-center'>
            <Image className='rounded-4xl w-60' src={props.Image} alt={props.title}/>
        </div>

        <div className='flex flex-col lg:w-[100%]   gap-3 text-[16px] text-gray-700'>
          <p>{props.Text1}</p>
          <p>{props.Text2}</p>
          <p>{props.Text3}</p>
        </div>
      </div>
      <div className='justify-center  w-[40%] min-w-80 hidden lg:flex'>
       <Image className='rounded-4xl h-90 w-90' src={props.Image} alt={props.title}/>
      </div>
    </section>
    )
  })

  return (list);
};
