
let BoleanoHover;
const HoverAbout = () => {
    if(BoleanoHover == undefined){
        BoleanoHover = true;
        document.getElementById('LineAbout').style.animation = 'LineAnimationStart 300ms';
        setTimeout(()=>{
            document.getElementById('LineAbout').style.width = '100%';
        },300)
    }else{
        BoleanoHover = undefined;
        document.getElementById('LineAbout').style.animation = 'LineAnimationEnd 300ms';
        setTimeout(()=>{
            document.getElementById('LineAbout').style.width = '0%';
        },300)
    }
};
export default HoverAbout;