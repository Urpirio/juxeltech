import React from 'react'
import DataTitleWebDevelopments from '../Data/WebDevelopment/DataTitleWebDevelopments'
import SubTitleServices from './Subcomponents/SubTitleServices'

export default function WebDevelopment() {

  const Webdevelopment = DataTitleWebDevelopments.map(DTWD => {
    return(
      <SubTitleServices
      titlePart1 = {DTWD.titlePart1}
      titlePart2 = {DTWD.titlePart2}
      description = {DTWD.description}
      />
    )
  })

  return (Webdevelopment);
};
