import React from 'react';
import DataTitleSeoServices from '../Data/SeoServices/DataTitleSeoServices';
import SubTitleServices from './Subcomponents/SubTitleServices';

export default function SeoOptimization() {

    const SeoOptimizationlist = DataTitleSeoServices.map(DTSS => {
        return(
            <SubTitleServices
            titlePart1 = {DTSS.titlePart1}
            titlePart2 ={DTSS.titlePart2}
            description = {DTSS.description}
            />
        )
    })

  return (SeoOptimizationlist)};
