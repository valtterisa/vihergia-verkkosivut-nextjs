import React from 'react'

export const TietoaMeista = () => {
  return (
    <div className='tietoa-container'>
        <h1>Vihergia Oy</h1>
        <div className='tietoa-content'>
            <div className='tietoa-content-teksti'>
                <p>
                    Vihergia Oy on aurinkopaneelien myynti- ja asennussyritys. Asennamme aurinkopaneeleita
                    kaikenlaisiin- ja kokoisiin kohteisiin mm. omakotitaloihin, yritysten toimitiloihin, kerrostaloihin,
                    ja vaikka maatilasi siilon katolle.
                </p>
            </div>

            <div className='tietoa-toiminta-alue-content'>
                <div className='tietoa-toiminta-alue-kuva'></div>
                <div className='tietoa-toiminta-alue'>
                    <div className='tietoa-toiminta-alue-teksti'>
                        <h1>Toiminta-alue</h1><br />
                        <p>Toimimme pääosin Etelä-Suomessa yrityksen sijainnin vuoksi, tarpeen
                            tullen toteutamme asennuksia myös muualla Suomessa. Ota meihin yhteyttä ja
                            katsotaan hommat kuntoon sijainnista riippumatta.
                        </p>
                    </div>

                    <div className='tietoa-toiminta-pisteet'>
                        <div className='pisteet-content'>
                            <div className='pisteet1'></div>
                            <h3>Myyntiesittelijä</h3>
                        </div>

                        <div className='pisteet-content'>
                            <div className='pisteet2'></div>
                            <h3>Päätoimialue</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default TietoaMeista