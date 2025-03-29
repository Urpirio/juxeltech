
import DataUIdesign from '../Data/UIdesing/DataUIdesign';
import SubAboutServices from './Subcomponents/SubAboutServices';
import DataUXdesign from '../Data/UIdesing/DataUXdesign';
import ImgUi from '@/../public/Question/Ui.png';
import ImgUx from '@/../public/Question/Ux.png';
import Image from 'next/image';

export default function UIDesignIncluye() {

    const UIdesignlist = DataUIdesign.map(DUID => {
        return(
            <SubAboutServices
            number = {DUID.number}
            title = {DUID.title}
            description = {DUID.description}
            />
        )
    });

    const UXdesignlist = DataUXdesign.map(DUID => {
        return(
            <SubAboutServices
            number = {DUID.number}
            title = {DUID.title}
            description = {DUID.description}
            />
        )
    });

  return (
    <section className='flex flex-col gap-5 pb-5 pt-5'>
        <article className='flex flex-wrap flex-row-reverse items-center justify-around pr-5 pl-5'>
            <div >
                <Image className='h-60 w-70' src={ImgUi} alt='' />
            </div>
            <div className='w-[40%] min-w-80 [div]:flex [div]:flex-col [div]:gap-5'>
                <div className=' flex flex-col gap-1'>
                    <h2 className='text-3xl font-semibold text-blue-600'>UI Design</h2>
                    <p className='text-gray-800' >UI design focuses on the visual aspect of the interface and how it interacts with the user. It includes:</p>
                </div>
                 <div className='flex flex-col gap-5'>
                    {UIdesignlist} 
                </div>
            </div>
            
        </article>
        <article className='flex flex-wrap items-center justify-around px-5 py-2'>
            <div>
                <Image className='h-60 w-70' src={ImgUx} alt='' />
            </div>
            <div className='w-[40%] min-w-80 [div]:flex [div]:flex-col [div]:gap-5'>
                <div className='flex  flex-col gap-1'>
                    <h2 className='text-3xl font-semibold text-blue-600'>UX Design</h2>
                    <p className='text-gray-800' >UX design focuses on the overall experience the user has when interacting with a product. It’s about making the interaction efficient, intuitive, and enjoyable. It includes:</p>
                </div>
                <div className='flex flex-col gap-5'>
                    {UXdesignlist}
                </div>
            </div>
            

        </article>
    </section>
  )
}
