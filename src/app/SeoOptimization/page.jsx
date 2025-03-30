import SeoOptimization from "./components/SeoOptimization/SeoOptimization";
import SeoOptimizationIncluye from "./components/SeoOptimization/SeoOptimizationIncluye";
import UIDesign from "./components/Design/UIDesign";
import UIDesignIncluye from "./components/Design/UIDesignIncluye";
import HowUIDesign from "./components/Design/HowUIDesign";
import WebDevelopment from "./components/webDev/WebDevelopment";
import WebDevelopmentIncluye from "./components/webDev/WebDevelopmentIncluye";

export default function page() {
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
