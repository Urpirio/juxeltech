'use client';

import '../Style/Globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from '@/components/Head';

export default function layout({children}) {


  return (
    <html lang="en">
      <Head/>
    <body>
      <Header/>
        {children}
      <Footer/>
    </body>
    </html>
  )
};
