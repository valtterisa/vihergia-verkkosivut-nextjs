import React, { useEffect } from 'react';
import Head from 'next/head'

import { HeroSection } from '../src/komponentit/HeroSection'
import { Info } from '../src/komponentit/Info'
import { Team } from '../src/komponentit/Team'
import { ReferenssitInfo } from '../src/komponentit/ReferenssitInfo'

export default function Etusivu() {

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
        <title>Etusivu - Vihergia Oy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
	      <meta property="og:description" content="Vihergia Oy on aurinkopaneelien myynti- ja asennussyritys. Toimimme pääosin Etelä-Suomessa yrityksen sijainnin vuoksi, mutta tarpeen tullen toteutamme asennuksia myös muualla Suomessa. Ota meihin yhteyttä ja katsotaan hommat kuntoon sijainnista riippumatta." />
	      <link rel="canonical" href="https://vihergia.fi/" />
	      <meta property="og:locale" content="fi_FI" />
	      <meta property="og:type" content="website" />
	      <meta property="og:title" content="Etusivu - Vihergia Oy" />
	      <meta property="og:description" content="Vihergia Oy on aurinkopaneelien myynti- ja asennussyritys. Toimimme pääosin Etelä-Suomessa yrityksen sijainnin vuoksi, mutta tarpeen tullen toteutamme asennuksia myös muualla Suomessa. Ota meihin yhteyttä ja katsotaan hommat kuntoon sijainnista riippumatta." />
	      <meta name="keywords" content="Vihergia, vihergia, Vihergia Oy, vihreä, energia, green, energy, Uusimaa, Helsinki, Lahti, Aurinkopaneelit, aurinkopaneeli,
        aurinko, solar, panel, paneeli, asennus, installation, palvelu, service, reliable, luotettava, yritys, etelä, suomi, koko, Koko, Etelä" />
        <meta property="og:url" content="https://vihergia.fi/" />
	      <meta property="og:site_name" content="Vihergia Oy" />
        <meta property="og:image" content="https://vihergia.fi/vihergia-etusivu-kuva.png" />
	      <meta property="og:image:width" content="1280" />
	      <meta property="og:image:height" content="843" />
	      <meta property="og:image:type" content="image/jpeg" />
	      <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <HeroSection />
      <Info />
      <Team />
      <ReferenssitInfo />
    </>
  );
}
