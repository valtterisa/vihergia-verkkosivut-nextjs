import React from 'react'

export const ReferenssiKohteet = () => {
  return (
    <div className='referenssikohteet-container'>
        <h1>Valmiit kohteemme</h1>
        <div className='referenssikohteet-content'>
            <div className='kohde-content'>
                
                <div className='kohde-kuva1'></div>
                <div className='kohde-teksti'>
                    <p>Sijainti: Kajaani</p>
                    <p>Aurinkopaneeli: TSC Power XT 365W</p>
                    <p>Määrä: 24 kpl</p>
                    <p>Teho: 8.76 kWp</p>
                </div>
            </div>

            <div className='kohde-content'>
                <div className='kohde-kuva2'></div>
                <div className='kohde-teksti'>
                    <p>Sijainti: Sotkamo</p>
                    <p>Aurinkopaneeli: TSC Power XT 400W</p>
                    <p>Määrä: 24 kpl</p>
                    <p>Teho: 9.6 kWp</p>
                </div>
            </div>

            <div className='kohde-content'>
                <div className='kohde-kuva3'></div>
                <div className='kohde-teksti'>
                    <p>Sijainti: Päijät-Häme</p>
                    <p>Aurinkopaneeli: TSC Power XT 365W</p>
                    <p>Määrä: 36 kpl</p>
                    <p>Teho: 13.14 kWp</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReferenssiKohteet