import React, {Component, useRef, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../resources/css/App.css'

// Importing Images
import Honeycombs from '../../resources/images/honeycombs.png';


const Honeycomb = (): JSX.Element => {
    //const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimer = useRef<number | null>(null);

    const honeycomb = useRef<HTMLDivElement>(null);

    const honeycomb2 = document.getElementById('honeycomb')


    useEffect(() => {
        const handleScroll = () => {
            console.log("hoi");
            honeycomb2?.classList.toggle('is-active');
          //setIsScrolling(true);
          if (scrollTimer.current) clearTimeout(scrollTimer.current); // clear previous timer if it exists
          scrollTimer.current = window.setTimeout(() => {
            //setIsScrolling(false);
          }, 100); // Set a timeout to run after scrolling has stopped
        };

        window.addEventListener('scroll', handleScroll);
    
        // cleanup
        // return () => {
        //   if (scrollTimer.current) clearTimeout(scrollTimer.current); // clear timer if it exists
        //   window.removeEventListener('scroll', handleScroll);
        // };
      }, []); // Empty array ensures this runs on mount and unmount
    return ( 

        <div className="honeycomb" id="honeycomb" ref={honeycomb}> 

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