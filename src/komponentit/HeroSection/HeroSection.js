import React from 'react';
import Link from 'next/link';
import { Button } from '../Button/Button';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      <h1>Aurinkopaneelit katollesi luotettavasti koko Suomen alueella</h1>
      
      <div className='hero-btns'>
      <Link href="/palvelumme/#tarjous"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          PYYDÄ TARJOUS
        </Button></Link>

        <Link href="/yhteystiedot"><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          OTA YHTEYTTÄ
        </Button></Link>

      </div>
    </div>
  );
}

export default HeroSection;
