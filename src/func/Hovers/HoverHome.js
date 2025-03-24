let BoleanoHover;
const HoverHome = () => {
    if(BoleanoHover == undefined){
        BoleanoHover = true;
        document.getElementById('LineHome').style.animation = 'LineAnimationStart 300ms';
        setTimeout(()=>{
            document.getElementById('LineHome').style.width = '100%';
        },300)
    }else{
        BoleanoHover = undefined;
        document.getElementById('LineHome').style.animation = 'LineAnimationEnd 300ms';
        setTimeout(()=>{
            document.getElementById('LineHome').style.width = '0%';
        },300)
    }
};
export default HoverHome;