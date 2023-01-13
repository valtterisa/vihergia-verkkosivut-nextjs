import Link from 'next/link'
import React from 'react'

export const KiitosTeksti = () => {
  return (
    <div className='kiitos-container'>
      <h1>Kiitos yhteydenotostasi!</h1>
        <div className='kiitos-content'>
            <p>Otamme sinuun yhteyttä mahdollisimman pian.</p>
            <p>Voit palata etusivulle <Link href='https://www.vihergia.fi/'>tästä</Link></p>
        </div>
    </div>
  )
}

export default KiitosTeksti
