import { ConfirmEmail } from "../Confirmation/ConfirmEmail";


let IScomplete;
export const Loading = (State,CodeSended) => {
   if(State === undefined){
    const Divloading = document.createElement('div');
    Divloading.id = 'Divloading';
    Divloading.style.width = '100%';
    Divloading.style.display = 'flex';
    Divloading.style.flexDirection = 'column'
    Divloading.style.justifyContent = 'center';
    Divloading.style.alignItems = 'center';

    const H2 = document.createElement('div');

    const DivBar = document.createElement('div');
    DivBar.style.padding = '2px';
    DivBar.style.borderRadius = '10px';
    DivBar.style.height = '30px';
    DivBar.style.width = '60%';
    DivBar.style.border = '1px solid gray';

    var ChargeBar = document.createElement('div');
    ChargeBar.style.background = '#1447e6';
    ChargeBar.style.height = '100%';
    ChargeBar.style.width = '2%';
    ChargeBar.style.borderRadius = '10px';
    ChargeBar.style.transition = '300ms';

    let CounterLoading;

    var ISloading = setInterval(()=>{

        if(CounterLoading === undefined){
            CounterLoading = 2;
        }else if(CounterLoading < 100 && IScomplete === undefined){
            CounterLoading =  CounterLoading + 2;
            ChargeBar.style.width = `${CounterLoading}%`;
        }else if(IScomplete === true){
            ChargeBar.style.width = '100%';
        }else{
            
        }

    },100);

    DivBar.append(ChargeBar);

    Divloading.append(H2,DivBar);

    document.getElementById('FormServices').append(Divloading);
   }else{
    IScomplete = true;
    clearInterval(ISloading);
    document.getElementById('Divloading').remove();
    ConfirmEmail(CodeSended);
   }


};
