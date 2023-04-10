import React from "react";
import { Button } from "./Button";
import Link from "next/link";

export const PalvelutLuettelo = () => {
  return (
    <div className="palvelut-container">
      <h1>Aurinkoenergia</h1>

      <div className="palvelut-content">
        <div className="aurinko-content">
          <div className="aurinko-info">
            <h2>Aurinkopaneelien myynti- ja asennuspalvelut</h2>
            <p>
              Nykyaikana uusiutuvan energian valitseminen on järkevää.
              Siirtyminen pois fossiilisista polttoaineista on väistämätöntä ja
              siksi etenkin uusiutuvat energiamuodot, kuten aurinkoenergia on
              alkanut kasvattamaan suosiotaan. Me olemme myös huomanneet tämän
              ja siksi haluamme tarjota asiakkaillemme luotettavan kumppanin
              aurinkoenergiaan liittyvissä palveluissa. Meiltä asiakas saa
              aurinkopaneelien myynti- ja asennuspalvelun tyytyväisyystakuulla.
            </p>
            <div className="palvelut-buttons">
              <Link href="/yhteystiedot">
                <Button buttonStyle="btn--palvelut" buttonSize="btn--medium">
                  OTA YHTEYTTÄ
                </Button>
              </Link>
              <a href="#tarjous">
                <Button buttonStyle="btn--palvelut" buttonSize="btn--medium">
                  PYYDÄ TARJOUS
                </Button>
              </a>
              <Link href="/aurinkoenergia/#mita-on-aurinkoenergia">
                <Button buttonStyle="btn--palvelut" buttonSize="btn--medium">
                  LISÄÄ AURINKOENERGIASTA
                </Button>
              </Link>
            </div>
          </div>

          <div className="aurinko-kuva"></div>
        </div>
      </div>
    </div>
  );
};

export default PalvelutLuettelo;
