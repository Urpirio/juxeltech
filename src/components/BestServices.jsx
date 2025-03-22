import DataBestServices from '@/Data/DataBestServices';
import React from 'react';
import SubBestServices from './SubComponents/SubBestServices';

export default function BestServices() {

    const CardServicelist = DataBestServices.map( DBS => {
        return(
            <SubBestServices
            Service = {DBS.Service}
            Description = {DBS.Description}
            Icon = {DBS.Icon}
            bg = {DBS.bg}
            />
        )
    })

  return (
    <section className='flex flex-col items-center justify-center p-5'>
        <div className='flex flex-col justify-center items-center p-5 gap-2'>
            <h2 className='font-bold text-3xl text-center'>
              Web Provide The Best <span className='text-blue-600'>services</span>
            </h2>
             <p className='text-[16px] text-center w-[80%] min-w-80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla dicta 
                unde hic porro reiciendis veniam exercitationem. Delectus repellat voluptatem
            </p>
        </div>
        <div className='flex flex-wrap justify-around p-5 gap-5'>
            {CardServicelist}
        </div>
    </section>
  )
}
