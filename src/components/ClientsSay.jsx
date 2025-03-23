'use client'
import DataClientsSay from '@/Data/DataClientsSay';
import React from 'react';
import SubClientsSay from './SubComponents/SubClientsSay';
import { usePathname } from 'next/navigation';
import ClientsSayStar from '@/func/ClientSayStar';

export default function ClientsSay() {
    const ActualPath = usePathname();

    const ClientsList = DataClientsSay.map(DCS => {
        return(
            <SubClientsSay
            Image ={DCS.Image}
            Name ={DCS.Name}
            ProfesionalArea ={DCS.ProfesionalArea}
            Comment ={DCS.Comment}
            Idstar ={DCS.Idstar}
            star1 = {DCS.Star[0].classStar}
            star2 = {DCS.Star[1].classStar}
            star3 = {DCS.Star[2].classStar}
            star4 = {DCS.Star[3].classStar}
            star5 = {DCS.Star[4].classStar}
            />
        )
    });



  return (
    <section className='flex flex-col'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='text-3xl font-bold'>
                <h2>
                    What <span className='text-blue-600'>Clients</span> Say!
                </h2>
            </div>
            <div className='flex justify-center text-gray-700 text-[18px] w-[30%] min-w-90 text-center'>
                <p>See How Our Digital Marketing Agency Helped Clients Achieve Their Goals</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center p-5 gap-5'>
            {ClientsList}
        </div>
    </section>
  )
}
