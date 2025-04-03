import { Resend } from "resend";
import JuxelTechConfirmation from "../../../../Email/JuxelTechConfirmation";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export const POST = async (request) =>{
    const {Email,FullName} = await request.json();
    await resend.emails.send({
        from: `Udev <urpiriodev@urpiriodev.online>`,
        to: Email,
        subject: `Confirmation`,
        react: <JuxelTechConfirmation FullName = {FullName}/>,
        text: ``,
    })
};