import { Resend } from "resend";
import JuxelTechCode from "../../../../Email/JuxelTechCode";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export const POST = async (request) =>{
    const {Email,CodeForVerify} = await request.json();
    await resend.emails.send({
        from: `Udev <urpiriodev@urpiriodev.online>`,
        to: Email,
        subject: `Verification code`,
        react: <JuxelTechCode
        CodeForVerify = {CodeForVerify}
        />,
        text: ``,
    })
};