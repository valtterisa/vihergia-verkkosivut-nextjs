import Link from 'next/link'
import React from 'react'

export const KiitosTeksti = () => {
  return (
    <div className='kiitos-container'>
      <h1>Kiitos yhteydenotostasi!</h1>
        <div className='kiitos-content'>
            <p>Otamme sinuun yhteyttä mahdollisimman pian.</p>
            <p>Voit palata etusivulle <Link href='http://localhost:3001/'>tästä</Link></p>
        </div>
    </div>
  )
}

export default KiitosTeksti