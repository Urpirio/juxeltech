
import DataHowUIDesign from "../../Data/UIdesing/HowUIDesign/DataHowUIDesign";
import DataHowUIDesign2 from "../../Data/UIdesing/HowUIDesign/DataHowUIDesign2";


export const HowUIDesignList = () => {

    const list = DataHowUIDesign.map( props => {
        return(
            <article className='flex items-center gap-5'>
                <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                    <span>{props.number}</span>
                 </div>
                <div className='flex flex-col w-[100%]'>
                    <h3 className='font-semibold'>{props.title}</h3>
                    <p className='text-gray-600'>{props.description}</p>
                </div>
            </article>
        )
    })
    return(list)
};


  
export const HowUIDesignList2 = () => {
    const list = DataHowUIDesign2.map(props => {
        return(
            <article className='flex items-center gap-5'>
                <div className='h-10 w-10 flex justify-center items-center border-1 rounded-[100px] bg-blue-600 text-white text-[18px] font-semibold '>
                    <span>{props.number}</span>
                </div>
                <div className='flex flex-col w-[100%]'>
                    <h3 className='font-semibold'>{props.title}</h3>
                    <p className='text-gray-600'>{props.description}</p>
                </div>
            </article>
        )
    })
    return(list)
};
  