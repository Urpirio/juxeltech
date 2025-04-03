export const CleanInputs = () => {
    for(let x = 1; x < 6; x++ ){
        document.querySelector(`.InputServices${x}`).value = '';
    };
};