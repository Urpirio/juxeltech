'use client';
import DataFrenquentlyQuestion from '../../Data/FrequentlyQuestion/DataFrequentlyQuestion';
import DeployQuestion from '../../func/DeployQuestion'

export default function SubFrequentlyQuestion() {

  const list = DataFrenquentlyQuestion.map( props => {
    return(
      <article key={props.keyId} className='flex flex-col items-center p-1'>
        <div onClick={()=>{DeployQuestion(props.NumberQuestion)}} className='flex items-center justify-between w-[100%] p-2 text-blue-600 border-b-1 border-gray-200 rounded-t-2xl'>
            <h2 className='text-xl '>{props.question}</h2><i className={`bx bx-chevron-right text-4xl transition-transform duration-300 ${props.ClassIcon}`}></i>
        </div>
        <div className={`hidden text-gray-700 p-1 w-[100%] border-b-1 border-gray-200 ${props.Animaciones} `} id={props.classQuetion}>
            <p>
            {props.answer}
            </p>
        </div>
    </article>
    )
  })


  return (list)
};
