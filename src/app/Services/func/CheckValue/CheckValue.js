



export let FormServices = {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Company: '',
    AboutProyect: '',
};

export const CheackValue = () => {
    console.log(FormServices)
    FormServices.FullName = document.getElementById('FullNameS').value;
    FormServices.Email = document.getElementById('EmailS').value;
    FormServices.PhoneNumber = document.getElementById('PhoneNumber').value;
    FormServices.Company = document.getElementById('CompanyS').value;
    FormServices.AboutProyect = document.getElementById('AboutProyetS').value;
};
