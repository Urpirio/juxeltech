'use client';
import DataFrenquentlyQuestion from "../Data/FrequentlyQuestion/DataFrequentlyQuestion";

const DeployQuestion = (NumberQuestion) => {
    for(let x = 0; x < DataFrenquentlyQuestion.length; x++){
        if(DataFrenquentlyQuestion[x].NumberQuestion === NumberQuestion){
            const container = document.getElementById(DataFrenquentlyQuestion[x].classQuetion);
           
            if(DataFrenquentlyQuestion[x].State === false){
                container.style.display = 'flex';
                document.querySelector(`.${DataFrenquentlyQuestion[x].ClassIcon}`).style.rotate = '90deg';

                // switch(screen.width){
                //     case(screen.width > 667):
                //         container.style.animation = `${DataFrenquentlyQuestion[x].AnimacionPc}Start 1s`;
                //         break;
                //     case(screen.width < 667):
                //         container.style.animation =`${DataFrenquentlyQuestion[x].AnimacionMovil}Start 1s`;
                //         break;
                //     // default:
                //     //     container.style.animation = `${DataFrenquentlyQuestion[x].AnimacionTablet}Start 1s`;
                //     //     break;
                // };
                
                DataFrenquentlyQuestion[x].State = true;
            }else{

                // switch(screen.width){
                //     case(screen.width > 667):
                //         container.style.animation = `${DataFrenquentlyQuestion[x].AnimacionPc}End 1s`;
                //         break;
                // };
                
                document.getElementById(DataFrenquentlyQuestion[x].classQuetion).style.display = 'none';
                document.querySelector(`.${DataFrenquentlyQuestion[x].ClassIcon}`).style.rotate = '0deg'
                DataFrenquentlyQuestion[x].State = false;
            }
        }else{
            continue;
        }
    }
};
export default DeployQuestion;