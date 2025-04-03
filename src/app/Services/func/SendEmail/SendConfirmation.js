import { FormServices } from "../CheckValue/CheckValue";


export const SendConfirmation = async () => {

    fetch('api/sendConfirmation',{
        method: 'POST',
        body: JSON.stringify({
            Email: FormServices.Email,
            FullName: FormServices.FullName,
        })
    })
};
