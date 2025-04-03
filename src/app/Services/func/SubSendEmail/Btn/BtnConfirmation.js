import { SendConfirmation } from "../../SendEmail/SendConfirmation";
import { SendInformation } from "../../SendEmail/SendInformation";

export const Btnconfirmation = (CodeSended,InputCode,ErrorSpan) => {

    if(CodeSended == InputCode){
        document.getElementById(ErrorSpan).style.display = 'none';
        document.getElementById('FormServices').style.borderColor = '#155dfc';
        document.getElementById('divInput').remove();
        document.getElementById('divbtns').remove();
        SendConfirmation();
        SendInformation();
        
    }else{
        document.getElementById(ErrorSpan).style.display = 'flex';
        document.getElementById('FormServices').style.borderColor = 'red';
    }
};