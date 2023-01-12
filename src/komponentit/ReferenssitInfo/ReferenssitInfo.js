import React from 'react';
import { Button } from '../Button/Button';
import Link from "next/link";

export const ReferenssitInfo = () => {

    return (
        <div className='referenssitInfo'>
            <h1>Kohteemme</h1>
            <div className='referenssitInfoText'>

                Meille mikään kohde ei ole liian vaativa. 
                Teemme asennustöitä kaikenlaisiin- ja kokoisiin kohteisiin. 
                
                <br />
                <br />

                Kiinnostuitko meistä, mutta haluaisit nähdä työnjälkeämme?

            </div>

            <div className='referenceMore'>
            <Link href="/referenssit"><Button buttonStyle='btn--readMore'>KATSO TEHDYT KOHTEEMME</Button></Link>
            </div>

        </div>
    )
}

export default ReferenssitInfo;