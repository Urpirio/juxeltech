import SubBestServices from './SubComponents/SubBestServices';

export default function BestServices() {


  return (
    <section className='flex flex-col items-center justify-center p-5'>
        <div className='flex flex-col justify-center items-center p-5 gap-2'>
            <h2 className='font-bold text-3xl text-center'>
              Web provide the best <span className='text-blue-600'>services</span>
            </h2>
             <p className='text-[18px] text-center text-gray-800 w-[80%] min-w-80'>
             At JuxelTech, we deliver top-tier digital solutions designed to elevate your business.
             Our expertise in web development, UI/UX design, SEO, and maintenance ensures that your
             online presence is both powerful and effective.
            </p>
        </div>
        <div className='flex flex-wrap justify-center  p-5 gap-5 xl:gap-5'>
          <SubBestServices/>
        </div>
        
    </section>
  )
}
