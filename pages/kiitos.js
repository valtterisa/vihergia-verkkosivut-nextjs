import React from 'react';
import Head from 'next/head';
import { KiitosTeksti } from '../src/komponentit/KiitosTeksti'

export const Kiitos = () => {

  return (
    <>
      <Head>
        <title>Kiitos yhteydenotosta- Vihergia Oy</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <KiitosTeksti />
    </>
  );
}

export default Kiitos
