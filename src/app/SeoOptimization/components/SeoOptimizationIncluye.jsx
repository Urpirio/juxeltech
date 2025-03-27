import React from 'react'
import DataSeoServices from '../Data/SeoServices/DataSeoServices'
import SubAboutServices from './Subcomponents/SubAboutServices'
import DataSeoServices2 from '../Data/SeoServices/DataSeoServices2';

export default function SeoOptimizationIncluye() {

    const SeoServiceList1 = DataSeoServices.map(DSS => {
        return(
            <SubAboutServices
            number = {DSS.number}
            title = {DSS.title}
            description = {DSS.description}
            />
        )
    });

    const SeoServiceList2 = DataSeoServices2.map(DSS => {
        return(
            <SubAboutServices
            number = {DSS.number}
            title = {DSS.title}
            description = {DSS.description}
            />
        )
    })


  return (
    <section className='flex flex-wrap justify-center items-center gap-5 py-5'>
        <div className='flex flex-col gap-5 w-[40%] min-w-90'>
            {SeoServiceList1}
        </div>
        <div className='flex flex-col gap-5 w-[40%] min-w-90'>
            {SeoServiceList2}
        </div>

    </section>
  )
}
