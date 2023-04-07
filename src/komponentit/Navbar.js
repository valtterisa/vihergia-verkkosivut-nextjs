import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react'
import SubMenuPalvelut from './SubMenuPalvelut';
import DownArrow from './DownArrow';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const ref = useRef();
    const router = useRouter();

    const [button, setButton] = useState(true);
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => setOpen(!isOpen);
    const closeMobileMenu = () => setOpen(false);

    // navigointipalkin alamenu
    const [isOpenSub, setOpenSub] = useState(false)
    const handleClickSub = () => setOpenSub(!isOpenSub);

    // määritellään milloin hampurilaismenu näkyy
    const showButton = () => {
      if (window.innerWidth <= 1024) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    // klikkaamalla ulkona submenusta -> häviää
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
          setOpenSub(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      showButton();
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
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <Link href='/' className={router.pathname == "/" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                Etusivu
              </Link>
            </li>

            <li className='nav-item' ref={ref}>
              <div onClick={handleClickSub} className={router.pathname == "/palvelumme" ? "nav-links active" : "nav-links"} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <p>Palvelumme</p>
                <DownArrow/>
              </div>
              
              <div className={isOpenSub ? 'submenu-container' : 'submenu-container clicked'}>
                <SubMenuPalvelut/>
              </div>
  
            </li>

            <li className='nav-item'>
              <Link href='/referenssit' className={router.pathname == "/referenssit" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                Referenssit
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/yhteystiedot' className={router.pathname == "/yhteystiedot" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                Yhteystiedot
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/tietoa-meista' className={router.pathname == "/tietoa-meista" ? "nav-links active" : "nav-links"} onClick={closeMobileMenu}>
                Tietoa meistä
              </Link>
            </li>

            <li className='nav-item-tarjous'>
              <Link href="/palvelumme/#tarjous" onClick={closeMobileMenu} className='nav-links active-tarjous'>PYYDÄ TARJOUS</Link>
            </li>
            
          </ul>

          {button && <Link href="/palvelumme/#tarjous" onClick={closeMobileMenu}><Button buttonStyle='btn--offer'>PYYDÄ TARJOUS</Button></Link>}

        </div>
      </nav>
    </>
  );
}

export default Navbar
