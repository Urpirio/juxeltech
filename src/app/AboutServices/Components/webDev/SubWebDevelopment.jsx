import DataFrontendDevelopment from "../../Data/WebDevelopment/Frondend/DataFrontendDevelopment";
import DataSubTitleWebDevelopment3 from "../../Data/WebDevelopment/Frondend/DataSubTitlesWebDevelopment3";

import DataBackendDevelopment from "../../Data/WebDevelopment/Backend/DataBackendDevelopment";
import DataSubTitleWebDevelopment from "../../Data/WebDevelopment/Backend/DataSubTitleWebDevelopment";

import DataFullStackDevelopment from "../../Data/WebDevelopment/FullStack/DataFullStackDevelopment";
import DataSubTitleWebDevelopment2 from "../../Data/WebDevelopment/FullStack/DataSubTitleWebDevelopment2";

import DataSopportDevelopment from "../../Data/WebDevelopment/Sopport/DataSopportDevelopment";
import DataSubTitleWebDevelopment4 from "../../Data/WebDevelopment/Sopport/DataSubTitleWebDevelopment4";


/*Datos del apartado frondend */
  export const WebFrontendlist = () => {

    const Card = DataSubTitleWebDevelopment3.map( props => {

        const List = DataFrontendDevelopment.map(propslist => {
            return(
                <article className='flex items-center gap-5'>
                    <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                         <span>{propslist.number}</span>
                    </div>
                    <div className='flex flex-col w-[100%]'>
                        <h3 className='font-semibold'>{propslist.title}</h3>
                        <p className='text-gray-600'>{propslist.description}</p>
                    </div>
                </article>
            )
        });

        return(
            <article className='flex flex-col gap-2 '>
                    <header className='text-2xl text-blue-500 font-semibold'>
                        <h2>{props.Title}</h2>
                     </header>
                    <div className=' flex flex-col gap-2 sm:w-80'>
                       {List}
                    </div>
            </article>
        )
    })
    return(Card)
  };


    /*Datos del apartado Backend */
  export const WebBackendlist = () => {

    const Card = DataSubTitleWebDevelopment.map(props =>{

        const List = DataBackendDevelopment.map(propslist => {
            return(
                <article className='flex items-center gap-5'>
                    <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                         <span>{propslist.number}</span>
                    </div>
                    <div className='flex flex-col w-[100%]'>
                        <h3 className='font-semibold'>{propslist.title}</h3>
                        <p className='text-gray-600'>{propslist.description}</p>
                    </div>
                </article>
            )
        });

        return(
            <article className='flex flex-col gap-2 '>
                    <header className='text-2xl text-blue-500 font-semibold'>
                        <h2>{props.Title}</h2>
                     </header>
                    <div className=' flex flex-col gap-2 sm:w-80'>
                       {List}
                    </div>
            </article>
        )
    });

    return(Card)

  };

   /*Datos del apartado FullStack */
   export const WebFullStack = () => {

        const Card = DataSubTitleWebDevelopment2.map(props =>{

            const List = DataFullStackDevelopment.map(propslist => {
                return(
                    <article className='flex items-center gap-5'>
                        <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                             <span>{propslist.number}</span>
                        </div>
                        <div className='flex flex-col w-[100%]'>
                            <h3 className='font-semibold'>{propslist.title}</h3>
                            <p className='text-gray-600'>{propslist.description}</p>
                        </div>
                    </article>
                )
            });
    
            return(
                <article className='flex flex-col gap-2 '>
                    <header className='text-2xl text-blue-500 font-semibold'>
                        <h2>{props.Title}</h2>
                     </header>
                    <div className=' flex flex-col gap-2 sm:w-80'>
                       {List}
                    </div>
                </article>
            )
        });

        return(Card)
    };


    /*Datos del apartado Sopport*/

    export const WebSopportlist = () => {

        const Card = DataSubTitleWebDevelopment4.map(props =>{

            const List = DataSopportDevelopment.map(propslist => {
                return(
                    <article className='flex items-center gap-5'>
                        <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                             <span>{propslist.number}</span>
                        </div>
                        <div className='flex flex-col w-[100%]'>
                            <h3 className='font-semibold'>{propslist.title}</h3>
                            <p className='text-gray-600'>{propslist.description}</p>
                        </div>
                    </article>
                )
            });
    
            return(
                <article className='flex flex-col gap-2 '>
                    <header className='text-2xl text-blue-500 font-semibold'>
                        <h2>{props.Title}</h2>
                     </header>
                    <div className=' flex flex-col gap-2 sm:w-80'>
                       {List}
                    </div>
                </article>
            )
        });


        return(Card)
    };