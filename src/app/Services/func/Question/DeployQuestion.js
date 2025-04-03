'use client';
import DataFrenquentlyQuestion from "../../Data/FrequentlyQuestion/DataFrequentlyQuestion";

const DeployQuestion = (NumberQuestion) => {
    for(let x = 0; x < DataFrenquentlyQuestion.length; x++){
        if(DataFrenquentlyQuestion[x].NumberQuestion === NumberQuestion){
            const container = document.getElementById(DataFrenquentlyQuestion[x].classQuetion);
           
            if(DataFrenquentlyQuestion[x].State === false){
                container.style.display = 'flex';
                document.querySelector(`.${DataFrenquentlyQuestion[x].ClassIcon}`).style.rotate = '90deg';
                DataFrenquentlyQuestion[x].State = true;
            }else{
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