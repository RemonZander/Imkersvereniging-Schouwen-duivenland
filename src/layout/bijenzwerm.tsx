import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Bijenzwerm extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Bijenzwerm</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland vindt het belangrijk om u op een BIJvriendelijke manier te helpen als u een bijenzwerm heeft aangetroffen en deze wil melden. Lees onderstaande informatie aandachtig en neem contact op met een van onze zwermscheppers</p>

                                <br />

                                    <div className="readmore-content"><span>Melding:</span> imkersvereniging Schouwen-Duiveland wil u graag helpen met het scheppen van uw bijenzwerm. Neem na lezing van onderstaande informatie telefonisch contact op met een van onze zwermscheppers.

                                    <br />

                                    In de maanden april – juli vermeerderen bijenvolken zich waarbij de koningin met soms wel tienduizenden bijen op zoek gaat naar een nieuw onderkomen. Voordat ze die hebben gevonden, maakt de zwerm een tussenstop en vormen ze een klont aan een boomtak, hekje of dakrand. Daar blijven ze een uur tot soms een paar dagen hangen. Een bijenzwerm kan er dreigend uitzien, maar is er niet op uit om u te steken. Dat doen ze alleen als ze zich bedreigd voelen. Blijf daarom altijd rustig, houdt afstand en laat de zwerm met rust. De leden van imkersvereniging Schouwen-Duiveland weten wat ze met een zwerm moeten doen. Voordat u echter een van onze zwermscheppers benadert, willen we u vragen om de volgende twee vragen te beantwoorden:

                                    <br />
                                    <br />

                                    <ol>
                                        <li>Gaat het om een bijenzwerm of zijn het misschien hommels (foto) of wespen (foto)? Als dat namelijk het geval is, kan de imkersvereniging niet veel doen. U kunt dan beter contact opnemen met de ongediertebestrijding via: <a href="https://www.gripmetkik.nl/.">gripmetkik.nl</a> Als u echter geen problemen ondervindt, kunt u deze nuttige insecten beter met rust laten. Ze verdwijnen vanzelf weer in het najaar.</li>

                                        <br />
                                        <br />

                                        <li>
                                        Als u wel een bijenzwerm hebt aangetroffen (foto) kijkt u naar de kaart van Schouwen-Duiveland. Zoek daarop de button dichtbij de zwermlocatie. Met het aanklikken van de button komen de contactgegevens van de zwermschepper naar voren. Als u geen contact kunt krijgen, benadert u de volgende dichtstbijzijnde. U helpt de imker als u hem / haar via de app een paar foto’s kunt sturen, waarmee de locatie en grootte van de zwerm in beeld wordt gebracht. De imker kan dan de situatie inschatten en weet wat er nodig is om de zwerm veilig te scheppen. Tijdens het scheppen kan de imker interessante dingen over het bijzondere leven van bijen vertellen. 
                                        </li>
                                    </ol>

                                    <br />
                                    
                                    <span>Vergoeding:</span> imkersvereniging Schouwen-Duiveland brengt voor het scheppen van een bijenzwerm geen kosten in rekening. Zij vindt het belangrijk u van dienst te zijn en wil een bijenvolk graag aan een nieuwe woning helpen. Desondanks kost het zwermscheppen de imkers van Schouwen-Duiveland veel tijd en geld. Daarom wordt uw <NavLink to={`/vrienden`} className="link">vrijwillige bijdrage</NavLink> zeer op prijs gesteld.

                                    <br />
                                    <br />

                                    <span>Verdere info:</span> imkersvereniging Schouwen-Duiveland komt bijenzwermen tegen in vele soorten en maten. Het is een natuurlijk proces. De eerste zwerm die in mei / juni uit een bijenvolk vertrekt, bestaat uit de 'oude' bevruchte koningin en de helft van het bijenvolk. Deze zwerm wordt voorzwerm genoemd. Het aantal bijen varieert en is afhankelijk van de grootte van het bijenvolk en hun behuizing, maar kan wel oplopen tot 30.000! Is de voorzwerm eenmaal vertrokken dan kan er later in het jaar ook een tweede en soms zelfs een derde bijenzwerm afkomen. Die zijn meestal veel kleiner in aantal en worden nazwerm genoemd <NavLink to={`/vrienden`} className="link">(link filmpje).</NavLink>

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

export default Bijenzwerm;