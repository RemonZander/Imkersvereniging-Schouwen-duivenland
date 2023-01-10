import React, {Component} from "react";
import '../../resources/css/App.css'
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const Header = (): JSX.Element => {
    
    return (

        <div className="pb-[40%]" id="header">

            <div className="">
                <div className="" id="logo">
                    <img src="../resources/images/logo.png" alt="" />
                </div>
                <div className="">
                    <h1 className="font-bold" id="text-1">SAMEN OP WEG NAAR</h1>
                    <h1 className="" id="text-2">Bijvriendelijk Schouwen-Duivenland</h1>
                </div>
            </div>

            <div className="">
                <div className=""></div>
            </div>  

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