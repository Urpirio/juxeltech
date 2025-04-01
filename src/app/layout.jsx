'use client';

import '../Style/Globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import MovilMenu from '@/components/MovilMenu';
import { IsScroll } from '@/func/Deploy/DeployMenu';

export default function layout({children}) {


  return (
    <html lang="en">
      <Head/>
    <body onTouchMove={IsScroll}>
      <Header/>
      <MovilMenu/>
        {children}
      <Footer/>
    </body>
    </html>
  )
};
