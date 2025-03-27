'use client'
import React from 'react'
import DeployQuestion from '../../func/DeployQuestion'

export default function SubFrequentlyQuestion(props) {



  return (
    <article className='flex flex-col items-center p-1'>
        <div onClick={()=>{DeployQuestion(props.NumberQuestion)}} className='flex items-center justify-between w-[100%] p-2 text-blue-600 border-b-1 border-gray-200 rounded-t-2xl'>
            <h2 className='text-xl '>{props.question}</h2><i className={`bx bx-chevron-right text-4xl transition-transform duration-300 ${props.ClassIcon}`}></i>
        </div>
        <div className={`hidden text-gray-700 w-[100%] p-1 border-b-1 border-gray-200 
         `} id={props.classQuetion}>
            <p className={`${props.Animaciones}`}>
            {props.answer}
            </p>
        </div>
    </article>
  )
}
