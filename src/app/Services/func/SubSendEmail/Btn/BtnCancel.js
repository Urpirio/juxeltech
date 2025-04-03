import { ShowContainerForm } from "../ShowAndHidden/ShowContainerForm";

export const Btncancel = (IdInput,IdBtns,) => {
    document.getElementById(IdInput).remove();
    document.getElementById(IdBtns).remove();
    ShowContainerForm();
};