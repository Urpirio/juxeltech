
import DataClientsSay from "@/Data/DataClientsSay";

const ClientsSayStar = () => {
    

        for(let i = 0; i < DataClientsSay[0].Star.length; i++){
            let Icon = document.createElement('i');
            Icon.className = DataClientsSay[0].Star[i].classStar;
            document.getElementById(`${DataClientsSay[0].Idstar}`).append(Icon);
        };


};
export default ClientsSayStar;