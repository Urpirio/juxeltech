import SubFrequentlyQuestion from "./Subcomponents/SubFrequentlyQuestion";


export default function FrequentlyQuestions() {

  return (
    <section className="flex flex-col items-center py-10 gap-y-5">
        <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="sm:text-3xl text-[28px] ">Frequently asked <span className="text-blue-600">Question</span></h2>
                <div className="w-20 h-1 bg-blue-600 rounded-2xl"></div>
            </div>
        </div>
        <div className=" flex justify-center w-[60%] p-5">
             <div className="flex flex-col justify-center w-[100%] min-w-80 border-1 border-blue-400 rounded-2xl shadow-xl">
               <SubFrequentlyQuestion/>
            </div>
        </div>
    </section>
  )
};
