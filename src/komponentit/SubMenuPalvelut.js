import React from 'react'
import Link from 'next/link'

function SubMenuPalvelut() {
  return (
    <div className='submenu-container'>
        <ul>
            <li>
                <Link href="/aurinkoenergia">
                    Aurinkoenergia
                </Link>
            </li>

            <li>
                <Link href="/ilmalampo">
                    Ilmalämpöpumput
                </Link>
            </li>

            <li>
                <Link href="/kattopalvelut">
                    Katon pinnoitus- ja korjauspalvelut
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SubMenuPalvelut