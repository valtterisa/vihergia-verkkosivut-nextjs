import React from 'react'
import { Button } from '../Button/Button'
import Link from 'next/link'

export const PalvelutLuettelo = () => {
  return (
    <div className='palvelut-container'>
        <h1>Aurinkoenergia</h1>
        
        <div className='palvelut-content'>
            <div className='aurinko-content'>
              <div className='aurinko-info'>
                <h2>Aurinkopaneelien myynti- ja asennuspalvelut</h2>
                <p>Nykyaikana uusiutuvan energian valitseminen on järkevää. Siirtyminen pois fossiilisista 
                  polttoaineista on väistämätöntä ja siksi etenkin uusiutuvat energiamuodot, kuten aurinkoenergia on alkanut kasvattamaan
                  suosiotaan. Me olemme myös huomanneet tämän ja siksi haluamme tarjota asiakkaillemme luotettavan
                  kumppanin aurinkoenergiaan liittyvissä palveluissa. Meiltä asiakas saa aurinkopaneelien myynti- ja asennuspalvelun 
                  tyytyväisyystakuulla.
                </p>
                <div className='palvelut-buttons'>
                <Link href="/yhteystiedot"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>OTA YHTEYTTÄ</Button></Link>
                  <a href="#tarjous"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>PYYDÄ TARJOUS</Button></a>
                  <Link href="/aurinko-energia"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>LISÄÄ AURINKOENERGIASTA</Button></Link>
                </div>
              </div>

              <div className='aurinko-kuva'>

              </div>
            </div>
            
            <div className='vali-otsikko'>
              <h1>Muut palvelumme</h1>
            </div>
            
            <div className='aurinko-content'>
              <div className='katto-info'>
                <h2>Katon pinnoitus- ja korjauspalvelut</h2>
                <p>Onko katto päässyt rapistumaan vuosien kuluessa? Vai onko tiiliä irronut?
                Meiltä saat ostettua myös katon pinnoitus- ja korjauspalvelut. Varmistamme, että 
                kattosi saa parhaan käsittelyn ja siitä tulee uudenveroinen.
                </p>
                <div className='palvelut-buttons'>
                <Link href="/yhteystiedot"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>OTA YHTEYTTÄ</Button></Link>
                  <a href="#tarjous"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>PYYDÄ TARJOUS</Button></a>
                </div>
              </div>

                <div className='vl'></div>

                <div className='ilma-info'>
                <h2>Ilmalämpöpumppujen asennuspalvelut</h2>
                <p>Ilmalämpöpumput laskevat lämmityskuluja huomattavasti. 
                Kasvaneiden energiakustannusten takia ilmalämpöpumppu on kriittinen osa 
                kiinteistön lämmitystä. Meiltä saat ostettua ilmalämpöpumpun ja sen asennuksen
                kiinteistöösi. 
                </p>
                <div className='palvelut-buttons'>
                <Link href="/yhteystiedot"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>OTA YHTEYTTÄ</Button></Link>
                  <a href="#tarjous"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>PYYDÄ TARJOUS</Button></a>
                </div>
              </div>
            </div>
            
      </div>
    </div>
  )
}

export default PalvelutLuettelo
