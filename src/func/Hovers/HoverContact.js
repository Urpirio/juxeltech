
let BoleanoHover;
const HoverContact = () => {
    if(BoleanoHover == undefined){
        BoleanoHover = true;
        document.getElementById('LineContact').style.animation = 'LineAnimationStart 300ms';
        setTimeout(()=>{
            document.getElementById('LineContact').style.width = '100%';
        },300)
    }else{
        BoleanoHover = undefined;
        document.getElementById('LineContact').style.animation = 'LineAnimationEnd 300ms';
        setTimeout(()=>{
            document.getElementById('LineContact').style.width = '0%';
        },300)
    }
};
export default HoverContact;