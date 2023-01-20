import React, {Component, useRef} from "react";
import '../../resources/css/App.css'
import Logo from '../../resources/images/logo.png';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { RecordWithTtl } from "dns";



const Header = (): JSX.Element => {
    
    const hamburgerButton = React.createRef<HTMLButtonElement>();

    const onClick = (event: React.MouseEvent): void => { 
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

    const hasIsActive = (): boolean | undefined => {
        return hamburgerButton.current?.classList.contains("is-active")
    }

    return ( 

        <div id="header">

            <div id="header-top">

                <div id="logo-container">
                    <img id="logo-image" src={Logo}/>
                </div>

                <div id="header-text">
                    <h1 id="header-text-1">SAMEN OP WEG NAAR</h1>
                    <h1 id="header-text-2">Bijvriendelijk Schouwen-Duivenland</h1>
                </div>

                <div id="hamburger-container">
                    <button className="hamburger" onClick={onClick} ref={hamburgerButton} id="hamburger">
                        <div id="bar"></div>
                    </button> 
                </div>

            </div>

            <nav id="header-nav">
                <Link to={`/`} className="" id="router-link">Home</Link>
                <Link to={`/Agenda`} className="" id="router-link">Agenda</Link>
                <Link to={`/Nieuws`} className="" id="router-link">Nieuws</Link>
                <Link to={`/Bijenzwerm`} className="" id="router-link">Bijenzwerm</Link>
                <Link to={`/Vrienden`} className="" id="router-link">Vrienden</Link>
                <Link to={`/Projecten`} className="" id="router-link">Projecten</Link>
                <Link to={`/BIJhouden`} className="" id="router-link">BIJhouden</Link>
                <Link to={`/Contact`} className="" id="router-link">Contact</Link>
            </nav>

            {hasIsActive() ?
                <nav id="header-mobile is-active">
                    <Link to={`/`} className="" id="router-link">Home</Link>
                    <Link to={`/Agenda`} className="" id="router-link">Agenda</Link>
                    <Link to={`/Nieuws`} className="" id="router-link">Nieuws</Link>
                    <Link to={`/Bijenzwerm`} className="" id="router-link">Bijenzwerm</Link>
                    <Link to={`/Vrienden`} className="" id="router-link">Vrienden</Link>
                    <Link to={`/Projecten`} className="" id="router-link">Projecten</Link>
                    <Link to={`/BIJhouden`} className="" id="router-link">BIJhouden</Link>
                    <Link to={`/Contact`} className="" id="router-link">Contact</Link>
                </nav>
            :
                <nav id="header-mobile">
                    <Link to={`/`} className="" id="router-link">Home</Link>
                    <Link to={`/Agenda`} className="" id="router-link">Agenda</Link>
                    <Link to={`/Nieuws`} className="" id="router-link">Nieuws</Link>
                    <Link to={`/Bijenzwerm`} className="" id="router-link">Bijenzwerm</Link>
                    <Link to={`/Vrienden`} className="" id="router-link">Vrienden</Link>
                    <Link to={`/Projecten`} className="" id="router-link">Projecten</Link>
                    <Link to={`/BIJhouden`} className="" id="router-link">BIJhouden</Link>
                    <Link to={`/Contact`} className="" id="router-link">Contact</Link>
                </nav>}

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