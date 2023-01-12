import React from 'react';
import Head from 'next/head';
import { Navbar } from '../src/komponentit/Navbar/Navbar'
import { KiitosTeksti } from '../src/komponentit/KiitosTeksti/KiitosTeksti'
import { Footer } from '../src/komponentit/Footer/Footer'

export const Kiitos = () => {

  return (
    <>
      <Head>
        <title>Kiitos yhteydenotosta- Vihergia Oy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Navbar/>
      <KiitosTeksti />
      <Footer />
    </>
  );
}

export default Kiitos
