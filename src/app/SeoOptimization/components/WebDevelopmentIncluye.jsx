import React from 'react'
import DataSubTitleWebDevelopment from '../Data/WebDevelopment/Backend/DataSubTitleWebDevelopment'
import SubCardServices from './Subcomponents/SubCardServices'
import DataSubTitleWebDevelopment2 from '../Data/WebDevelopment/FullStack/DataSubTitleWebDevelopment2';
import SubAboutServices from './Subcomponents/SubAboutServices';
import DataFrontendDevelopment from '../Data/WebDevelopment/Frondend/DataFrontendDevelopment';
import DataBackendDevelopment from '../Data/WebDevelopment/Backend/DataBackendDevelopment';
import DataSubTitleWebDevelopment3 from '../Data/WebDevelopment/Frondend/DataSubTitlesWebDevelopment3';
import DataFullStackDevelopment from '../Data/WebDevelopment/FullStack/DataFullStackDevelopment';
import DataSopportDevelopment from '../Data/WebDevelopment/Sopport/DataSopportDevelopment';
import DataSubTitleWebDevelopment4 from '../Data/WebDevelopment/Sopport/DataSubTitleWebDevelopment4';

export default function WebDevelopmentIncluye() {

                    /*Datos del apartado frondend */
    const ListThing = DataFrontendDevelopment.map( DFD =>{
        /*Lista de elementos*/
        return(
            <SubAboutServices
            number = {DFD.number}
            title = {DFD.title}
            description = {DFD.description}
            />
        )
    });
    const WebArticlelist = DataSubTitleWebDevelopment3.map(DSTWD => {
        /*contenedor padre de la lista de elementos*/
        return(
            <SubCardServices
            Titles = {DSTWD.Title}
            list ={ListThing}
            />
        )
    });


                    /*Datos del apartado Backend */
    const ListThing2 = DataBackendDevelopment.map( DFD =>{
        /*Lista de elementos*/
        return(
            <SubAboutServices
            number = {DFD.number}
            title = {DFD.title}
            description = {DFD.description}
            />
        )
    });
    const WebArticlelist2 = DataSubTitleWebDevelopment.map(DSTWD => {
        /*contenedor padre de la lista de elementos*/
        return(
            <SubCardServices
            Titles = {DSTWD.Title}
            list ={ListThing2}
            />
        )
    });

                   /*Datos del apartado Fullstack */
    const ListThing3 = DataFullStackDevelopment.map( DFD =>{
        /*Lista de elementos*/
        return(
            <SubAboutServices
            number = {DFD.number}
            title = {DFD.title}
            description = {DFD.description}
            />
        )
    });
    const WebArticlelist3 = DataSubTitleWebDevelopment2.map(DSTWD => {
        /*contenedor padre de la lista de elementos*/
        return(
            <SubCardServices
            Titles = {DSTWD.Title}
            list ={ListThing3}
            />
        )
    });

                    /*Datos del apartado Sopport*/
    const ListThing4 = DataSopportDevelopment.map( DFD =>{
        /*Lista de elementos*/
        return(
            <SubAboutServices
            number = {DFD.number}
            title = {DFD.title}
            description = {DFD.description}
            />
        )
    });
    const WebArticlelist4 = DataSubTitleWebDevelopment4.map(DSTWD => {
        /*contenedor padre de la lista de elementos*/
        return(
            <SubCardServices
            Titles = {DSTWD.Title}
            list ={ListThing4}
            />
        )
    });


    

  return (
    <section className='flex flex-wrap justify-center pt-5 pb-5'>{/*Contenedor de los elementos*/}
        <div className=' flex flex-wrap w-[50%] min-w-90 justify-end '>
            {WebArticlelist}
            {WebArticlelist2}
        </div>
        <div className=' flex  flex-wrap w-[50%] min-w-90 justify-start'>
            {WebArticlelist3}
            {WebArticlelist4}
        </div>
    </section>
  )
}
