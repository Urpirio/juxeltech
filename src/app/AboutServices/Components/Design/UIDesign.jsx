import DataTitleUIdesign from '../../Data/UIdesing/DataTitleUIdesign';
import SubTitleServices from '../Subcomponents/SubTitleServices';

export default function UIDesign() {

  const UIdesign = DataTitleUIdesign.map(DTUID => {
    return(
      <SubTitleServices
      titlePart1 = {DTUID.titlePart1}
      titlePart2 ={DTUID.titlePart2}
      description = {DTUID.description}
      />
    )
  })

  return (UIdesign)};
