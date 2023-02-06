import React from 'react'
import Navbar from '../src/komponentit/Navbar/Navbar'
import Footer from '../src/komponentit/Footer/Footer'
import { Button } from '../src/komponentit/Button/Button'
import Link from 'next/link'


function Error() {
  return (
    <div>
        <div className='error-container'>
          <h1>404 - Page Not Found</h1>
          <p>Umpikuja. Sivua ei valitettavasti ole olemassa :(</p>  
          <Link href="/" className="error-link"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Palaa etusivulle</Button></Link>
        </div>
    </div>
  )
}

export default Error