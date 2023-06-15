import React, {Component, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../resources/css/App.css'

// Importing Images
import Honeycombs from '../../resources/images/honeycombs.png';


const Honeycomb = (): JSX.Element => {
    return ( 

        <div id="honeycomb">

            <img src={Honeycombs}/>
            
            <div className="honeycombs-container">
                <NavLink to={`/Agenda`} className="router-link-honeycomb" id='router-link-1'>
                    Agenda
                </NavLink>
                <NavLink to={`/Nieuws`} className="router-link-honeycomb" id='router-link-2'>
                    Nieuws
                </NavLink>
                <NavLink to={`/Bijenzwerm`} className="router-link-honeycomb" id='router-link-3'>
                    Bijenzwerm
                </NavLink>
                <NavLink to={`/Vrienden`} className="router-link-honeycomb" id='router-link-4'>
                    Vrienden
                </NavLink>
                <NavLink to={`/Projecten`} className="router-link-honeycomb" id='router-link-5'>
                    Projecten
                </NavLink>
                <NavLink to={`/Projecten`} className="router-link-honeycomb" id='router-link-6'>
                    Bijhouden
                </NavLink>
                <NavLink to={`/Contact`} className="router-link-honeycomb" id='router-link-7'>
                    Contact
                </NavLink>
            </div>

        </div>
    )
}
export default Honeycomb;