
export const ShowContainerForm = () => {
    for(let x = 1; x < 5; x++){
        document.getElementById(`ContainerForm${x}`).style.display = 'flex';
    }
};