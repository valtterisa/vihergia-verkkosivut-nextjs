import React from 'react'
import { Button } from '../src/komponentit/Button'
import Link from 'next/link'


function Error() {
  return (
    <div>
        <div className='error-container'>
          <h1>404 - Sivua ei löytynyt</h1>
          <p>Umpikuja. Sivua ei valitettavasti ole olemassa :(</p>  
          <Link href="/" className="error-link"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Palaa etusivulle</Button></Link>
        </div>
    </div>
  )
}

export default Error