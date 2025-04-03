import { Resend } from "resend";
import JuxelTechDataForm from "../../../../Email/JuxelTechDataForm";

const resend = new Resend('re_Ytjrd1Ks_5FkyBAJ4naso1CzdNAqPxzVL');

export const POST = async (request) => {
    const {FullName,Email,Phonenumber,AboutProyect,Company} = await request.json();
    await resend.emails.send({
        from: `Udev <urpiriodev@urpiriodev.online>`,
        to: ['juxeltech@gmail.com','enmanuel20039@hotmail.com','nelsonjavierhernandez016@gmail.com','Urpiriojunior@gmail.com'],
        subject: `Nuevo Cliente`,
        react: <JuxelTechDataForm
        FullName = {FullName}
        Email = {Email}
        Phonenumber = {Phonenumber}
        AboutProyect = {AboutProyect}
        Company = {Company}
        />,
        text: ``,
    })
};