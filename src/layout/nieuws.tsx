import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Nieuws extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Nieuws</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland vindt het belangrijk om u op de hoogte te houden van de activiteiten van de vereniging, de aandacht in de media, en actueel nieuws over insecten en biodiversiteit. Lees meer met verwijzing naar onderstaande kopjes</p>

                                <br />

                                    <div className="readmore-content"><span>Activiteiten:</span> imkersvereniging Schouwen-Duiveland organiseert regelmatig nieuwe activiteiten. Deze treft u hieronder aan. Wellicht heeft u interesse om aan een van deze activiteiten deel te nemen. Daarvoor bent u vanzelfsprekend van harte uitgenodigd. Via de onderstaande links en <NavLink to={`/contact`} className="link">contactgegevens</NavLink> kunt u ons eenvoudig benaderen voor meer informatie of deelname.
                                    
                                    <br />
                                    <br />

                                    <ul>
                                        <li><span>Jeugdcursussen:</span> In 2023 organiseert de imkersvereniging een jeugdcursus bijenhouden. Deze cursus is geschikt voor 12 - 18 jarigen en bestaat uit een kennismaking en vervolgens een korte theoretische en praktische cursus. Meer informatie kunt u <NavLink to={`/bijenhouden`} className="link">hier vinden.</NavLink></li>

                                        <br />

                                        <li><span>Basiscursus:</span> Na het succes van voorgaande jaren organiseert de imkersvereniging voor geïnteresseerden in 2023 opnieuw een basiscursus bijenhouden. U leert in één bijenseizoen de theoretische en praktische beginselen en begint met uw eerste bijenvolken. Er is slechts ruimte voor 15 cursisten, dus schrijf u snel in! Meer informatie kunt u <NavLink to={`/bijenhouden`} className="link">hier vinden.</NavLink></li>

                                        <br />

                                        <li><span>Imkercafé:</span> Maandelijks houdt de imkersvereniging een bijeenkomst, waarbij imkers en belangstellenden elkaar ontmoeten. Er is veel kennis binnen de imkersvereniging en regelmatig wordt deze tijdens een imkercafé gepresenteerd en bediscussieerd. Meer informatie kunt u vinden in de <NavLink to={`/agenda`} className="link">agenda</NavLink></li>

                                        <br />

                                        <li><span>Secretaris:</span> imkersvereniging Schouwen-Duiveland is op zoek naar een geschikte kandidaat voor de functie van secretaris. Hij / zij heeft affiniteit met de imkerij én met biodiversiteit. De secretaris representeert samen met de voorzitter en de penningmeester de imkersvereniging, vertegenwoordigt de belangen van haar leden en zet de grote lijnen uit. De bestuursleden werken nauw samen en voeren samen met de leden, de diverse interne en externe activiteiten uit. Bij interesse voor de functie van secretaris wordt u van harte uitgenodigd voor een nader gesprek met de <NavLink to={`/agenda`} className="link">voorzitter en de penningmeester. </NavLink></li>
                                    </ul>

                                    <br />

                                    <span>In het nieuws:</span> imkersvereniging Schouwen-Duiveland laat via artikelen, interviews, lezingen en filmopnames regelmatig van zich horen. Aandacht voor de imkerij en versterking van de biodiversiteit op Schouwen-Duiveland is dan ook een belangrijk onderwerp. Onderstaand zijn recente publicaties op een rij gezet.

                                    <br />
                                    <br />

                                    <ul>
                                        <li>Diverse links naar recente artikelen en andere nieuwsuitingen met éénregelige start (titel met kort zinnetje, belangrijke steekwoorden en meer lezen). Uitingen van eerdere datum kunnen via de zoekfunctie worden bekeken.</li>
                                    </ul>

                                    <br />
                                    
                                    <span>Insecten en biodiversiteit:</span> imkersvereniging Schouwen-Duiveland volgt met veel interesse belangrijke onderzoeken op het gebied van bestuivende insecten en biodiversiteit. Onderstaand zijn recente artikelen uit diverse bronnen op een rij gezet.

                                    <br />
                                    <br />

                                    <ul>
                                        <li>
                                            Diverse links naar relevante artikelen en andere nieuwsuitingen met éénregelige start (titel met kort zinnetje, belangrijke steekwoorden en meer lezen). Uitingen van eerdere datum kunnen via de zoekfunctie worden bekeken.
                                        </li>
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

export default Nieuws;