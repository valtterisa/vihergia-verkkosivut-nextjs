import React, { useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '../src/komponentit/Navbar/Navbar'
import { TietosuojaselosteContent } from '../src/komponentit/TietosuojaselosteContent/TietosuojaselosteContent'
import { Footer } from '../src/komponentit/Footer/Footer'

export const Tietosuojaseloste = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
  }, []);

  return (
    <>
        <Head>
          <title>Tietosuojaseloste - Vihergia Oy</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
      </Head>
      <Navbar />
      <TietosuojaselosteContent />
      <Footer />
    </>
  )
}

export default Tietosuojaseloste