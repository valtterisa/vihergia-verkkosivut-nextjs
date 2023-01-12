import React from 'react'
import Link from 'next/link';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const Team = () => {
  return (
    <div className='team-container'>
        
        <h1>Miksi valita aurinkoenergia?</h1>

        <div className='team-content'>

          <div className='team-content-text'>
          
          </div>

          <div className='team-list'>
            <div className='team-list-item'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div className='team-list-item-content'>
                <h3>Ekologisuus</h3>
                <p>Aurinkoenergia on ekologista, koska se on uusiutuva energianlähde.</p><br />
              </div>
            </div>
            
            <div className='team-list-item'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div className='team-list-item-content'>
              <h3>Rahansäästö</h3>
              <p>Aurinkopaneelien ansiosta voit tuottaa energiaa omiin tarpeihisi ja säästät samalla rahaa. 
                Paneelit eivät vaadi isoja ylläpidollisia toimenpiteitä ja siksi ne ovat myös halpa ylläpitää.
                Ylijäämäsähkön voi myydä omalle sähköyhtiölle.</p><br />
              </div>
            </div>

            <div className='team-list-item'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div className='team-list-item-content'>
              <h3>Pitkäikäisyys</h3>
              <p>Aurinkopaneelien käyttöikä on noin 20-30-vuotta.</p><br />
              </div>
            </div>
            
            
          </div>

        </div><br/>
        <div className='team-buttons'>
          <Link href="/palvelumme/#tarjous"><Button className='btns' buttonStyle='btn--palvelut' buttonSize='btn--medium'>PYYDÄ TARJOUS</Button></Link>
          <Link href="/aurinko-energia"><Button buttonStyle='btn--palvelut' buttonSize='btn--medium'>LISÄÄ AURINKOENERGIASTA</Button></Link>
        </div>
    </div>
  );
}

export default Team;