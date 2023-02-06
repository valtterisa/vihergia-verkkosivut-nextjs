import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Squash as Hamburger } from 'hamburger-react'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // määritellään milloin hampurilaismenu näkyy
    const showButton = () => {
      if (window.innerWidth <= 1024) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

  useEffect(() => {
    showButton();
    setOpen();
  }, []);

  return (
    <>
      <nav className='navbar'>
        
        <div className='navbar-container'>
          <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <Image src={'/testiLogo2.png'} alt='Logo' width={250} height={110} />
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* <FontAwesomeIcon icon={click ? faClose : faBars } /> */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <Link href='/' className='nav-links' onClick={closeMobileMenu}>
                Etusivu
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/palvelumme' className='nav-links' onClick={closeMobileMenu}>
                Palvelumme
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/referenssit' className='nav-links' onClick={closeMobileMenu}>
                Referenssit
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/yhteystiedot' className='nav-links' onClick={closeMobileMenu}>
                Yhteystiedot
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/tietoa-meista' className='nav-links' onClick={closeMobileMenu}>
                Tietoa meistä
              </Link>
            </li>

            <li className='nav-item-tarjous'>
              <Link href="/palvelumme/#tarjous" onClick={closeMobileMenu} className='nav-links-tarjous'>PYYDÄ TARJOUS</Link>
            </li>
            
          </ul>

          {button && <Link href="/palvelumme/#tarjous" onClick={closeMobileMenu}><Button buttonStyle='btn--offer'>PYYDÄ TARJOUS</Button></Link>}

        </div>
      </nav>
    </>
  );
}

export default Navbar
