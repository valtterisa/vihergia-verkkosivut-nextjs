import React, { useRef } from 'react';
import { Button } from '../Button/Button';

export const OtaYhteytta = () => {
    const form = useRef();

  return (
    <div className='otayhteytta-container'>
      <h1>Ota yhteyttä</h1><br />
      <p>Jäikö jokin asia mietityttämään? 
      </p>
      <div >  
        <form ref={form} className='otayhteytta-form' action="https://formsubmit.co/b2c9583e99341cddc50a9964f6c336a3" method='POST'>
          
          <input type="text" className='name' name="Nimi" required placeholder='Nimi*'/>
          
          <input type="email" className='email' name="Sähköposti" required placeholder='Sähköposti*'/>
          
          <textarea className='message' name="Viesti" required placeholder='Viesti'/>

          <input type="hidden" name="_subject" value="Yhteydenotto verkkosivut" />
          <input type="hidden" name="_next" value="http://localhost:3000/kiitos" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <Button buttonStyle={'btn--submit'}>LÄHETÄ</Button>
        </form>
      </div>
    </div>
  )
}

export default OtaYhteytta
