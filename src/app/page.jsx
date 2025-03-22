import AboutUs from '@/components/AboutUs';
import BestServices from '@/components/BestServices';
import Section1 from '@/components/Section1';
import SimpleSolutions from '@/components/SimpleSolutions';
import React from 'react';

export default function page() {
  return (
    <main>
      <Section1/>
      <BestServices/>
      <SimpleSolutions/>
      <AboutUs/>
    </main>
  )
}
