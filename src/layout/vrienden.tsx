import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Vrienden extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Vrienden</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland vindt het belangrijk om u op de hoogte te houden van de activiteiten van de vereniging, de aandacht in de media, en actueel nieuws over insecten en biodiversiteit. Lees meer met verwijzing naar onderstaande kopjes.</p>

                                <br />

                                    <div className="readmore-content"><span>Zwermvergoeding:</span> imkersvereniging Schouwen-Duiveland vult haar maatschappelijke verantwoordelijkheid mede in door het scheppen van bijenzwermen. Via een bezoek aan onze website wordt leden van de vereniging vaak gevraagd om een bijenzwerm op te komen halen. Vanzelfsprekend kost dit de leden tijd en geld, waar geen vergoeding tegenover staat. De vereniging zal het waarderen als u voor deze dienst een vrijwillige bijdrage zou willen overmaken (link via Qr naar bankrekening).
                                    
                                    <br />
                                    <br />

                                    <span>Donateurbijdrage:</span> imkersvereniging Schouwen-Duiveland is een vereniging van imkers die onder het motto “Samen op weg naar BIJvriendelijk Schouwen-Duiveland” Voorlichting & Educatie verzorgt en BIJvriendelijke projecten uitvoert. De imkersvereniging probeert om samen met burgers, overheid, bedrijfsleven en recreanten de biodiversiteit op Schouwen-Duiveland te versterken. Als u de ambities en activiteiten van de imkersvereniging een warm hart toedraagt, is ondersteuning in de vorm van een financiële bijdrage meer dan welkom.

                                    <br />
                                    <br />

                                    U kunt als particulier de imkersvereniging ondersteunen door als donateur een bijdrage van minimaal € 25,-- per jaar te doneren. U krijgt hiervoor als welkomstgeschenk een button, een poster en een zakje zaad voor een BIJvriendelijke tuin. Bovendien mag u gratis deelnemen aan een kennismakingsmiddag <NavLink to={`/bijenhouden`} className="link">bijenhouden.</NavLink> Via dit <NavLink to={`/contact`} className="link">contactformulier</NavLink> kunt u zich aanmelden als BIJenvriend van de imkersvereniging. Uw steun wordt goed gebruikt.

                                    <br />
                                    <br />

                                    <span>MVO S-D:</span> imkersvereniging Schouwen-Duiveland zou het waarderen als het bedrijfsleven van Schouwen-Duiveland in het kader van Maatschappelijk Verantwoord Ondernemen (MVO) ook biodiversiteit zou gaan omarmen. In “Samen op weg naar BIJvriendelijk Schouwen-Duiveland” kan en mag het bedrijfsleven naar onze mening niet ontbreken. Een  financiële ondersteuning in de vorm van een sponsorschap is vanzelfsprekend welkom. De imkersvereniging kan als tegeprestatie bijvoorbeeld een lezing annex workshop voor medewerkers organiseren. Ook kan samen worden gekeken naar concrete activiteiten op het gebied van biodiversiteit waarmee het bedrijfsleven zich kan onderscheiden. 
                                    Uw interesse wordt op prijs gesteld en kunt u kenbaar maken door contact op te nemen met het bestuur van de imkersvereniging (verwijzing naar kopje bestuur onder CONTACT) of het invullen van het contactformulier <NavLink to={`/contact`} className="link">contactformulier.</NavLink>

                                    <br />
                                    <br />

                                    <span>Bestuiving:</span> mkersvereniging Schouwen-Duiveland onderhoudt contacten met ondernemers door elk jaar te zorgen voor de bestuiving van fruit en groenten. Verschillende leden van de vereniging brengen tijdens de bloeiperiode bijenvolken naar akkers of boomgaarden. Zij krijgen hiervoor een landelijk geadviseerde vergoeding. 
                                    De vereniging heeft bovendien kasten met bijenvolken beschikbaar en kan deze tegen een vergoeding definitief op het terrein van particulieren en ondernemers plaatsen. Op deze manier is in de bestuiving van bomen en planten op uw terrein voorzien. Tegen een jaarlijkse extra vergoeding kan de vereniging ook de bijenvolken verzorgen. De eventuele honingoogst kunnen we dan verdelen. Bij interesse kunt via deze <NavLink to={`/contact`} className="link">link</NavLink> (verwijzing naar kopje bestuur onder CONTACT) contact opnemen met het bestuur.

                                    <br />
                                    <br />

                                    <span>Sponsoren:</span> imkersvereniging Schouwen-Duiveland heeft steeds meer particulieren en ondernemers die haar werk ondersteunen. Zij zou het buitengewoon waarderen als u zich daarbij zou <NavLink to={`/contact`} className="link">aansluiten.</NavLink>

                                    <br />

                                    Onderstaand zijn enkele belangrijke sponsoren genoemd (aan te vullen):

                                    <br />
                                    <br />

                                    <ul>
                                        <li>Bits & Bytes</li>
                                        <li>Cees Hoogerhuis</li>
                                        <li>Karel Steur</li>
                                        <li>Nireas Groep</li>
                                        <li>Syntess Beheer BV</li>
                                        <li>Brewpub de Stulp</li>
                                        <li>Braber Groenvoorziening</li>
                                        <li>Windfonds Krammer</li>
                                        <li>Gemeente Schouwen-Duiveland</li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <Honeycomb/>
                    </main>
                    

                </div>
            </>
        )
    }
}

export default Vrienden;