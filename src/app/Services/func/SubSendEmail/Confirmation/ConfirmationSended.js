import { mouseEnter, mouseLeave } from "../../GeneralHovers/GeneralHovers";
import { CleanInputs } from "../ShowAndHidden/CleanInputs";
import { ShowContainerForm } from "../ShowAndHidden/ShowContainerForm";

export const ConfirmationSended = () => {

    const DivComplete = document.createElement('div');
    DivComplete.style.display = 'flex';
    DivComplete.style.flexDirection = 'column';
    DivComplete.style.gap = '5px';
    DivComplete.style.alignItems = 'center';
    DivComplete.style.justifyContent = 'center';


    const Title = document.createElement('h2');
    Title.style.textAlign = 'center';
    Title.innerText = 'The form has been submitted successfully';
    Title.style.fontSize = '20px';
    Title.style.color = '#155dfc';

    const btnOKay = document.createElement('button');
    btnOKay.id = 'btnOKay';
    btnOKay.innerText = 'Okay';
    btnOKay.style.display = 'flex';
    btnOKay.style.alignItems = 'center';
    btnOKay.style.justifyContent = 'center';
    btnOKay.style.color = 'white';
    btnOKay.style.height = '35px';
    btnOKay.style.fontWeight = '600';
    btnOKay.style.borderRadius = '10px';
    btnOKay.style.background = '#1447e6';
    btnOKay.style.width = '130px';
    btnOKay.style.padding = '5px';
    btnOKay.style.cursor = 'pointer';
    btnOKay.style.transition = '300ms';

    btnOKay.addEventListener('mouseenter',()=>{mouseEnter(btnOKay.id)})
    btnOKay.addEventListener('mouseleave',()=>{mouseLeave(btnOKay.id)})
    btnOKay.addEventListener('click',()=>{
        DivComplete.remove();
        ShowContainerForm();
        CleanInputs();
    });


    DivComplete.append(Title,btnOKay);
    document.getElementById('FormServices').append(DivComplete);
};