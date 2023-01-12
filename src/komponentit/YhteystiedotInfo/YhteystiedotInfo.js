import React from 'react';

export const YhteystiedotInfo = () => {
  return (
    <div className='yhteystiedotInfo'>
        <h1>Yhteystiedot</h1>
        
        <div className='yhteystiedot-row' >

            <div className='tyontekija1'>
              
              <div className='henkiloTiedot'>                
                <h4>TONI PYSTÖ</h4>
                <p>Toimitusjohtaja</p>
                <p>puh: 044 088 3886</p>
                <small>toni.pysto@vihergia.fi</small>
              </div>
            </div>

            <div className='tyontekija2'>
              <div className='henkiloTiedot'>                
                <h4>RAVINDER KOHTANIEMI</h4>
                <p>Työnjohtaja</p>
                <p>puh: 044 987 3459</p>
                <small>info@vihergia.fi</small>
              </div>
            </div>

        </div>
    </div>
  )
}

export default YhteystiedotInfo