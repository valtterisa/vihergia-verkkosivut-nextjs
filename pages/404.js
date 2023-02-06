import React from 'react'
import Navbar from '../src/komponentit/Navbar/Navbar'
import Footer from '../src/komponentit/Footer/Footer'
import { Button } from '../src/komponentit/Button/Button'
import Link from 'next/link'


function Error() {
  return (
    <div>
        <Navbar />
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", padding: "2rem 2rem 0 2rem", height: "70vh" }}>
          <h1 style={{ fontSize: "60px" }}>404 - Page Not Found</h1>
          <p style={{ textAlign: "center", padding: "2rem 0 2rem 0", fontSize: "25px" }}>Umpikuja. Sivua ei valitettavasti ole olemassa :(</p>  
          <Link href="/" style={{ display: "flex", justifyContent: "center", textDecoration: "none", padding: "2rem 0 2rem 0"}}><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Palaa etusivulle</Button></Link>
        </div>

        <Footer />
    </div>
  )
}

export default Error