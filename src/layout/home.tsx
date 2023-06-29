import React, {Component, useEffect, useRef, useState} from "react";
import { NavLink } from 'react-router-dom';
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

const Home = (): JSX.Element => {

        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Home</h1>

                            <div className="white-section">
                                <p>Imkersvereniging Schouwen-Duiveland wil samen met u van Schouwen- Duiveland een BIJvriendelijke gemeente maken. Bijen en andere insecten zijn namelijk onmisbaar voor mens en dier.</p>

                                <br />
                                
                                <p className="readmore-content">Bijen en andere insecten bestuiven 75% van onze groenten en fruit. De laatste decennia nemen zij echter in soort en aantallen sterk af. Bestuivende insecten vinden onvoldoende voedsel en nestgelegenheid. Daarom moeten zij worden geholpen. De imkers van imkersvereniging Schouwen-Duiveland zorgen voor hun honingbijen en helpen andere bestuivende insecten door de biodiversiteit te versterken. 
                                <br />
                                <br />
                                Onder het motto “Samen op weg naar BIJvriendelijk Schouwen-Duiveland” geeft de imkersvereniging voorlichting en educatie. Daarnaast voert zij samen met anderen BIJvriendelijke <NavLink to={`/projecten`} className="link">projecten.</NavLink> Op deze website is goede <NavLink to={`/informatie`} className="link">informatie</NavLink> te vinden als u zelf wil bijdragen aan biodiversiteit of het werk van de imkersvereniging wil <NavLink to={`/vrienden`} className="link">vrienden</NavLink>. Ook als u erover denkt om zelf bijen te gaan houden, bent u bij imkersvereniging Schouwen-Duiveland aan het <NavLink to={`/bijenhouden`} className="link">juiste adres.</NavLink> Tevens kunt u op deze website terecht voor het <NavLink to={`/nieuws`} className="link">laatste nieuws</NavLink> en kunt u een <NavLink to={`/bijenzwerm`} className="link">bijenzwerm melden.</NavLink></p>

                                <button className="readmore">Lees minder</button>
                            </div>
                        </div>
                        <Honeycomb/>
                    </main>
                    

                </div>
            </>
        )
}

export default Home;