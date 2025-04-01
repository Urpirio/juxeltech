
export let IsDeployMenu = [
    {
        Boolean: false,
    }
];


export const DeployMenu = () => {
    const IconMenu =  document.getElementById('IconMenu');
    const MovilMenu = document.getElementById('MovilMenu');
    if(IsDeployMenu[0].Boolean === false){
        MovilMenu.style.display = 'flex'
        IconMenu.className = 'bx bx-x';
        IsDeployMenu[0].Boolean = true;
    }else{
        MovilMenu.style.display = 'none';
        IconMenu.className = 'bx bx-menu';
        IsDeployMenu[0].Boolean = false;
    };

};
//Esto evalua si se esta haciendo scroll  y si el menu esta dezplegado.
export const IsScroll = () =>{
    if(IsDeployMenu[0].Boolean === true){
        MovilMenu.style.display = 'none';
        IconMenu.className = 'bx bx-menu';
        IsDeployMenu[0].Boolean = false;
    }else{
    }
};