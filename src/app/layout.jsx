'use client';

import '../Style/Globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import MovilMenu from '@/components/MovilMenu';

export default function layout({children}) {


  return (
    <html lang="en">
      <Head/>
    <body>
      <Header/>
      <MovilMenu/>
        {children}
      <Footer/>
    </body>
    </html>
  )
};
