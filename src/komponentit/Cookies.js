import React from 'react'
import CookieConsent from "react-cookie-consent";

function Cookies() {
  return (
    <CookieConsent
        location="bottom"
        buttonText="Hyväksyn"
        style={{display: "flex", alignItems: "center", background: "#bec7c2", color: "black", padding: "1rem", fontSize: "16px"}}
        buttonStyle={{background: "#338055",padding: "10px" ,fontSize: "18px", borderRadius: "4px", color: "white"}}
        expires={150}>
        Tämä verkkosivu käyttää evästeitä. Käytämme evästeitä sisällön ja mainosten personointiin, 
        sosiaalisen median ominaisuuksien tarjoamiseen ja liikenteen analysointiin. 
        Jaamme myös tietoja sivustomme käytöstäsi sosiaalisen median, mainonta- ja analytiikkakumppaneidemme kanssa, 
        jotka voivat yhdistää ne muihin tietoihin, jotka olet heille antanut tai 
        joita he ovat keränneet käyttäessäsi palveluitaan.{" "}
    </CookieConsent>
  )
}

export default Cookies