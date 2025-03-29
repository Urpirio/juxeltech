

import SubCardServices from './Subcomponents/SubCardServices';
import ListAboutService from './Subcomponents/ListAboutService';
import DataCardOnePage from '../Data/CardServices/OnePage/DataCardOnePage';
import DataCardMultiPage from '../Data/CardServices/MultiPage/DataCardMultiPage';
import DataCardDinamic from '../Data/CardServices/Dinamic/DataCardDinamic';
import DataCardEcommerce from '../Data/CardServices/Ecommerce/DataCardEcommerce';

export default function CardServices() {


    /*Renderizado de la carta de servicio de paginas OnePage*/
    const ListCardOnePage = DataCardOnePage[0].listdescription.map(DC => {
        return(
            <ListAboutService
            about = {DC.about}
            />
        )
    });
    const CardOnePage = DataCardOnePage.map(DC =>{
        return(
            <SubCardServices
            NameService= {DC.NameService}
            PriceService = {DC.PriceService}
            DescriptionService = {DC.DescriptionService}
            listdescription = {ListCardOnePage}
            classIcon = {DC.classIcon}
            BgHeader = {DC.BgHeader}
            BgFooterBtn = {DC.BgFooterBtn}
            />
        )
    });

    /*Renderizado de la carta de servicio de paginas MultiPage*/
    const ListCardMultiPage = DataCardMultiPage[0].listdescription.map(DC => {
        return(
            <ListAboutService
            about = {DC.about}
            />
        )
    });
    const CardMultiPage = DataCardMultiPage.map(DC =>{
        return(
            <SubCardServices
            NameService= {DC.NameService}
            PriceService = {DC.PriceService}
            DescriptionService = {DC.DescriptionService}
            listdescription = {ListCardMultiPage}
            classIcon = {DC.classIcon}
            BgHeader = {DC.BgHeader}
            BgFooterBtn = {DC.BgFooterBtn}
            />
        )
    });


    /*Renderizado de la carta de servicio de paginas dinamicas*/
    const ListCardDinamic = DataCardDinamic[0].listdescription.map(DC => {
        return(
            <ListAboutService
            about = {DC.about}
            />
        )
    });
    const CardDinamic = DataCardDinamic.map(DC =>{
        return(
            <SubCardServices
            NameService= {DC.NameService}
            PriceService = {DC.PriceService}
            DescriptionService = {DC.DescriptionService}
            listdescription = {ListCardDinamic}
            classIcon = {DC.classIcon}
            BgHeader = {DC.BgHeader}
            BgFooterBtn = {DC.BgFooterBtn}
            />
        )
    });


        /*Renderizado de la carta de servicio de paginas Ecommerce*/
    const ListCardEcommerce = DataCardEcommerce[0].listdescription.map(DC => {
        return(
            <ListAboutService
            about = {DC.about}
            />
        )
    });
    const CardEcommerce = DataCardEcommerce.map(DC =>{
        return(
            <SubCardServices
            NameService= {DC.NameService}
            PriceService = {DC.PriceService}
            DescriptionService = {DC.DescriptionService}
            listdescription = {ListCardEcommerce}
            classIcon = {DC.classIcon}
            BgHeader = {DC.BgHeader}
            BgFooterBtn = {DC.BgFooterBtn}
            />
        )
    });

   

  return (
    <section className='flex flex-wrap gap-5 justify-center sm:gap-5 lg:justify-around p-10'>
        {CardOnePage}
        {CardMultiPage}
        {CardDinamic}
        {CardEcommerce}
    </section>
  )
}
