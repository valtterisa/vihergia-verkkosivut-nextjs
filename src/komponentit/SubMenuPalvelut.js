import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


function SubMenuPalvelut() {
    const router = useRouter();

    return (
    <div className='submenu-container'>
        <ul className='submenu-content'>
            <li className='submenu-item'>
                <Link href="/aurinkoenergia" className={router.pathname == "/aurinkoenergia" ? "submenu-item active" : "submenu-item"}>
                    Aurinkoenergia
                </Link>
            </li>

            <li className='submenu-item'>
                <Link href="/ilmalampo" className={router.pathname == "/ilmalampo" ? "submenu-item active" : "submenu-item"}>
                    Ilmalämpöpumput
                </Link>
            </li>

            <li className='submenu-item'>
                <Link href="/kattopalvelut" className={router.pathname == "/kattopalvelut" ? "submenu-item active" : "submenu-item"}>
                    Katon pinnoitus- ja korjauspalvelut
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SubMenuPalvelut