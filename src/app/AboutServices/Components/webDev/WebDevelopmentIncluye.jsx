import { WebFrontendlist, WebBackendlist,WebSopportlist,WebFullStack } from "./SubWebDevelopment";

export default function WebDevelopmentIncluye() {
  return (
    <section className='flex flex-wrap sm:justify-center justify-start pt-5 pb-5 gap-5'>{/*Contenedor de los elementos*/}
        <div className=' flex flex-wrap  min-w-80  gap-5 px-5 '>
           <WebFrontendlist/>
           <WebBackendlist/>
        </div>
        <div className=' flex flex-wrap  lg: min-w-80 gap-5 px-5'>
            <WebFullStack/>
            <WebSopportlist/>
        </div>
    </section>
  )
}
