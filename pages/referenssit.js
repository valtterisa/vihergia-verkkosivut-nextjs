import React, {useEffect} from 'react';
import Head from 'next/head';
import { ReferenssiKohteet } from '../src/komponentit/ReferenssiKohteet'

export const Referenssit = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
  }, []);

  return (
      <div className='referenssitFooter'>
        <Head>
          <title>Referenssit - Vihergia Oy</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

	        <meta name="description" content="Tutustu meidän valmiisiin kohteisiin. Kuvien ohessa näkyy aurinkopaneelien malli, määrä ja niiden tuottama teho."/>
	        <link rel="canonical" href="https://vihergia.fi/referenssit" />
	        <meta property="og:locale" content="fi_FI" />
	        <meta property="og:type" content="website" />
	        <meta property="og:title" content="Palvelumme - Vihergia Oy" />
	        <meta property="og:description" content="Tutustu meidän valmiisiin kohteisiin. Kuvien ohessa näkyy aurinkopaneelien malli, määrä ja niiden tuottama teho." />
	        <meta name="keywords" content="Vihergia, vihergia, Vihergia Oy, vihreä, energia, green, energy, Uusimaa, Helsinki, Lahti, Aurinkopaneelit, aurinkopaneeli,
          aurinko, solar, panel, paneeli, asennus, installation, palvelu, service, reliable, luotettava, yritys, etelä, suomi, koko, Koko, Etelä" />
          <meta property="og:url" content="https://vihergia.fi/referenssit" />
	        <meta property="og:site_name" content="Vihergia Oy" />
	        <meta property="og:image" content="https://vihergia.fi/vihergia-etusivu-kuva.png" />
	        <meta property="og:image:width" content="1280" />
	        <meta property="og:image:height" content="843" />
	        <meta property="og:image:type" content="image/jpeg" />
	        <meta name="twitter:card" content="summary_large_image" />

          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Head>
        <ReferenssiKohteet />
      </div>
  )
}

export default Referenssit