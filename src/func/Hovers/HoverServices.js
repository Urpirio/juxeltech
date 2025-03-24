
let BoleanoHover;
const HoverServices = () => {
    if(BoleanoHover == undefined){
        BoleanoHover = true;
        document.getElementById('LineServices').style.animation = 'LineAnimationStart 300ms';
        setTimeout(()=>{
            document.getElementById('LineServices').style.width = '100%';
        },300)
    }else{
        BoleanoHover = undefined;
        document.getElementById('LineServices').style.animation = 'LineAnimationEnd 300ms';
        setTimeout(()=>{
            document.getElementById('LineServices').style.width = '0%';
        },300)
    }
};
export default HoverServices;