import React from 'react'

export const AurinkoInfo = () => {
  return (
    <div className='aurinkoinfo-container'>
        <h1>Mitä on aurinkoenergia?</h1>
        <div className='aurinkoinfo-content'>
            <h2>Aurinkoenergian tuotanto</h2><br/>
            <p>Aurinkoenergian tuotanto perustuu valon määrään, joten Suomessa aurinkoenergian 
                määrä on kesällä jopa suurempi kuin Keski-Euroopassa. Käytännössä Suomessa 
                aurinkoenergiaa on keskikesällä saatavilla reilusti enemmän kuin Keski-Euroopassa, 
                mutta talvea kohden aurinkoenergian saatavuus pienenee. Vuositasolla aurinkoenergian määrä 
                per neliömetri on Keski-Suomessa noin 900 kWh. Vertailuarvona Hampurissa auringon säteilyn 
                energia on vuositasolla 938 kWh. Auringosta paneelien avulla saatavan energian kokonaismäärä 
                saattaa olla Keski-Eurooppaa korkeampi, koska useimpien paneelien teho on parempi Suomen 
                kylmemmässä ilmastossa.
            </p><br/>
            
            <h2>Miksi valita aurinkoenergia?</h2><br/>
            <ul>
                <li>
                    Aurinkosähköä syntyy, vaikka Aurinkoa ei näy. Aurinkosähkö on ekologinen valinta ja täysin hiilidioksidivapaata ja 100 % uusiutuvaa energiaa. 
                Tuotantoa silloin, kun sähkön hinta on korkeimmillaan, tämä on omiaan tuomaan säästöjä. Suomessa tuotetaan energiaa hajasäteilystä, 
                eikä Aurinkopaneelit tarvitse suoranaista valoa. Paneelit tuottavat päästötöntä energiaa, ja paneelien valmistuksessa tuottama 
                hiilijalanjälki saadaan nopeasti korvattua. Paneeleiden hyötysuhde on noussut paljon viimevuosina ja nykyään paneelit maksavat 
                itsensä nopeasti takaisin, ja tekevät omistajalleen suoranaista säästöä ja sijoituksena se on kannattavaa.
                </li>
                <li>
                    Aurinkopaneelit ovat huoltovapaat
                </li>
            </ul><br/>

            <h2>Aurinkosähkö</h2><br />
            <p>
            Aurinkosähköä tuotetaan tavallisesti aurinkokennoilla, jotka muuntavat auringon säteilyä valosähköisen 
            ilmiön avulla sähköenergiaksi. Nykyään yli 80 prosenttia aurinkokennoista on liitetty sähköverkkoon,
             mutta niitä voidaan käyttää myös sähköverkosta irrallaan. Aurinkokennoja voidaan käyttää pienempimuotoiseen 
             sähköntuottoon sähköverkon ulkopuolella olevilla alueilla ja akkujen avulla turvata sähkön saannin jatkuvuutta.
            </p>
        </div>
    </div>
  )
}

export default AurinkoInfo