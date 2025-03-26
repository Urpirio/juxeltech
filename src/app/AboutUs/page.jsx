import React from 'react';
import DataAboutSection from './Data/DataAboutSections';
import AboutSection from './components/AboutSection';
import Founder from './components/Founder';

export default function About() {

  const ListSection = DataAboutSection.map(DAS => {
    return(
      <AboutSection
      title = {DAS.title}
      Image = {DAS.Image}
      Text1 = {DAS.Text1}
      Text2 = {DAS.Text2}
      classOrder = {DAS.classOrder}
      classAlign = {DAS.classAlign}
      padding = {DAS.padding}
      />
    )
  })



  return (
    <main>
      {ListSection}
      <Founder/>
    </main>
  )
};
