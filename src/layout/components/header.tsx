import React, {Component, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
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
    const headerNavRef = React.createRef<HTMLElement>();

    const getNavChildren = (): Element[] | void => {
        const current = headerNavRef.current;
        if (current === null) return;
        const children = Array.from(current.children);
        return children;
    }

    const setActiveClass = (event: React.MouseEvent): void => {
        const navChildren = getNavChildren();
        if (navChildren === undefined) return;
        navChildren.forEach((child) => {
            if (child.classList.contains("active")) {
                child.classList.remove("active");
            }
        });
        const target = event.target as HTMLElement;
        target.classList.add("active");
    }

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

                <div className="header-text">
                    <h1 className="header-text-1">SAMEN OP WEG NAAR</h1>
                    <h1 className="header-text-2">Bijvriendelijk Schouwen-Duivenland</h1>
                </div>

                <div className="hamburger-container">
                    <button className="hamburger" onClick={onClick} ref={hamburgerButton} id="hamburger">
                        <div id="bar"></div>
                    </button> 
                </div>

            </div>

            <nav className="header-nav" ref={headerNavRef}>
                <NavLink to={`/`} className="router-link">Home</NavLink>
                <NavLink to={`/Agenda`} className="router-link">Agenda</NavLink>
                <NavLink to={`/Nieuws`} className="router-link">Nieuws</NavLink>
                <NavLink to={`/Bijenzwerm`} className="router-link">Bijenzwerm</NavLink>
                <NavLink to={`/Vrienden`} className="router-link">Vrienden</NavLink>
                <NavLink to={`/Projecten`} className="router-link">Projecten</NavLink>
                <NavLink to={`/BIJhouden`} className="router-link">BIJhouden</NavLink>
                <NavLink to={`/Contact`} className="router-link">Contact</NavLink>
            </nav>

            <nav className="header-nav-mobile" ref={headerMobileRef}>

                <div className="header-nav-mobile-container">

                    <NavLink to={`/`} className="router-link-mobile" id="">
                        <img src={homeIcon}/>
                        <div className="router-link-mobile-inside">Home</div>
                    </NavLink>
                    <NavLink to={`/Agenda`} className="router-link-mobile" id="">
                        <img src={agendaIcon}/>
                        <div className="router-link-mobile-inside">Agenda</div>
                    </NavLink>
                    <NavLink to={`/Nieuws`} className="router-link-mobile" id="">
                        <img src={newsIcon}/>    
                        <div className="router-link-mobile-inside">Nieuws</div>
                    </NavLink>
                    <NavLink to={`/Bijenzwerm`} className="router-link-mobile" id="">
                        <img src={worldIcon}/>                        
                        <div className="router-link-mobile-inside">Bijenzwerm</div>
                    </NavLink>
                    <NavLink to={`/Vrienden`} className="router-link-mobile" id="">
                        <img src={friendsIcon}/>
                        <div className="router-link-mobile-inside">Vrienden</div>
                    </NavLink>
                    <NavLink to={`/Projecten`} className="router-link-mobile" id="">
                        <img src={projectsIcon}/>
                        <div className="router-link-mobile-inside">Projecten</div>
                    </NavLink>
                    <NavLink to={`/BIJhouden`} className="router-link-mobile" id="">
                        <img src={infoIcon}/>
                        <div className="router-link-mobile-inside">BIJhouden</div>
                    </NavLink>
                    <NavLink to={`/Contact`} className="router-link-mobile" id="">
                        <img src={contactIcon}/>
                        <div className="router-link-mobile-inside">Contact</div>
                    </NavLink>

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