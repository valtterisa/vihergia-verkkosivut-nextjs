import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div className='footer-container'>

      <section className='social-media'>
        <div className='social-media-wrap'>

          <div className='footer-logo'>

            {/* Yrityksen logo */}
            <Link href='/' className='social-logo'>
            <Image src={'/testiLogo2.png'} alt='Logo' width={250} height={110} />
            </Link>
          </div>

          
            <div className='footer-link-items'>
              <Link href='/'>Etusivu</Link>
              <Link href='/palvelumme'>Palvelumme</Link>
              <Link href='/yhteystiedot'>Yhteystiedot</Link>
              <Link href='/referenssit'>Referenssit</Link>
              <Link href='/tietoa-meista'>Tietoa meistä</Link>
              <Link href="/palvelumme/#tarjous"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>PYYDÄ TARJOUS</Button></Link>
            </div>
          
          <div className='footer-contact'>
            <div className='social-icons'>
            
            <Link
              className='social-icon-link facebook' href='https://www.facebook.com/people/Vihergia-Oy/100089641868454/' target='_blank' aria-label='Facebook'>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>

            <Link
              className='social-icon-link instagram' href='https://instagram.com/vihergia_oy?igshid=YmMyMTA2M2Y=' target='_blank' aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            
            

            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
          <p>Toni Pystö</p>
          <p>044 088 3886</p>
          <p>toni.pysto@vihergia.fi</p>
        </div>
          
        </div>
        <hr />
        <div className='website-rights'>
          <Link href='/tietosuojaseloste'>Tietosuojaseloste</Link>
          <p>Vihergia Oy &copy; 2023</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
