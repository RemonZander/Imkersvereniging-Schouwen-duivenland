import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Projecten extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Projecten</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland volgt afspraken uit de nationale en Zeeuwse BIJenstrategie met het geven van Voorlichting & Educatie en de uitvoering van BIJvriendelijke projecten.</p>

                                <br />

                                    <div className="readmore-content"><span>Educatie:</span> imkersvereniging Schouwen-Duiveland wil jonge mensen bewust maken van hun omgeving. Door leden van de vereniging worden namens het NMe (Natuur en Milieu educatie) op de basisscholen van Schouwen-Duiveland gastlessen verzorgd. Ervaren imkers vertellen over de imkerij, honingbijen en hun betekenis. Op de middelbare scholen Pieter Zeeman Lyceum in Zierikzee en CSG Prins Maurits in Middelharnis worden leerzame projecten uitgevoerd voor het Technasium- en Kunstonderwijs. 

                                    <br />

                                    <span>Voorlichting:</span> imkersvereniging Schouwen-Duiveland heeft op vier locaties een bijenstandplaats ingericht om verschillende doelgroepen van informatie te voorzien.

                                    <br />
                                    <br />

                                    <span>Goemanszorg:</span> In het Streek- en landbouwmuseum Goemanszorg in Dreischor <a href="http://www.goemanszorg.nl/">goemanszorg.nl</a> is een expositie over imkerij opgebouwd. Deze expositie laat het belang zien van de imkerij voor fruit- en groenteteelt. Middelpunt van de expositie is een bijen-demonstratiekast waar het leven van honingbijen door bezoekers van de museumboerderij achter glas kan worden bekeken. In de tuin van de museumboerderij is in “stijl” een bijenstal gebouwd.

                                    <br />
                                    <br />

                                    <span>Stadsboerderij:</span> Op de Stadsboerderij in Zierikzee <a href="https://www.gors.nl">gors.nl</a>is voor bezoekers van de kinderboerderij een bijenstal gebouwd. Door de ligging vlakbij  “Borrendamme” kunnen jonge kinderen met hun grootouders een bezoek brengen aan deze bijenstal. 

                                    <br />
                                    <br />

                                    <span>Landal Port Greve:</span> Ook voor de jonge vakantiegasten is op Landal Port Greve in den Osse <a href="https://www.landal.nl/parken/port-greve">landal.nl</a> een bijenstal gebouwd. Tijdens het vakantieseizoen worden door Landal activiteiten georganiseerd, waarbij de leden van de imkersvereniging bezoekers van het vakantiepark verrassen met workshops en een bezoekje aan de bijenstal.  

                                    <br />
                                    <br />

                                    <span>BIJenhuis:</span> Vlakbij het Transferium aan de Roelandsweg 2 te Renesse staat het BIJenhuis. Dit BIJenhuis is op 24 juni 2022 geopend en mogelijk gemaakt door Fruitgaard Vereniging “De Proeftuin”. Met het ontwerp van kunstenaar Vincent Krans is een uniek bouwwerk ontstaan dat de relatie met de zeshoekige cellen in een bijenraat goed laat zien. Naast het BIJenhuis staat een kunstwerk dat de relatie tussen insecten en onze wereld verbeeldt. Ook de karakteristieke  “appel en peer” van de Fruitgaard Vereniging horen erbij. Gepassioneerde imkers vertellen over hun prachtige hobby en van dichtbij kunt u honingbijen aan het werk zien (verwijzing naar kort filmpje). Ook lokale verenigingshoning en andere “producten” worden aangeboden. Voor openingstijden wordt u verwezen naar link naar kopje <NavLink to={`/agenda`} className="link">Agenda</NavLink>.

                                    <br />
                                    <br /> 

                                    <span>BIJvriendelijke projecten:</span> imkersvereniging Schouwen-Duiveland ontwikkelt samen met partners voorbeeldprojecten om het gelijknamige eiland BIJvriendelijk te maken. Burgerparticipatie en bewustwording zijn belangrijke sleutelwoorden. Lees meer met verwijzing naar onderstaande drie <NavLink to={`/projecten`} className="link">projecten</NavLink>.

                                    <br />
                                    <br />

                                    <span>Bloemrijke akkerranden:</span> imkersvereniging Schouwen-Duiveland werkt samen met gemeente Schouwen-Duiveland en Stichting De Zonnestraal om de biodiversiteit te versterken en de beleving van het akkerlandschap voor burgers en recreanten te verbeteren. Lees meer
                                    In 2019 is met grote belangstelling van agrariërs een oppervlakte van 20 ha bloemrijke akkerranden ingezaaid. Met de ontwikkeling van alternatieve financieringsmodellen wordt geprobeerd om deze oppervlakte te vergroten naar 40 ha. Zo is in 2021 de “plukbon” geïntroduceerd <a href="https://www.boerenbloem.nl/">boerenbloem.nl</a> waarmee het gehele jaar veldboeketten kunnen worden geplukt. Ook het lokale bedrijfsleven wordt betrokken. In 2022 heeft Windfonds Krammer een financiële bijdrage gedaan, waarmee het mogelijk werd om ook in de polder van Bruinisse 4 ha in te zaaien. Inmiddels worden nieuwe initiatieven ontplooid waarmee het project uiteindelijk “self-supporting” kan zijn.

                                    <br />
                                    <br />

                                    <span>Hoogstamfruitboomgaarden:</span> imkersvereniging Schouwen-Duiveland werkt samen met gemeente Schouwen-Duiveland, Stichting Landschapsbeheer Zeeland en Rotary Club Zierikzee aan de realisatie van zestien hoogstamfruitboomgaarden in de dorpen van Schouwen-Duiveland. Lees meer
                                    De initiatiefnemers helpen dorpsraden en burgers van de betrokken kernen bij het ontwerp, de aanleg en het onderhoud van de boomgaarden. Hiermee wordt invulling gegeven aan een “eiland-brede” burgerparticipatie. In de boomgaarden komen inheemse hoogstamfruitbomen en struiken. Daarnaast kunnen een groente-, kruiden- en/of bloementuin onderdeel zijn. Een bijenhotel voor solitaire bijen en een rustiek bankje kunnen eveneens worden geplaatst. Zo draagt het project ook bij aan de leefbaarheid van de kernen op Schouwen-Duiveland én aan de biodiversiteit. In 2022 is gestart met de eerste hoogstamfruitboomgaard in Ellemeet, waarna Serooskerke en Noordwelle snel volgden. Vanaf 2023 volgen de andere kernen. Het VSB-fonds, Stichting Renesse, de initiatiefnemers en Act as One dragen allen financieel bij, waardoor het project de komende jaren kan worden uitgevoerd. De Nederlandse Bijenhouders Vereniging heeft dit project begin 2021 de biodiversiteitsprijs toegekend.
                                    
                                    <br />
                                    <br />

                                    <span>Vergroening basisscholen:</span> imkersvereniging Schouwen-Duiveland geeft niet alleen voorlichting op basisscholen, maar werkt samen met andere partijen om alle basisscholen op het gelijknamige eiland te vergroenen. Lees meer
                                    Samen met het NMe, IVN, Sandee Groen en OBASE / RADAR is een plan opgezet om de komende jaren alle basisscholen en bijbehorende KIBEO pleinen te vergroenen. De partijen willen alle kinderen een binding met voeding,  biodiversiteit en het veranderende klimaat laten ontwikkelen. Op die manier kunnen zij op een natuurlijke manier groen leren handelen, denken en beslissen. Dit doen de partijen door het vergroenen van schoolpleinen en het opzetten van lokale schooltuinen én bijpassende ondersteunende groene leertrajecten. Hierdoor mag onder meer een verbetering van de fysieke én mentale gezondheid, van de leerprestaties en de sociale ontwikkeling worden verwacht. De eilandelijke scholen zijn enthousiast maar geven aan dat voor succes ondersteuning bij het praktijkonderwijs, onderhoud en beheer belangrijk zijn.


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

export default Projecten;