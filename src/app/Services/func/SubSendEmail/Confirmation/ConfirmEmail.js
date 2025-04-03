import { mouseEnter,mouseLeave } from "../../GeneralHovers/GeneralHovers";
import { Btncancel } from "../Btn/BtnCancel";
import { Btnconfirmation } from "../Btn/BtnConfirmation";



export const ConfirmEmail = (CodeSended) => {

    
    const divInput = document.createElement('div');
    divInput.id = 'divInput';
    divInput.style.width = '100%';
    divInput.style.flexDirection = 'column';
    divInput.style.display = 'flex';
    divInput.style.gap = '5px';
    divInput.style.alignItems = 'center';

    const labelinput = document.createElement('label');
    labelinput.style.fontSize = '18px';
    labelinput.style.fontWeight = '600';
    labelinput.innerText = 'Enter the code sent to your email';

    const InputCode = document.createElement('input');
    InputCode.type = 'number';
    InputCode.min = 1;
    InputCode.placeholder = 'Write the code here';
    InputCode.style.height = '35px';
    InputCode.style.padding = '10px';
    InputCode.style.borderRadius = '10px';
    InputCode.style.border = '1px solid gray';
    InputCode.style.borderColor = '#1447e6';

    if(screen.width < 667){
        InputCode.style.width = '100%';
    }else{
        InputCode.style.width = '60%';
    };
    

    const ErrorSpan = document.createElement('span');
    ErrorSpan.id = 'ErrorSpan';
    ErrorSpan.innerText = 'Please enter a valid code.'
    ErrorSpan.style.color = 'red';
    ErrorSpan.style.fontSize = '12px';
    ErrorSpan.style.display = 'none';

    divInput.append(labelinput,InputCode,ErrorSpan);


    const divbtns = document.createElement('div');
    divbtns.id = 'divbtns';
    divbtns.style.width = '100%';
    divbtns.style.display = 'flex';
    divbtns.style.alignItems = 'center';
    divbtns.style.justifyContent = 'center';
    divbtns.style.gap = '5px';

    const BtnConfirmEmail = document.createElement('button');
    BtnConfirmEmail.id = 'BtnConfirmEmail';
    BtnConfirmEmail.innerText = 'Confirm Email';
    BtnConfirmEmail.style.display = 'flex';
    BtnConfirmEmail.style.alignItems = 'center';
    BtnConfirmEmail.style.justifyContent = 'center';
    BtnConfirmEmail.style.color = 'white';
    BtnConfirmEmail.style.height = '35px';
    BtnConfirmEmail.style.fontWeight = '600';
    BtnConfirmEmail.style.borderRadius = '10px';
    BtnConfirmEmail.style.background = '#1447e6';
    BtnConfirmEmail.style.width = '130px';
    BtnConfirmEmail.style.padding = '5px';
    BtnConfirmEmail.style.cursor = 'pointer';
    BtnConfirmEmail.style.transition = '300ms';

    BtnConfirmEmail.addEventListener('mouseenter',()=>{
        mouseEnter(BtnConfirmEmail.id)
    })
    BtnConfirmEmail.addEventListener('mouseleave',()=>{
        mouseLeave(BtnConfirmEmail.id)
    })
    BtnConfirmEmail.addEventListener('click',()=>{
        const inputCode = InputCode.value;
        Btnconfirmation(CodeSended,inputCode,ErrorSpan.id)
    });

    const BtnCancel = document.createElement('button');
    BtnCancel.id = 'BtnCancel';
    BtnCancel.innerText = 'Cancel';
    BtnCancel.style.width = '100%';
    BtnCancel.style.display = 'flex';
    BtnCancel.style.alignItems = 'center';
    BtnCancel.style.justifyContent = 'center';
    BtnCancel.style.color = '#1447e6';
    BtnCancel.style.height = '35px';
    BtnCancel.style.fontWeight = '600';
    BtnCancel.style.border = '1px solid #ced4da';
    BtnCancel.style.borderRadius = '10px';
    BtnCancel.style.background = '#e9ecef';
    BtnCancel.style.padding = '5px';
    BtnCancel.style.width = '130px';
    BtnCancel.style.cursor = 'pointer';
    BtnCancel.style.transition = '300ms';

    BtnCancel.addEventListener('mouseenter',()=>{
        mouseEnter(BtnCancel.id)
    });
    BtnCancel.addEventListener('mouseleave',()=>{
        mouseLeave(BtnCancel.id)
    });
    BtnCancel.addEventListener('click',()=>{
        Btncancel(divInput.id,divbtns.id)
    });


    divbtns.append(BtnConfirmEmail,BtnCancel)

    document.getElementById('FormServices').append(divInput,divbtns);

    


};