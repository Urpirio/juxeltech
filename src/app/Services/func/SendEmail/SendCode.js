import { FormServices } from "../CheckValue/CheckValue";
import { HiddenContainerForm } from "../SubSendEmail/ShowAndHidden/HiddenContainerForm";
import { Loading } from "../SubSendEmail/Loadings/Loading";



export const SendCode = async () => {
    const RandomNumber = Math.floor(Math.random() * (999999 - 100000) + 100000);
    const filter = FormServices.AboutProyect != '';
    const filter2 = FormServices.Company != '';
    const filter3 = FormServices.Email != '';
    const filter4 = FormServices.FullName != '';
    const filter5 = FormServices.PhoneNumber != '';

    
    

    if(((filter && filter2) && (filter3 && filter4)) && filter5){
        document.getElementById('FormServices').style.borderColor = '#155dfc';
        document.getElementById('ErrorForm').style.display = 'none';
        HiddenContainerForm()
        Loading();

        fetch('api/sendCode',{
            method: 'POST',
            body: JSON.stringify({
                Email: FormServices.Email,
                CodeForVerify: RandomNumber,
            }),
    
        }).then(()=>{
            
           Loading(true,RandomNumber);
    
        }).catch((err)=>{
    
    
    
        });
    }else{
        document.getElementById('FormServices').style.borderColor = 'red';
        document.getElementById('ErrorForm').style.display = 'flex';
    }
    
    
};


// const CodeSend = async () => {

    
// };
