import DataSeoServices from "../../Data/SeoServices/DataSeoServices";
import DataSeoServices2 from "../../Data/SeoServices/DataSeoServices2";

export const SeoServiceList1 = () => {
    const list = DataSeoServices.map( props => {
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
    });
    return(list)
};

export const SeoServiceList2 = () => {
    const list = DataSeoServices2.map( props => {
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
    });
    return(list)
};