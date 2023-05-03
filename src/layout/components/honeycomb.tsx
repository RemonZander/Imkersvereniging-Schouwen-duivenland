import React, {Component, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../resources/css/App.css'
import axios from 'axios';
import classNames from 'classnames';

// Importing Images
import Honeycombs from '../../resources/images/honeycombs.png';


const Honeycomb = (): JSX.Element => {
    return ( 

        <div id="honeycomb">

            <img src={Honeycombs}/>
            
            <div className="honeycombs-container">
                <NavLink to={`/imkercafe`} className="router-link-honeycomb" id='router-link-1'>
                    Imkercafe
                </NavLink>
                <NavLink to={`/cursussen`} className="router-link-honeycomb" id='router-link-2'>
                    Cursussen
                </NavLink>
                <NavLink to={`/workshops`} className="router-link-honeycomb" id='router-link-3'>
                    Workshops
                </NavLink>
                <NavLink to={`/lezingen`} className="router-link-honeycomb" id='router-link-4'>
                    Lezingen
                </NavLink>
                <NavLink to={`/vergaderingen`} className="router-link-honeycomb" id='router-link-5'>
                    Vergaderen
                </NavLink>
                <NavLink to={`/LOI`} className="router-link-honeycomb" id='router-link-6'>
                    LOI
                </NavLink>
            </div>

        </div>
    )
}
export default Honeycomb;