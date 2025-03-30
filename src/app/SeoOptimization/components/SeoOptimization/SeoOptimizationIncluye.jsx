import { SeoServiceList1,SeoServiceList2 } from "./SubSeoOptimization";

export default function SeoOptimizationIncluye() {

  return (
    <section className='flex flex-wrap justify-center gap-5 py-5'>
        <div className='flex flex-col gap-5 w-[40%] min-w-90 px-5'>
            <SeoServiceList1/>
        </div>
        <div className='flex flex-col gap-5 w-[40%] min-w-90 px-5'>
            <SeoServiceList2/>
        </div>

    </section>
  )
}
