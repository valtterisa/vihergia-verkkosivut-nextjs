import React, { useState, useRef } from 'react';
import { Button } from './Button';

export const TarjousForm = () => {
      const form = useRef();
      
      const [checkedValues, setValue] = useState([])

      function handleChange(event){
        const {value, checked} = event.target

        if (checked) {
          setValue(pre => [...pre, value])
        } else {
          setValue(pre => {
            return [...pre.filter(service => service !== value)]
          })
        }
      }
      console.log(checkedValues)
      
      
      const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div id='tarjous' className='tarjous-container'>
      <h1>Pyydä tarjous</h1><br/>
      <p>Täytä lomake ja saat tarjouksen palveluista</p>

        <form ref={form} className='tarjous-form' action="https://formsubmit.co/b2c9583e99341cddc50a9964f6c336a3" encType="multipart/form-data" method="POST">
          
            <input type="text" className='nameTarjous' name="Nimi" required placeholder='Nimi*'/>
          
            <input type="email" className='emailTarjous' name="Sähköposti" required placeholder='Sähköposti*'/>

            <input type="text" className='emailTarjous' name="Puhelinnumero" required placeholder='Puhelinnumero*'/>

            <input type="text" className='emailTarjous' name="Osoite" required placeholder='Kohteen osoite*'/>
                  
            <input type="text" className='emailTarjous' name="Kulutus" required placeholder='Arvioitu sähkönkulutus (kWh/vuosi)*'/>

            <div className='tarjous-checkbox'>
              <input type="checkbox" id="palvelu1" name="Aurinkopaneelien myynti- ja asennus" value='Kyllä' onChange={handleChange}/>
              <label> Aurinkopaneelien asennus</label><br/>
              <input type="checkbox" id="palvelu2" name="Katon pinnoitus- ja korjaustyot" value='Kyllä' onChange={handleChange}/>
              <label> Katon pinnoitus- ja korjaustyöt</label><br/>
              <input type="checkbox" id="palvelu3" name="Ilmalämpöpumppujen asennus" value='Kyllä' onChange={handleChange}/>
              <label> Ilmalämpöpumppujen asennus</label>
            </div>

          <textarea className='messageTarjous' name="Viesti" placeholder='Mahdolliset lisätiedot (valinnainen)'/>
          <div className='tarjous-files'>
              <label className='valitse-tiedosto'>
                <i className="fa fa-file" />   Liitä kuva kohteesta (pdf)<input type="file" className='tarjous-file-icon' name="tiedosto" accept='application/pdf' onChange={(e) => setSelectedFile(e.target.files[0].name)} required/>
              </label>
              <p className='valittu-tiedosto-nimi'>{selectedFile}</p>
          </div>
          
          <input type="hidden" name="_subject" value="Tarjouspyyntö verkkosivut" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.vihergia.fi/kiitos" />
          <input type="hidden" name="_template" value="box" />

          <Button buttonStyle={'btn--submit'}>LÄHETÄ</Button>
        </form>
    </div>
  )
}

export default TarjousForm

