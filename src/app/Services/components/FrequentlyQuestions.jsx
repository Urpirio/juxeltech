import DataFrenquentlyQuestion from "../Data/FrequentlyQuestion/DataFrequentlyQuestion";
import SubFrequentlyQuestion from "./Subcomponents/SubFrequentlyQuestion";


export default function FrequentlyQuestions() {


    const Questionlist = DataFrenquentlyQuestion.map(DFQ => {
        return(
            <SubFrequentlyQuestion
            NumberQuestion ={DFQ.NumberQuestion}
            question = {DFQ.question}
            answer = {DFQ.answer}
            State = {DFQ.State}
            classQuetion = {DFQ.classQuetion}
            ClassIcon = {DFQ.ClassIcon}
            Animaciones = {DFQ.Animaciones}
            // AnimacionMovil = {DFQ.AnimacionMovil}
            // AnimacionTablet = {DFQ.AnimacionTablet}
            />
        )
    })


  return (
    <section className="flex flex-col items-center py-10 gap-y-5 ">
        <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl">Frequently asked <span className="text-blue-600">Question</span></h2>
                <div className="w-20 h-1 bg-blue-600 rounded-2xl"></div>
            </div>
        </div>
        <div className="flex flex-col justify-center w-[50%] min-w-90 sm:min-w-140 border-1 border-blue-400 rounded-2xl shadow-xl ">
            {Questionlist}
        </div>
    </section>
  )
};
