import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Agenda extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Agenda</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland geeft cursussen, lezingen en workshops. Ook presenteert zij zich in het unieke BIJenhuis in Renesse, op de Landelijke Open Imkerijdagen en diverse toeristische markten.</p>
                                <br />
                                <div className="readmore-content"><span>Imkercafé:</span> imkersvereniging Schouwen-Duiveland houdt voor imkers en geïnteresseerden op elke laatste vrijdag van de maand van 19:30 - 22:00 uur interessante bijeenkomsten. U wordt welkom geheten in de Rietgors aan de Slikweg 8 te Moriaanshoofd, met uitzondering van de maanden juni t/m augustus. Voor 2023 staan de volgende data en onderwerpen op de agenda:

                                <br />
                                <br />

                                <ul>
                                    <li>27 januari 2023 Mede door Jac Rens</li>
                                </ul>

                                <br />

                                <span>BIJenhuis:</span> imkersvereniging Schouwen-Duiveland geeft voorlichting over imkerij en biodiversiteit in het BIJenhuis aan de Roelandsweg te Renesse. Van begin mei t/m eind september vertellen imkers elke woensdag- en zaterdagmiddag van 13:00 - 17:00 uur over hun prachtige hobby en kunt u de wondere wereld van de honingbij zien. <NavLink to={`/projecten`} className="link">Lees meer</NavLink>

                                <br />
                                <br />

                                <span>LOI en markten:</span> imkersvereniging Schouwen-Duiveland houdt op zaterdag 11 juli 2023 tijdens de Landelijke Open Imkerijdag (LOI) open huis. U kunt in ons BIJenhuis aan de Roelandsweg in Renesse een kijkje nemen in de keuken van de imkerij. Enthousiaste imkers vertellen over hun prachtige hobby, terwijl u verschillende soorten honing kunt proeven.

                                <br />
                                <br />

                                De vereniging presenteert zich ook graag op de diverse toeristische markten op Schouwen-Duiveland. U kunt hier informatie krijgen over de imkerij en over de versterking van biodiversiteit. Als u zelf denkt over het houden van bijen kunt u hier met onze imkers over spreken. In 2023 zal de imkersvereniging zich presenteren op de volgende markten:

                                <br />
                                <br />

                                <ul>
                                    <li>27 januari 2023 Mede door Jac Rens</li>
                                </ul>

                                <br />

                                <span>Lezingen:</span> imkersvereniging Schouwen-Duiveland wordt regelmatig gevraagd te vertellen over haar werk op Schouwen-Duiveland. Zo wordt bijvoorbeeld tijdens openbare dorpsraadvergaderingen, bijeenkomsten van de Rotary en in het Odensehuis enthousiast gesproken over de imkerij en biodiversiteit. Bij interesse voor een lezing binnen uw organisatie of bedrijf kunt u dit kenbaar maken via link naar contactformulier onder kopje CONTACT. Er zal contact met u worden opgenomen voor een afspraak.

                                <br />
                                <br />

                                <span>Workshops:</span> imkersvereniging Schouwen-Duiveland organiseert in samenwerking met NIREAS  een BIJenworkshop. In het ambachtshuis en het BIJenhuis aan de Roelandsweg te Renesse wordt u een interessant ochtend- of middagprogramma aangeboden: een lezing over de imkerij, een bezoek aan een bijenvolk en het maken van een prachtige bijenzalf. Voor verdere informatie en opgave wordt u verwezen naar de website Link naar separate website BIJenworkshop.

                                </div>

                                <button className="readmore">Lees minder</button>
                            </div>
                        </div>
                        <Honeycomb/>
                    </main>
                    

                </div>
            </>
        )
    }
}

export default Agenda;