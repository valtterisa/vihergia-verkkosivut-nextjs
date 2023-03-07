import React from 'react';
import { Button } from './Button';
import Link from "next/link"

export const Info = () => {

  return (
    <div className='info'>

      <h1>Mikä on Vihergia Oy?</h1>

      <br/>
      <br/>

      <div className='textInfo'>
      Vihergia on aurinkopaneelien myynti- ja asennusyritys. Teemme asennuksia kaikenlaisiin- ja kokoisiin kohteisiin.
      Toimimme pääosin Etelä-Suomessa, mutta tarvittaessa asennamme myös muualla
      Suomessa.

      <br/>
      <br/>

      Teemme myös katon korjaus- ja pinnoitustöitä.

      </div>
      
      <br/>
      <br/>

      <div className='readMore'>
      <Link href="/palvelumme"><Button buttonStyle='btn--readMore'>LUE LISÄÄ PALVELUISTAMME</Button></Link>
      </div>

    </div>
  );
}

export default Info;
