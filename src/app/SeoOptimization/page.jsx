// import { Main } from 'next/document'
import React from 'react'
import SeoOptimization from './components/SeoOptimization'
import SeoOptimizationIncluye from './components/SeoOptimizationIncluye'
import UIDesign from './components/UIDesign'
import UIDesignIncluye from './components/UIDesignIncluye'

export default function page() {
  return (
    <main>
      <SeoOptimization/> 
      <SeoOptimizationIncluye/> 
      <UIDesign/>
      <UIDesignIncluye/>
    </main>
  )
}
