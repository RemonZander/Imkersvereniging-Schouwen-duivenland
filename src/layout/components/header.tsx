import React, {Component, useRef, useState} from 'react';
import '../../resources/css/App.css'
import axios from 'axios';
import classNames from 'classnames';

// Importing Images
import Logo from '../../resources/images/logo.png';
import homeIcon from '../../resources/images/icons/home-icon.svg';
import agendaIcon from '../../resources/images/icons/agenda-icon.svg';
import newsIcon from '../../resources/images/icons/news-icon.svg';
import worldIcon from '../../resources/images/icons/world-icon.svg';
import friendsIcon from '../../resources/images/icons/people-icon.svg';
import projectsIcon from '../../resources/images/icons/map-icon.svg';
import infoIcon from '../../resources/images/icons/info-icon.svg';
import contactIcon from '../../resources/images/icons/phone-icon.svg';

import {    
    Link
} from "react-router-dom";
import { RecordWithTtl } from "dns";



const Header = (): JSX.Element => {
    
    const [active, setActive] = useState(false);

    const hamburgerButton = React.createRef<HTMLButtonElement>();
    const headerMobileRef = React.createRef<HTMLElement>();

    const hamburgerIsActive = (event: React.MouseEvent): void => { 
       const current = hamburgerButton.current;
       if (current === null) return; 

       //@ts-ignore
       const containsIsActive = current.classList.contains("is-active")
       if (!(containsIsActive)) {
            current?.classList.add("is-active")
       } else {
            current?.classList.remove("is-active");
       }
    }

    const toggleActive = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const mobileClassList = headerMobileRef.current?.classList;
        const containsActive = mobileClassList?.contains("is-active") ? true : false;
        if (containsActive) {
            mobileClassList?.remove("is-active");
        } else {
            mobileClassList?.add("is-active");
        }
    }   

    const onClickFunctions = [hamburgerIsActive, toggleActive];

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClickFunctions.forEach((func) => {
            func(event);
        });
    }

    return ( 

        <div id="header">

            <div className="header-top">

                <div className="logo-container">
                    <img className="logo-image" src={Logo}/>
                </div>

                <div id="header-text">
                    <h1 id="header-text-1">SAMEN OP WEG NAAR</h1>
                    <h1 id="header-text-2">Bijvriendelijk Schouwen-Duivenland</h1>
                </div>

                <div className="hamburger-container">
                    <button className="hamburger" onClick={onClick} ref={hamburgerButton} id="hamburger">
                        <div id="bar"></div>
                    </button> 
                </div>

            </div>

            <nav className="header-nav">
                <Link to={`/`} className="" id="router-link">Home</Link>
                <Link to={`/Agenda`} className="" id="router-link">Agenda</Link>
                <Link to={`/Nieuws`} className="" id="router-link">Nieuws</Link>
                <Link to={`/Bijenzwerm`} className="" id="router-link">Bijenzwerm</Link>
                <Link to={`/Vrienden`} className="" id="router-link">Vrienden</Link>
                <Link to={`/Projecten`} className="" id="router-link">Projecten</Link>
                <Link to={`/BIJhouden`} className="" id="router-link">BIJhouden</Link>
                <Link to={`/Contact`} className="" id="router-link">Contact</Link>
            </nav>

            <nav className="header-nav-mobile" ref={headerMobileRef}>

                <div className="header-nav-mobile-container">

                    <Link to={`/`} className="router-link" id="">
                        <img src={homeIcon}/>
                        <div className="router-link-inside">Home</div>
                    </Link>
                    <Link to={`/Agenda`} className="router-link" id="">
                        <img src={agendaIcon}/>
                        <div className="router-link-inside">Agenda</div>
                    </Link>
                    <Link to={`/Nieuws`} className="router-link" id="">
                        <img src={newsIcon}/>    
                        <div className="router-link-inside">Nieuws</div>
                    </Link>
                    <Link to={`/Bijenzwerm`} className="router-link" id="">
                        <img src={worldIcon}/>                        
                        <div className="router-link-inside">Bijenzwerm</div>
                    </Link>
                    <Link to={`/Vrienden`} className="router-link" id="">
                        <img src={friendsIcon}/>
                        <div className="router-link-inside">Vrienden</div>
                    </Link>
                    <Link to={`/Projecten`} className="router-link" id="">
                        <img src={projectsIcon}/>
                        <div className="router-link-inside">Projecten</div>
                    </Link>
                    <Link to={`/BIJhouden`} className="router-link" id="">
                        <img src={infoIcon}/>
                        <div className="router-link-inside">BIJhouden</div>
                    </Link>
                    <Link to={`/Contact`} className="router-link" id="">
                        <img src={contactIcon}/>
                        <div className="router-link-inside">Contact</div>
                    </Link>

                </div>

            </nav>

        </div>
        

        // <div className="flex w-screen bg-black text-white align-center">
        //     <div className="m-auto pb-[1%] pt-[1%]">
        //         <ul className="flex flex-row gap-3 text-yellow-700">
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/projecten">Projecten</Link>
        //             </li>
        //             <li id="agenda" className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/agenda">Agenda</Link>
        //             </li>
        //             <li  className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/nieuws">Nieuws</Link>
        //             </li>
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/vrienden">Vrienden</Link>
        //             </li>
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/bijenzwerm">Bijenzwerm</Link>
        //             </li>
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/bijenhouden">Bijenhouden</Link>
        //             </li>
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/informatie">Informatie</Link>
        //             </li>
        //             <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
        //                 <Link to="/contact">Contact</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}
export default Header;