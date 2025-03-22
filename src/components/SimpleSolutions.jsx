import React from 'react';
import Image from 'next/image';
import ImgSolution from '@/../public/SimpleSolution/image.png';
import DataSimpleSolution from '@/Data/DataSimpleSolution';
import SubSimpleSolution from './SubComponents/SubSimpleSolution';

export default function SimpleSolutions() {

    const CardSolutionlist = DataSimpleSolution.map( DSS =>{
        return(
            <SubSimpleSolution
            number = {DSS.number}
            title = {DSS.title}
            description = {DSS.description}
            />
        )
    })

  return (
    <section className='flex flex-wrap justify-around items-center p-10 '>
        <div className='flex justify-center items-center w-[40%] min-w-80'>
            <Image src={ImgSolution} alt='Person using the computer'/>
        </div>
        <div className='flex flex-col w-[80%] lg:w-[35%] min-w-80 gap-6'>
            <div className='flex flex-wrap w-[100%] '>
                <div className='text-3xl font-bold '>
                    <h2>
                        Simple<span className='text-blue-600'> Solutions!</span>
                    </h2>
                </div>
                <div className='text-[18px] font-normal text-gray-800  '>
                    <p>We understand that no two businesses are alike.
                        That's why we take the time to understand.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {CardSolutionlist}
            </div>
        </div>
    </section>
  )
}
