import { FormServices } from "../CheckValue/CheckValue";
import { ConfirmationSended } from "../SubSendEmail/Confirmation/ConfirmationSended";


export const SendInformation = async () =>{

    fetch('api/send',{
        method: 'POST',
        body: JSON.stringify({
            Email:FormServices.Email,
            FullName: FormServices.FullName,
            Phonenumber: FormServices.PhoneNumber,
            Company: FormServices.Company,
            AboutProyect: FormServices.AboutProyect,
        })
    }).then(()=>{
       ConfirmationSended()
    }).catch(()=>{

    });

};