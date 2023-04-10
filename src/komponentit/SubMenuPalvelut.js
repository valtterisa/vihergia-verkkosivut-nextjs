import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function SubMenuPalvelut() {
  const router = useRouter();
  return (
    <>
      <li className="submenu-item">
        <Link className="submenu-link" href="/aurinkoenergia">
          Aurinkoenergia
        </Link>
      </li>

      <li className="submenu-item">
        <Link className="submenu-link" href="/ilmalampo">
          Ilmalämpöpumput
        </Link>
      </li>

      <li className="submenu-item">
        <Link className="submenu-link" href="/kattopalvelut">
          Katon pinnoitus- ja korjauspalvelut
        </Link>
      </li>
    </>
  );
}

export default SubMenuPalvelut;
