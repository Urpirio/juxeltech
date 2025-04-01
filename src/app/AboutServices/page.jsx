import SeoOptimization from "../AboutServices/Components/SeoOptimization/SeoOptimization";
import SeoOptimizationIncluye from "../AboutServices/Components/SeoOptimization/SeoOptimizationIncluye";
import UIDesign from "../AboutServices/Components/Design/UIDesign";
import UIDesignIncluye from "../AboutServices/Components/Design/UIDesignIncluye";
import HowUIDesign from "../AboutServices/Components/Design/HowUIDesign";
import WebDevelopment from "../AboutServices/Components/webDev/WebDevelopment";
import WebDevelopmentIncluye from "../AboutServices/Components/webDev/WebDevelopmentIncluye";

export default function AboutServices() {
  return (
    <main>
      <SeoOptimization/> 
      <SeoOptimizationIncluye/> 
      <UIDesign/>
      <UIDesignIncluye/>
      <HowUIDesign/>
      <WebDevelopment/>
      <WebDevelopmentIncluye/>
    </main>
  )
}
