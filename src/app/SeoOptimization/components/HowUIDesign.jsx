
import DataHowUIDesign from '../Data/UIdesing/HowUIDesign/DataHowUIDesign';
import SubAboutServices from './Subcomponents/SubAboutServices';
import DataHowUIDesign2 from '../Data/UIdesing/HowUIDesign/DataHowUIDesign2';




export default function HowUIDesign() {


    const HowUIDesignList = DataHowUIDesign.map(DHUID => {
        return(
            <SubAboutServices
            number = {DHUID.number}
            title = {DHUID.title}
            description = {DHUID.description}
            />
        )
    });

    const HowUIDesignList2 = DataHowUIDesign2.map(DHUID => {
        return(
            <SubAboutServices
            number = {DHUID.number}
            title = {DHUID.title}
            description = {DHUID.description}
            />
        )
    })



  return (
    <section className='flex flex-col gap-5 py-5'>
        <header className='flex justify-start sm:justify-center px-5'>
            <h2 className='text-3xl font-semibold'>How UI/UX Design <span className='text-blue-600'>Benefits Your Business?</span></h2>
        </header>
        <footer className='flex flex-wrap justify-center items-center'>
            <div className='flex flex-col gap-5 w-[40%] min-w-90 px-5'>
                {HowUIDesignList}
            </div>
            <div className='flex flex-col gap-5 w-[40%] min-w-90 px-5'>
                {HowUIDesignList2}
            </div>
        </footer>
    </section>
  )
}
