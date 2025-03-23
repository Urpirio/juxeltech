'use client';
import React from 'react';
import '../Style/Globals.css';
import Header from '@/components/Header';
import logo from '@/../public/SimpleSolution/image.png'

export default function layout({children}) {


  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <title>JuxelTech</title>
    </head>
    <body >
      <Header/>
        {children}
    </body>
    </html>
  )
}
